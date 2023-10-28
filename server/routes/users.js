import express from "express";
import { addItem, deleteItem , updateItem, addFolder} from "../controllers/users.js";


const router = express.Router();

router.post("/add-login", addItem);
router.delete("/delete-login", deleteItem);
router.put("/edit-login/:email/:id", updateItem);
router.post("/new-folder/:email", addFolder);

export default router;