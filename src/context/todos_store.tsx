import { createContext } from "react";
import type { Project } from '@/types/project'

export interface TodoContextState {
  projects: Project[],
  currentProject: number | null;
}

export const defaultTodoContextState: TodoContextState = {
  projects: [],
  currentProject: null
};

export const TodoContext = createContext<TodoContextState>({
  projects: [],
  currentProject: null
});

export interface TodoActionsContextState {
  addSection: (title: string) => void;
  removeSection: (index: number) => void;
  addTodoToSection: (sectionIndex: number, todoText: string) => void;
  removeTodoFromSection: (sectionIndex: number, todoIndex: number) => void;
  toggleSectionDone: (sectionIndex: number) => void;
  toggleSectionTodoDone: (sectionIndex: number, todoIndex: number) => void;
  changeSectionTitle: (sectionIndex: number, title: string) => void;
  changeSectionTodoTitle: (sectionIndex: number, todoIndex: number, title: string) => void
}

export const defaultTodoActionsContextState: TodoActionsContextState = {
  addSection: () => { },
  removeSection: () => { },
  addTodoToSection: () => { },
  removeTodoFromSection: () => { },
  toggleSectionDone: () => { },
  toggleSectionTodoDone: () => { },
  changeSectionTitle: () => { },
  changeSectionTodoTitle: () => { }
};
export const TodoActionsContext = createContext<TodoActionsContextState>(defaultTodoActionsContextState);