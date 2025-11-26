export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface GetAllVehicleRes {
  data: Vehicle[];
}

export interface GetAllVehicleReq {
  limit: number;
  page: number;
}

export interface UpdateVehicleRes {
  message: string;
}

export interface UpdateVehicleReq {
  vehicle: Partial<Vehicle>;
}
