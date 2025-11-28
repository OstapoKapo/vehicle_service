import { Vehicle } from "@/types/vehicles.type";

interface VehicleContainerProps {
  vehicle: Vehicle;
}

export const VehicleContainer = ({ vehicle }: VehicleContainerProps) => {
    return (
        <div>
            <h1>{vehicle.make ? vehicle.make : "Unknown Make"} {vehicle.model ? vehicle.model : "Unknown Model"}</h1>
            <p>Year: {vehicle.year ? vehicle.year : "Unknown Year"}</p>
            <p>Color: {vehicle.vin ? vehicle.vin : "Unknown VIN"}</p>
        </div>
    );
}