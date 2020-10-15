import express, { Request, Response, NextFunction } from "express";

import todoRoutes from "./routes/todo";

const app = express();

// forward all /todos requests to the todos route handler
app.use("/todos", todoRoutes);

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(3000);
