
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from '@/types/auth.type';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast/headless';
import { loginEndpoint, signupEndpoint } from './auth.endpoint';

export const useSignupMutation = (): UseMutationResult<SignupResponse, unknown, SignupRequest> => {
	const router = useRouter();
	return useMutation({
		mutationFn: signupEndpoint,
		onSuccess: (data: SignupResponse) => {
			toast.success(data.message);
			router.push('/login');
		},
	});
};

export const useLoginMutation = (): UseMutationResult<LoginResponse, unknown, LoginRequest> => {
    const router = useRouter();
    return useMutation({
        mutationFn: loginEndpoint,
        onSuccess: (data: LoginResponse) => {
            toast.success(data.message);
            router.push('/');
        },
    });
}