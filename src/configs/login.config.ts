import { FormField } from '@/types/customForm.type';

export const loginFormConfig: FormField[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    rules: {
      required: "This field is required",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Please enter a valid email"
      }
    }
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Write your password',
    rules: {
      required: "Password is required",
        minLength: { value: 6, message: "Minimum 6 characters" }
    }
  }
];