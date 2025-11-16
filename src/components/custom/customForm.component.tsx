'use client';

import { 
  useForm, 
  SubmitHandler, 
  FieldValues,
  Path,
  DefaultValues 
} from 'react-hook-form';
import { FormField } from '@/types/customForm.type';
import { useMemo } from 'react';

interface DynamicFormProps<T extends FieldValues> {
  fields: FormField[]; 
  onSubmit: SubmitHandler<T>;
  submitText?: string; 
}

export const CustomForm = <T extends FieldValues>({ fields, onSubmit, submitText = 'Submit' }: DynamicFormProps<T>) => {
  'use no memo';
  
  const defaultValues = useMemo<DefaultValues<T>>(() => {
    return fields.reduce((acc, field) => {
      (acc as any)[field.name] = field.defaultValue || ''; 
      return acc;
    }, {} as DefaultValues<T>);
  }, [fields]);

  const { register, handleSubmit, formState: { errors } } = useForm<T>({
    mode: 'onChange',
    defaultValues: defaultValues, 
  });

  const onFormSubmit = handleSubmit(onSubmit);

  return (
    <div className="card w-full max-w-md">
      <form onSubmit={onFormSubmit} className="space-y-6">
        
        {fields.map((field: FormField) => (
          <div key={field.name} className="flex flex-col">
            <label htmlFor={field.name} className="block text-sm font-medium text-foreground">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type || 'text'} 
              className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:border-primary focus:ring-primary bg-background text-foreground border-border"
              style={{'border': !!errors[field.name as Path<T>] ? '1px solid red' : ''}}
              
              {...register(field.name as Path<T>, field.rules as Record<string, unknown>)}
            />
            
            {errors[field.name as Path<T>] && (
              <span className="mt-1 text-sm text-red-500">
                {errors[field.name as Path<T>]?.message?.toString()}
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