import { HttpFactoryService } from "@/services/http-factory.service";
import { LoginRequest, LoginResponse, LogoutResponse } from "@/types/auth.type";

const getHttp = () => {
  const httpFactory = new HttpFactoryService();
  return httpFactory.createHttpService();
};

const getAuthHttp = () => {
  const httpFactory = new HttpFactoryService();
  return httpFactory.createAuthHttpService();
};

export const loginEndpoint = async (
  data: LoginRequest,
): Promise<LoginResponse> => {
  return getHttp().post<LoginResponse, LoginRequest>("auth/login", data);
};

export const logoutEndpoint = async (): Promise<LogoutResponse> => {
  return getAuthHttp().post<LogoutResponse, void>("auth/logout", undefined);
};
