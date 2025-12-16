import type { TodoSection } from "@/types/section"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Checkbox } from "./ui/checkbox";
import { Plus, TextAlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import { getSectionTodoStatus, useTodoActions } from "@/hooks/useTodoContext";

interface Props {
  section: TodoSection
  sectionIndex: number
}

export const SectionTodo: React.FC<Props> = ({ section, sectionIndex }) => {

  const actions = useTodoActions();
  const status = getSectionTodoStatus(section);

  return (
    <Collapsible>
      <div className='flex items-center border p-2 gap-2'>
        {section.todos.length <= 0 ? (
          <Checkbox
            className='data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600 border-purple-500 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"'
            checked={section.isDone} onCheckedChange={(e) => {
              actions.toggleSectionDone(sectionIndex, e as boolean);
            }}
          />
        ) : (
          <Checkbox
            className='data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600 border-purple-500 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"'
            disabled={section.todos.length >= 0}
            checked={section.isDone}
          />
        )}
        <CollapsibleTrigger className='w-full'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-row items-center gap-3'>
              {section.title}
              {status && <span>{status.done}/{status.total}</span>}
            </div>
            <TextAlignJustify />
          </div>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className='flex flex-col w-full p-3'>
        <div className='flex flex-col'>
          {section.todos.map((todo, ti) => (
            <div key={`todo-${ti}`}>
              <Checkbox checked={todo.done} onCheckedChange={e => actions.toggleSectionTodoDone(sectionIndex, ti, e as boolean)} />
              {todo.title}
            </div>
          ))}

        </div>
        <Button className='mx-auto' onClick={() => actions.addTodoToSection(sectionIndex, "Hello")}>
          <Plus />
        </Button>
      </CollapsibleContent>
    </Collapsible>
  )
}