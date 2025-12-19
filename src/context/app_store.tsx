import { ProjectSchema } from "@/types/project";
import { createContext } from "react";
import z from "zod";

export const AppStoreContextSchema = z.object({
  projects: z.array(ProjectSchema),
  currentProject: z.string().or(z.null()),
  projectList: z.array(z.object({
    id: ProjectSchema.shape.id,
    name: ProjectSchema.shape.name,
    slug: ProjectSchema.shape.slug,
  }))
})
export type AppStoreContext = z.infer<typeof AppStoreContextSchema>;

export const defaultAppStoreContextState: AppStoreContext = {
  projects: [],
  currentProject: null,
  projectList: []
}

export const AppContext = createContext<AppStoreContext>(defaultAppStoreContextState);

export const AppDispatchContextSchema = z.object({
  createProject: z.function({ input: [z.string()] }),
  removeProject: z.function({ input: [z.string()] }),
  selectProject: z.function({ input: [z.string().or(z.null())] }),
  addSection: z.function({ input: [z.string()] }),
  removeSection: z.function({ input: [z.number()] }),
  addTodoToSection: z.function({ input: [z.number(), z.string()] }),
  removeTodoFromSection: z.function({ input: [z.number(), z.number()] }),
  toggleSectionDone: z.function({ input: [z.number(),] }),
  toggleSectionTodoDone: z.function({ input: [z.number(), z.number(),] }),
  changeSectionTitle: z.function({ input: [z.number(), z.string()] }),
  changeSectionTodoTitle: z.function({ input: [z.number(), z.number(), z.string()] })
})

export type AppDispatch = z.infer<typeof AppDispatchContextSchema>;

export const defaultAppDispatchState: AppDispatch = {
  createProject: () => { },
  removeProject: () => { },
  selectProject: () => { },
  addSection: () => { },
  removeSection: () => { },
  addTodoToSection: () => { },
  removeTodoFromSection: () => { },
  toggleSectionDone: () => { },
  toggleSectionTodoDone: () => { },
  changeSectionTitle: () => { },
  changeSectionTodoTitle: () => { }
}

export const AppDispatchContext = createContext<AppDispatch>(defaultAppDispatchState);