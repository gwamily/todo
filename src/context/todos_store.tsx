import type { TodoSection } from "@/types/section";
import { createContext } from "react";

export interface TodoContextState {
  sections: TodoSection[]
}

export const defaultTodoContextState: TodoContextState = {
  sections: []
};

export const TodoContext = createContext<TodoContextState>({
  sections: []
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