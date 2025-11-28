import { EnhancedWithAuthHttpService } from "@/services/http-auth.service";
import { HttpFactoryService } from "@/services/http-factory.service";

import {
  CreateUserReq,
  GetAllUsersRes,
  UpdateUserReq,
  User
} from "@/types/user.type";

const getHttp = () => {
  const httpFactory = new HttpFactoryService();
  const http = httpFactory.createHttpService("user");
  return new EnhancedWithAuthHttpService(http); 
};

const getAuthHttp = () => {
  const httpFactory = new HttpFactoryService();
  const http = httpFactory.createAuthHttpService("user"); 
  return new EnhancedWithAuthHttpService(http);    
};


export const getAllUsersEndpoint = async (
  page: number,
  limit: number
): Promise<GetAllUsersRes> => {
  console.log(process.env.INTERNAL_USER_SERVICE_URL);
  return getHttp().get<GetAllUsersRes>(`users/?page=${page}&limit=${limit}`);
};

export const getUserByIdEndpoint = async (
  id: string
): Promise<{data: User}> => {
  return getHttp().get<{data: User}>(`users/${id}`);
};

export const deleteUserByIdEndpoint = async (
  id: string
): Promise<{message: string}> => {
  return getAuthHttp().delete<{message: string}>(`users/${id}`);
};

export const updateUserByIdEndpoint = async (
  id: string,
  data: UpdateUserReq
): Promise<{message: string}> => {
  return getAuthHttp().put<{message: string}, UpdateUserReq>(
    `users/${id}`,
    data
  );
};

export const createUserEndpoint = async (
  data: CreateUserReq
): Promise<{message: string}> => {
  return getAuthHttp().post<{message: string}, CreateUserReq>(
    "users",
    data
  );
};
