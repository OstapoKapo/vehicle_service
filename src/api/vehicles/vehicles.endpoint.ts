import { EnhancedWithAuthHttpService } from "@/services/http-auth.service";
import { HttpFactoryService } from "@/services/http-factory.service";
import { DefaultVehicleRes, GetAllVehicleRes, Vehicle } from "@/types/vehicles.type";

const getHttp = () => {
  const httpFactory = new HttpFactoryService();
  const http = httpFactory.createHttpService("vehicle");
  return new EnhancedWithAuthHttpService(http);
};

const getAuthHttp = () => {
  const httpFactory = new HttpFactoryService();
  const http = httpFactory.createAuthHttpService("vehicle");
  return new EnhancedWithAuthHttpService(http);
};

export const getVehicleByIdEndpoint = async (
  id: string
): Promise<{data: Vehicle}> => {
  return getHttp().get<{data: Vehicle}>(`vehicles/${id}`);
};

export const deleteVehicleByIdEndpoint = async (
  id: string
): Promise<DefaultVehicleRes> => {
  return getAuthHttp().delete<DefaultVehicleRes>(`vehicles/${id}`);
};

export const updateVehicleByIdEndpoint = async (
  id: string,
  data: Partial<Vehicle>
): Promise<DefaultVehicleRes> => {
  return getAuthHttp().put<DefaultVehicleRes, Partial<Vehicle>>(
    `vehicles/${id}`,
    data
  );
};

export const getAllVehiclesEndpoint = async (
    page: number,
    limit: number
): Promise<GetAllVehicleRes> => {
  return getHttp().get<GetAllVehicleRes>(`vehicles/?page=${page}&limit=${limit}`);
};