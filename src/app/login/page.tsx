
'use client';

import { CustomForm } from "@/components/custom/customForm.component";
import { loginFormConfig } from "@/configs/login.config";
import { FieldValues } from "react-hook-form";

const LoginPage = () => {

    const handleLogin = async (data: FieldValues) => {
        console.log('Login data:', data);
    };

    return (
        <div className="page justify-center">
            <h1 className="text-2xl font-bold mb-4">Вхід</h1>
            <CustomForm
                fields={loginFormConfig}
                onSubmit={handleLogin}
                submitText="Увійти"
            />
            <p className="mt-10">Немає облікового запису? <a href="/signup" className="text-blue-500">Зареєструватися тут</a></p>
        </div>
    );
}

export default LoginPage;