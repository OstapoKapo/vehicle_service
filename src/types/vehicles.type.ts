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

export interface DefaultVehicleRes {
  message: string;
}

export interface GetAllVehicleRes {
  data: Vehicle[];
  total: number;
  totalPages: number;
}

