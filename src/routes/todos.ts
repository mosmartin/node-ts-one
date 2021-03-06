import { Router } from "express";

import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

// create todo
router.post("/", createTodo);

// get all todos
router.get("/", getTodos);

// get single todo
router.get("/:id");

// update todo
router.put("/:id", updateTodo);

// delete todo
router.delete("/:id", deleteTodo);

export default router;
