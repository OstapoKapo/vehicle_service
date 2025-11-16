
'use client';

import { useSignupMutation } from "@/api/auth/auth.mutation";
import { CustomForm } from "@/components/custom/customForm.component";
import { registrationFormConfig } from "@/configs/signup.config";
import { SignupRequest } from "@/types/auth.type";

const SignupPage = () => {
    const signupMutation = useSignupMutation();

    const handleSignup = async (data: SignupRequest) => {
        await signupMutation.mutateAsync(data);
    };

    return (
        <div className="page justify-center">
            <h1 className="text-2xl font-bold mb-4">Реєстрація</h1>
            <CustomForm
                fields={registrationFormConfig}
                onSubmit={handleSignup}
                submitText="Sign Up"
            />
            <p className="mt-10">Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
        </div>
    )
}

export default SignupPage;