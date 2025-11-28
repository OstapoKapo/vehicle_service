import { FormField } from "@/types/customForm.type";
import { User } from "@/types/user.type";


export const updateUserConfig = (user: User): FormField[] => [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'Enter your name',
        defaultValue: user.firstName,
        rules: {
            required: "This field is required",
            minLength: { value: 2, message: "Minimum 2 characters" }
        }
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Enter your last name',
        defaultValue: user.lastName,
        rules: {
            required: "This field is required",
            minLength: { value: 2, message: "Minimum 2 characters" }
        }
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        defaultValue: user.email,
        rules: {
            required: "This field is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email" }
        }
    }
];