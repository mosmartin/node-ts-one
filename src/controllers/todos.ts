import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newToDo = new Todo(Math.random().toString(), text);

  TODOS.push(newToDo);

  res.status(201).json({
    message: "todo created",
    createdTodo: newToDo,
  });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({
    todos: TODOS,
  });
};
