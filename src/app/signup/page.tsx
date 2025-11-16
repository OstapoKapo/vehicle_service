
'use client';

import { CustomForm } from "@/components/custom/customForm.component";
import { registrationFormConfig } from "@/configs/signup.config";
import { FieldValues } from "react-hook-form";

const SignupPage = () => {

    const handleSignup = async (data: FieldValues) => {
        console.log('Signup data:', data);
    };

    return (
        <div className="page justify-center">
            <h1 className="text-2xl font-bold mb-4">Реєстрація</h1>
            <CustomForm
                fields={registrationFormConfig}
                onSubmit={handleSignup}
                submitText="Зареєструватися"
            />
            <p className="mt-10">Вже маєте обліковий запис? <a href="/login" className="text-blue-500">Увійти тут</a></p>
        </div>
    )
}

export default SignupPage;