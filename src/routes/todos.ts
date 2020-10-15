import { Router } from "express";

import { createTodo } from "../controllers/todos";

const router = Router();

// create todo
router.post("/", createTodo);

// get all todos
router.get("/");

// get single todo
router.get("/:id");

// update todo
router.put("/:id");

// delete todo
router.delete("/:id");

export default router;
