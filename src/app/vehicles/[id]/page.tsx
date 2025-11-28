import { getVehicleByIdEndpoint } from "@/api/vehicles/vehicles.endpoint";
import { VehicleContainer } from "@/components/containers/vehicleContainer.component";
import { Vehicle } from "@/types/vehicles.type";

interface VehiclePageProps {
    params: {
        id: string;
    };
}

const vehiclePage = async ({ params }: VehiclePageProps) => {

    let vehicle: null | Vehicle = null;
    const { id } = await params;
    try{
        const res = await getVehicleByIdEndpoint(id);
        vehicle = res.data;
        console.log("Fetched vehicle:", vehicle);
        return (
            <VehicleContainer vehicle={vehicle} />
        )
    }catch{
        return (
            <div className="page">
                <h1 className="text-2xl font-bold">Error loading vehicle</h1>
            </div>
        )
    }
};

export default vehiclePage;