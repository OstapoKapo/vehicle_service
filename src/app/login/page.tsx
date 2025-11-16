
'use client';

import { useLoginMutation } from "@/api/auth/auth.mutation";
import { CustomForm } from "@/components/custom/customForm.component";
import { loginFormConfig } from "@/configs/login.config";
import { LoginRequest, LoginResponse } from "@/types/auth.type";
import { FieldValues } from "react-hook-form";

const LoginPage = () => {
    const loginMutation = useLoginMutation();  

    const handleLogin = async (data: LoginRequest) => {
        await loginMutation.mutateAsync(data);
    };

    return (
        <div className="page justify-center">
            <h1 className="text-2xl font-bold mb-4">Вхід</h1>
            <CustomForm
                fields={loginFormConfig}
                onSubmit={handleLogin}
                submitText="Login"
            />
            <p className="mt-10">Don't have an account? <a href="/signup" className="text-blue-500">Sign up here</a></p>
        </div>
    );
}

export default LoginPage;