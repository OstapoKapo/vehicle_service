'use client';

import { useCreateUserMutation } from "@/api/user/user.mutation";
import { CustomForm } from "@/components/custom/customForm.component";
import {getRegistrationFormConfig} from "@/configs/signup.config";
import { CreateUserRequest } from "@/types/user.type";
import { useState } from "react";
const CreateUserPage = () => {
    const [isAdminKey, setIsAdminKey] = useState(false);

    const createMutation = useCreateUserMutation();

    const handleCreateUser = async (data: CreateUserRequest) => {
        await createMutation.mutateAsync(data);
    }
    return (
        <div className="page">
            <CustomForm fields={getRegistrationFormConfig(isAdminKey, setIsAdminKey)} onSubmit={handleCreateUser} submitText="Create"/>
        </div>
    );
}

export default CreateUserPage;