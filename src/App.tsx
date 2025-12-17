import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { ButtonGroup } from './components/ui/button-group';
import { Button } from './components/ui/button';
import { ScrollArea } from './components/ui/scroll-area';
import { SectionTodo } from './components/TodoSection';
import { useTodoContext } from './hooks/useTodoContext';
import { AddSectionForm } from './components/AddSectionForm';

function App() {

  const { sections } = useTodoContext();

  return (
    <div className='relative flex flex-col gap-5 my-20 w-full h-full font-gwam tracking-normal'>
      <video src="/gradient.webm" autoPlay loop muted className='min-w-screen min-h-screen w-auto h-auto -z-50 fixed top-0 left-0 object-fill'></video>
      <div className='mx-2 md:mx-0'>
        <Card className='bg-white max-w-200 mx-auto gap-2'>
          <CardHeader>
            <CardTitle>Subnautica TODOs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='w-full flex flex-col gap-2'>
              <AddSectionForm />
              <ScrollArea className='w-full h-100 '>
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
