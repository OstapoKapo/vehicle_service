import { HttpFactoryService } from "@/services/http-factory.service";
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from "@/types/auth.type";

const getHttp = () => {
    const httpFactory = new HttpFactoryService();
    return httpFactory.createHttpService();
};

const getAuthHttp = () => {
    const httpFactory = new HttpFactoryService();
    return httpFactory.createAuthHttpService();
};

export const loginEndpoint = async (data: LoginRequest): Promise<LoginResponse> => {
    return getHttp().post<LoginResponse, LoginRequest>("auth/login", data);
}

export const signupEndpoint = async (data: SignupRequest): Promise<SignupResponse> => {
    return getHttp().post<SignupResponse, SignupRequest>("auth/signup", data);
}

export const getMeEndpoint = async () => {
    return getAuthHttp().get<LoginResponse>("auth/me");
}