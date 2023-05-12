import express from "express";

import { isAuth } from "../middlewares/auth.js";
import { addTodo, deleteTodo, getTodo, getTodos } from "../controllers/todoController.js";

const router = express.Router();

router.route("/todos").get(isAuth, getTodos);
router.route("/todo").get(isAuth, getTodo);
router.route("/todo").post(isAuth, addTodo);
router.route("/todo").delete(isAuth, deleteTodo);

export default router;