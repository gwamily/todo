import { z } from "zod";
import { TodoSectionSchema } from "./section";

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  sections: z.array(TodoSectionSchema)
})

export const makeNewProject = (name: string) => ({
  id: crypto.randomUUID(),
  name,
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  sections: []
})

export type Project = z.infer<typeof ProjectSchema>;