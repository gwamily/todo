import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { ButtonGroup } from './components/ui/button-group';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Hamburger, Pin, Plus, Trash } from 'lucide-react';
import { useForm, } from '@tanstack/react-form'
import { makeNewTodo, TodoFormSchema, type Todo } from './types/todo';
import { Field, FieldError, FieldGroup } from './components/ui/field';
import { useState } from 'react';
import { ScrollArea } from './components/ui/scroll-area';
import { Checkbox } from './components/ui/checkbox';
import { cn } from './lib/utils';
import { makeNewTodoSection, type TodoSection } from './types/section';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/ui/collapsible';
import { SectionTodo } from './components/TodoSection';
import { useTodoContext } from './hooks/useTodoContext';
import { AddSectionForm } from './components/AddSectionForm';

function App() {

  const { sections } = useTodoContext();

  return (
    <div className='relative flex flex-col gap-5 my-20 w-full h-full font-gwam tracking-normal'>
      <video src="/gradient.webm" autoPlay loop muted className='min-w-screen min-h-screen w-auto h-auto -z-50 fixed top-0 left-0 object-fill'></video>
      <div className='mx-2 md:mx-0'>
        <Card className='bg-white max-w-200 mx-auto'>
          <CardHeader>
            <CardTitle>Subnautica TODOs</CardTitle>
            <CardDescription>"Survival is non-negotiable." ~Paul Torgal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='w-full flex flex-col gap-3'>
              {/* Input */}
              <AddSectionForm />
              {/* Todo List */}
              <ScrollArea className='w-full h-100 '>
                {/* <div className='flex flex-col gap-2'>
                  {sortedTodos.map((todo, i) => (
                    <div key={todo.id} className='flex flex-row items-center shadow gap-2 bg-paper p-2'>
                      <Checkbox
                        className='data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600 border-purple-500 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"'
                        checked={todo.done} onCheckedChange={(e) => toggleTodoDone(i)} />
                      <span className={cn({
                        "line-through text-muted-foreground": todo.done,
                      })}>
                        {todo.title} {i}

                      </span>
                      <ButtonGroup className='ml-auto hover:cursor-pointer'>
                        <Button className='bg-pink-500' size={"sm"} onClick={() => pinTodo(i)}>
                          <Pin color={todo.pinned ? "pink" : "white"} />
                        </Button>
                        <Button size={"sm"} className={cn("bg-red-500 hover:bg-red-950 hover:cursor-pointer")}>
                          <Trash />
                        </Button>
                      </ButtonGroup>
                    </div>
                  ))}
                </div> */}
                <div className='flex flex-col gap-2'>
                  {sections.map((section, si) =>
                    (<SectionTodo key={`section-${si}`} section={section} sectionIndex={si} />)
                  )}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
          <CardFooter>
            <ButtonGroup>
              <Button onClick={() => {
              }}>Clear all TODOs</Button>
              <Button>Uncheck all</Button>
              <Button>Check all</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default App
