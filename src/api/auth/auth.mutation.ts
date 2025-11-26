import { LoginRequest, LoginResponse, LogoutResponse } from "@/types/auth.type";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginEndpoint, logoutEndpoint } from "./auth.endpoint";
import toast from "react-hot-toast";

export const useLoginMutation = (): UseMutationResult<
  LoginResponse,
  unknown,
  LoginRequest
> => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data) => loginEndpoint(data),
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/");
    },
  });
};

export const useLogoutMutation = (): UseMutationResult<
  LogoutResponse,
  unknown,
  undefined
> => {
  const router = useRouter();
  return useMutation({
    mutationFn: () => logoutEndpoint(),
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/login");
    },
  });
};

