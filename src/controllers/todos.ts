import { RequestHandler } from "express";
import { nextTick } from "process";

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

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const newText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    throw new Error("Todo not found!");
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, newText);

  res.status(200).json({
    message: "Todo updated",
    updatedTodo: TODOS[todoIndex],
  });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    throw new Error("Todo not found!");
  }

  TODOS.splice(todoIndex, 1);

  res.status(200).json({
    message: "Todo deleted",
  });
};
