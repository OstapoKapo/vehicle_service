
import { CreateUserReq, UpdateUserReq, User } from '@/types/user.type';
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { createUserEndpoint, deleteUserByIdEndpoint, updateUserByIdEndpoint } from './user.endpoint';
import toast from 'react-hot-toast';
import { create } from 'domain';
import { useRouter } from 'next/navigation';

export const useDeleteUserMutation = (): UseMutationResult<{message: string}, unknown, string> => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteUserByIdEndpoint,
        onSuccess: async (data: {message: string}) => {
            toast.success(data.message);
            await queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
}

export const useUpdateUserMutation = (): UseMutationResult<{message: string}, unknown, { id: string, data: UpdateUserReq }> => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => updateUserByIdEndpoint(id, data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            toast.success(data.message);
        },
    });
};

export const useCreateUserMutation = (): UseMutationResult<{message: string}, unknown, CreateUserReq> => {
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
        mutationFn: (data) => createUserEndpoint(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            toast.success(data.message);
            queryClient.invalidateQueries({ queryKey: ['vehicles'] });
            router.push('/users');
        }   
    });
}