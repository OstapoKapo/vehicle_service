import { EnhancedWithAuthHttpService } from "@/services/http-auth.service";
import { HttpFactoryService } from "@/services/http-factory.service";

import {
  LoginRequest,
  LoginResponse,
  LogoutResponse
} from "@/types/auth.type";

const getHttp = () => {
  const factory = new HttpFactoryService();
  const http = factory.createHttpService();
  return new EnhancedWithAuthHttpService(http);
};

const getAuthHttp = () => {
  const factory = new HttpFactoryService();
  const http = factory.createAuthHttpService(); 
  return new EnhancedWithAuthHttpService(http);
};

export const loginEndpoint = async (
  data: LoginRequest,
): Promise<LoginResponse> => {
  return getHttp().post<LoginResponse, LoginRequest>("auth/login", data);
};

export const logoutEndpoint = async (): Promise<LogoutResponse> => {
  return getAuthHttp().post<LogoutResponse, void>("auth/logout", undefined);
};
