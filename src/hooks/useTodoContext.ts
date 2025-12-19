import type { TodoSection } from "@/types/section";

export const getSectionTodoStatus = (section: TodoSection): { total: number, done: number } | null => {

  if (section.todos.length <= 0) {
    return null
  }

  let counter = 0;
  section.todos.forEach(todo => {
    if (todo.done) counter++;
  });

  return {
    total: section.todos.length,
    done: counter
  };
}