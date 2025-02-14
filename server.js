import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js';
import userRouter from './routes/userRoutes.js';
import transRouter from './routes/transectionRoutes.js';

dotenv.config(); //Read .env file

connectDb(); //connect app to mongodb

const app = express();

app.use(morgan("dev")); //Enables logging of HTTP requests in a "dev" format, useful for debugging.
app.use(express.json()); //Parses incoming JSON requests so req.body contains the parsed data
app.use(cors()); //Enables CORS to allow cross-origin requests, useful for frontend-backend communication.

app.use('/api/v1/users', userRouter);
app.use("/api/v1/transections", transRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is connected at port ${PORT}`);
});