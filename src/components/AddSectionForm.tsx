import { useTodoActions } from "@/hooks/useTodoContext";
import { TodoFormSchema } from "@/types/todo";
import { useForm } from "@tanstack/react-form";
import { Field, FieldError, FieldGroup } from "./ui/field";
import { ButtonGroup } from "./ui/button-group";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { getRandomPlaceholder } from "@/lib/utils";

export const AddSectionForm: React.FC = () => {

  const actions = useTodoActions();

  const form = useForm({
    defaultValues: {
      title: ""
    },
    validators: {
      onSubmit: TodoFormSchema
    },
    onSubmit: ({ value }) => {
      actions.addSection(value.title);
      form.reset();
    }
  });

  const placeholder = getRandomPlaceholder();

  return (
    <div className='w-full'>
      <form onSubmit={e => {
        e.preventDefault();
        form.handleSubmit(e);
      }}>
        <FieldGroup>
          <form.Field name='title'
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Field data-invalid={isInvalid}>
                  <ButtonGroup>
                    <Input type='text' autoComplete='off' aria-invalid={isInvalid} placeholder={placeholder} name={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={e => field.handleChange(e.target.value)} />
                    <Button variant={"outline"} aria-label='Add to todo list' type='submit'>
                      <Plus />
                    </Button>
                  </ButtonGroup>
                  {isInvalid && (
                    <FieldError className='text-xs' errors={field.state.meta.errors} />
                  )}
                </Field>
              )
            }} />
        </FieldGroup>
      </form>
    </div>
  )
}