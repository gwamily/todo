import { z } from 'zod';

export const TodoSchema = z.object({
  id: z.string(),
  title: z.string({ error: "Title cannot be empty" }),
  done: z.boolean().default(false),
  createdAt: z.date().default(new Date()),
  updatedAt: z.date().default(new Date()),
  pinned: z.boolean().default(false),
})

export const makeNewTodo = (title: string): Todo => ({
  id: crypto.randomUUID(),
  title: title,
  done: false,
  pinned: false,
  createdAt: new Date(),
  updatedAt: new Date()
});

export const TodoFormSchema = z.object({
  title: z.string().min(1, { message: "Title has to be at least 1 character long" })
})

export type Todo = z.infer<typeof TodoSchema>;