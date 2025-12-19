import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { ScrollArea } from './components/ui/scroll-area';
import { SectionTodo } from './components/TodoSection';
import { AddSectionForm } from './components/AddSectionForm';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './components/ui/dropdown-menu';
// import { GWAMIconButton } from './components/GWAMStyled';
// import { Cog, Trash } from 'lucide-react';
import { EmptyTodos } from './components/EmptyTodos';
import { TodoProjectSelector } from './components/TodoProjectSelector';
import { useProject } from './hooks/useProject';
import { useMemo } from 'react';

function App() {

  const state = useProject();

  const currentProject = useMemo(() => {
    return state.projects.find(p => p.id === state.currentProject)
  }, [state.currentProject, state.projects])

  return (
    <div className='relative flex flex-col gap-5 my-20 w-full h-full font-gwam tracking-normal'>
      <video src="/subtodo/gradient.webm" autoPlay loop muted className='min-w-screen min-h-screen w-auto h-auto -z-50 fixed top-0 left-0 object-fill'></video>
      <div className='mx-2 md:mx-0'>
        <Card className='bg-white max-w-200 mx-auto gap-2'>
          <CardHeader>
            <CardTitle className='flex flex-row justify-between w-full items-center'>
              <div className='flex gap-2 items-center'>
                <span>
                  GWAM TODOs
                </span>
                <TodoProjectSelector />
              </div>
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <GWAMIconButton className='bg-linear-to-b from-purple-400 to-pink-400'>
                    <Cog />
                  </GWAMIconButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem className='hover:cursor-pointer text-xs'>
                      <Trash color="red" /> Remove all projects
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='w-full flex flex-col gap-2'>
              {state.currentProject && <AddSectionForm />}
              <ScrollArea className='w-full h-100 '>
                {currentProject == null ? (
                  <div>
                    Select project
                  </div>
                ) : (
                  currentProject?.sections.length <= 0 ? (
                    <EmptyTodos />
                  ) : (
                    <div className='flex flex-col gap-2'>
                      {currentProject?.sections.map((section, si) =>
                        (<SectionTodo key={`section-${si}`} section={section} sectionIndex={si} />)
                      )}
                    </div>
                  )
                )}
              </ScrollArea>
            </div>
          </CardContent>
          <CardFooter>
            <span className='text-sm mt-5'>
              Made with ✌ and ❤️ by Pawix
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default App