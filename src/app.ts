import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();

app.use(json());

// forward all /todos requests to the todos route handler
app.use("/todos", todoRoutes);

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
