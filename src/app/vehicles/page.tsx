import { getAllVehiclesEndpoint } from "@/api/vehicles/vehicles.endpoint";
import { AllVehicleContainer } from "@/components/containers/allVehiclesContainer.component";
import { PAGINATION_LIMIT } from "@/constants/app.constants";
import { GetAllVehicleRes } from "@/types/vehicles.type";


const vehiclesPage = async () => {

    let initialData: null | GetAllVehicleRes = null;
    try{
        const res = await getAllVehiclesEndpoint(1, PAGINATION_LIMIT);
        initialData = res;
        return (
            <AllVehicleContainer initialData={initialData} />
        )
    }catch{
        return (
            <div className="page">
                <h1 className="text-2xl font-bold">Error loading vehicles</h1>
            </div>
        )
    }
};

export default vehiclesPage;