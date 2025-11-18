import { HttpFactoryService } from "@/services/http-factory.service";
import { CreateUserRequest, CreateUserResponse, DeleteUserResponse, GetAllUsersResponse, GetUserByIdResponse, UpdateUserRequest, UpdateUserResponse, User } from "@/types/user.type";


const getHttp = () => {
    const httpFactory = new HttpFactoryService();
    return httpFactory.createHttpService();
}

const getAuthHttp = () => {
    const httpFactory = new HttpFactoryService();
    return httpFactory.createAuthHttpService();
};

export const getAllUsersEndpoint = async (page: number, limit: number): Promise<GetAllUsersResponse> => {
    return getHttp().get<GetAllUsersResponse>(`users/?page=${page}&limit=${limit}`);
}

export const getUserByIdEndpoint = async (id: string): Promise<GetUserByIdResponse> => {
    return getHttp().get<GetUserByIdResponse>(`users/${id}`);
}

export const deleteUserByIdEndpoint = async (id: string): Promise<DeleteUserResponse> => {
    return getAuthHttp().delete<DeleteUserResponse>(`users/${id}`);
}   

export const updateUserByIdEndpoint = async (id: string, data: UpdateUserRequest):Promise<UpdateUserResponse>  => {
    return getAuthHttp().put<UpdateUserResponse, UpdateUserRequest>(`users/${id}`, data);
}

export const createUserEndpoint = async (data: CreateUserRequest): Promise<CreateUserResponse> => {
    return getAuthHttp().post<CreateUserResponse, CreateUserRequest>("users", data);
}