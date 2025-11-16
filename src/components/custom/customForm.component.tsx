'use client';

import { 
  useForm, 
  SubmitHandler, 
  FieldValues, 
} from 'react-hook-form';
import { FormField } from '@/types/customForm.type';

interface DynamicFormProps {
  fields: FormField[]; 
  onSubmit: SubmitHandler<FieldValues>;
  submitText?: string; 
}

export const CustomForm = ({ fields, onSubmit, submitText = 'Submit' }: DynamicFormProps) => {
  'use no memo';

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    mode: 'onChange',
  });

  const onFormSubmit = handleSubmit(onSubmit);

  return (
    <div className="card w-full max-w-md">
      <form onSubmit={onFormSubmit} className="space-y-6">
        
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label htmlFor={field.name} className="block text-sm font-medium text-foreground">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type || 'text'} 
              className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:border-primary focus:ring-primary bg-background text-foreground border-border"
              style={{'border': !!errors[field.name] ? '1px solid red' : ''}}
              {...register(field.name, field.rules)}
            />
            
            {errors[field.name] && (
              <span className="mt-1 text-sm text-red-500">
                {errors[field.name]?.message?.toString()}
              </span>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="btn btn-primary w-full justify-center"
        >
          {submitText}
        </button>
      </form>
    </div>
  );
};
