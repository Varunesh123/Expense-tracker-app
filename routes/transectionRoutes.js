import express from "express";
import { 
    addTransection, 
    getAllTransection, 
    editTransection, 
    deleteTransection 
} from "../controllers/transectionCtrl.js";

const transRouter = express.Router();
transRouter.post("/add-transection", addTransection);
transRouter.post("/edit-transection", editTransection);
transRouter.post("/delete-transection", deleteTransection);
transRouter.post("/get-transection", getAllTransection)

export default transRouter;