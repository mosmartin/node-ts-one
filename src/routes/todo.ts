import { Router } from "express";

const router = Router();

// create todo
router.post("/");

// get all todos
router.get("/");

// get single todo
router.get("/:id");

// update todo
router.put("/:id");

// delete todo
router.delete("/:id");

export default router;