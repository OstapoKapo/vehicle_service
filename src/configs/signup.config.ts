import { FormField } from '@/types/customForm.type';
import { ChangeEvent } from 'react';
import { FieldValues } from 'react-hook-form';

export const getRegistrationFormConfig = (isAdminKey: boolean, setIsAdminKey: React.Dispatch<React.SetStateAction<boolean>>): FormField[] => {
  
  const baseFields: FormField[] = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      rules: { required: "This field is required", minLength: { value: 2, message: "Minimum 2 characters" } },
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      rules: { required: "This field is required", minLength: { value: 2, message: "Minimum 2 characters" } },
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
      name: "isAdmin",
      label: "Register as Administrator?",
      type: "checkbox",
      defaultValue: false,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        setIsAdminKey(e.target.checked);
      },
    }
  ];

  const passwordFields: FormField[] = [
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      rules: { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } },
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
      rules: { 
          required: "Please confirm your password",  
          minLength: { value: 6, message: "Minimum 6 characters" },
          validate: (value: string, formValues: FieldValues) => value === formValues.password || "Passwords do not match"
      },
    }
  ];

  if (isAdminKey) {
    return [...baseFields, ...passwordFields];
  }

  return baseFields;
};