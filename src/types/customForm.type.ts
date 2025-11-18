import { FieldValues, SubmitHandler } from "react-hook-form";
import { RegisterOptions } from "react-hook-form";

export interface FormField {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  rules?: RegisterOptions;
  defaultValue?: string | boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomFormProps<T extends FieldValues> {
  fields: FormField[];
  onSubmit: SubmitHandler<T>;
  submitText?: string;
}