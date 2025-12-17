import type { Todo } from "@/types/todo"
import { GWAMCheck, GWAMIconButton } from "./GWAMStyled"
import { useTodoActions } from "@/hooks/useTodoContext"
import { ButtonGroup } from "./ui/button-group"
import { cn } from "@/lib/utils"
import { Trash } from "lucide-react"
import { useState } from "react"
import { Input } from "./ui/input"

interface Props {
  todo: Todo
  sectionIndex: number
  todoIndex: number
}

export const TodoItem: React.FC<Props> = ({ todo, sectionIndex, todoIndex }) => {

  const actions = useTodoActions();
  const [isEditing, setIsEditing] = useState(false);

  const editTodoTitle = (newTitle: string) => {
    if (newTitle.trim() === "") return;
    actions.changeSectionTodoTitle(sectionIndex, todoIndex, newTitle);
  }

  return (
    <div key={todo.id} className='flex flex-row items-center shadow gap-2 bg-paper p-2'>
      <GWAMCheck
        checked={todo.done} onCheckedChange={(_e) => {
          actions.toggleSectionTodoDone(sectionIndex, todoIndex)
        }} />
      <span className={cn({
      })}>
        {isEditing ? (
          <Input value={todo.title} onChange={(e) => {
            editTodoTitle(e.target.value);
          }} onBlur={() => {
            setIsEditing(false);
          }} />
        ) : (
          <span onClick={() => {
            setIsEditing(true)
          }}>
            {todo.title}
          </span>

        )}
      </span>
      <ButtonGroup className='ml-auto hover:cursor-pointer'>
        <GWAMIconButton className="w-7 h-7 bg-red-500 hover:bg-red-700" onClick={() => actions.removeTodoFromSection(sectionIndex, todoIndex)}>
          <Trash />
        </GWAMIconButton>
      </ButtonGroup>
    </div>
  )
}