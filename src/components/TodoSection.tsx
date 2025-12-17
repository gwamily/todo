import type { TodoSection } from "@/types/section"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { getSectionTodoStatus, useTodoActions } from "@/hooks/useTodoContext";
import { ButtonGroup } from "./ui/button-group";
import { GWAMCheck, GWAMIconButton } from "./GWAMStyled";
import { TodoItem } from "./TodoItem";

interface Props {
  section: TodoSection
  sectionIndex: number
}

export const SectionTodo: React.FC<Props> = ({ section, sectionIndex }) => {

  const actions = useTodoActions();
  const status = getSectionTodoStatus(section);

  return (
    <Collapsible>
      <div className='flex items-center border p-2 pr-3 gap-2 bg-paper'>
        {section.todos.length <= 0 ? (
          <GWAMCheck
            checked={section.isDone} onCheckedChange={(_e) => {
              actions.toggleSectionDone(sectionIndex);
            }}
          />
        ) : (
          <GWAMCheck
            disabled={section.todos.length >= 0}
            checked={section.isDone}
          />
        )}
        <CollapsibleTrigger className='w-full cursor-pointer'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-row items-center gap-3'>
              {section.title}
              {status && <span>{status.done}/{status.total}</span>}
            </div>
          </div>
        </CollapsibleTrigger>
        <ButtonGroup>
          <GWAMIconButton className="w-7 h-7 bg-red-500 hover:bg-red-700">
            <Trash />
          </GWAMIconButton>
        </ButtonGroup>
      </div>
      <CollapsibleContent className='flex flex-col w-full p-3'>
        <div className='flex flex-col gap-2'>
          {section.todos.map((todo, ti) => (
            <TodoItem key={`todo-${sectionIndex}-${ti}`} sectionIndex={sectionIndex} todo={todo} todoIndex={ti} />
          ))}
        </div>
        <Button className='mt-2 mx-auto' onClick={() => actions.addTodoToSection(sectionIndex, "Hello")}>
          <Plus />
        </Button>
      </CollapsibleContent>
    </Collapsible>
  )
}