import { HttpFactoryService } from "@/services/http-factory.service";
import {
  GetAllVehicleRes,
  UpdateVehicleReq,
  UpdateVehicleRes,
} from "@/types/vehicles.type";

const getHttp = () => {
  const httpFactory = new HttpFactoryService();
  return httpFactory.createHttpService();
};

const getAuthHttp = () => {
  const httpFactory = new HttpFactoryService();
  return httpFactory.createAuthHttpService();
};

export const getAllVehiclesEndpoint = async (
  page: number,
  limit: number,
): Promise<GetAllVehicleRes> => {
  return getHttp().get<GetAllVehicleRes>(
    `vehicles/?page=${page}&limit=${limit}`,
  );
};

export const UpdateVehicle = (
  data: UpdateVehicleReq,
  id: string,
): Promise<UpdateVehicleRes> => {
  return getAuthHttp().post<UpdateVehicleRes, UpdateVehicleReq>(
    `vehicles/${id}`,
    data,
  );
};
