import { FormField } from '@/types/customForm.type';
import { FieldValues } from 'react-hook-form';

export const registrationFormConfig: FormField[] = [
    {
      name: "fisrtName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      rules: { required: "This field is required", minLength: { value: 3, message: "Minimum 3 characters" } },
    },
    {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter your last name",
        rules: { required: "This field is required", minLength: { value: 3, message: "Minimum 3 characters" } },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      rules: {
        required: "This field is required",
        pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email" },
      },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      rules: { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } },
    },
    {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm your password",
        rules: { 
            required: "Please confirm your password",  
            minLength: { value: 6, message: "Minimum 6 characters" },
            validate: (value: string, formValues: FieldValues) => value === formValues.password || "Passwords do not match"
        },
    }
  ];