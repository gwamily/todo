import type { TodoSection } from "@/types/section"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Checkbox } from "./ui/checkbox";
import { Plus, TextAlignJustify, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { getSectionTodoStatus, useTodoActions } from "@/hooks/useTodoContext";
import { cn } from "@/lib/utils";
import { ButtonGroup } from "./ui/button-group";

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
            checked={section.isDone} onCheckedChange={(_e) => {
              actions.toggleSectionDone(sectionIndex);
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
        <div className='flex flex-col gap-2'>
          {section.todos.map((todo, ti) => (
            <div key={todo.id} className='flex flex-row items-center shadow gap-2 bg-paper p-2'>
              <Checkbox
                className='data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600 border-purple-500 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"'
                checked={todo.done} onCheckedChange={(_e) => {
                  actions.toggleSectionTodoDone(sectionIndex, ti)
                }} />
              <span className={cn({
                "line-through text-muted-foreground": todo.done,
              })}>
                {todo.title}
              </span>
              <ButtonGroup className='ml-auto hover:cursor-pointer'>
                <Button size={"sm"} className={cn("w-7 h-7 bg-red-500 hover:bg-red-950 hover:cursor-pointer")}
                  onClick={() => actions.removeTodoFromSection(sectionIndex, ti)}
                >
                  <Trash />
                </Button>
              </ButtonGroup>
            </div>
          ))}
        </div>
        <Button className='mt-2 mx-auto' onClick={() => actions.addTodoToSection(sectionIndex, "Hello")}>
          <Plus />
        </Button>
      </CollapsibleContent>
    </Collapsible>
  )
}