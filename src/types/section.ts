import { z } from "zod";
import { TodoSchema } from "./todo";

export const TodoSectionSchema = z.object({
  title: z.string().min(1),
  todos: z.array(TodoSchema),
  isDone: z.boolean().default(false),
})

export type TodoSection = z.infer<typeof TodoSectionSchema>;

export const makeNewTodoSection = (sTitle: string): TodoSection => ({
  title: sTitle,
  todos: [],
  isDone: false
})