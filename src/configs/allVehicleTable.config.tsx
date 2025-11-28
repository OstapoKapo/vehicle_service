import { CustomBtn } from "@/components/custom/customBtn.component";
import { PAGINATION_LIMIT } from "@/constants/app.constants";
import { ColumnConfig } from "@/types/customTable.type";
import { User } from "@/types/user.type";
import { Vehicle } from "@/types/vehicles.type";
import Link from "next/link";

interface VehicleColumnsProps {
    page: number;
    onEdit: (vehicle: Vehicle) => void;  
}

export const getVehicleColums = ({ page, onEdit }: VehicleColumnsProps): ColumnConfig<Vehicle>[] => {
    return [
        { 
            header: 'User ID', 
            render: (vehicle) => <span>{vehicle.userId}</span>,
            className: "w-12"
        },
        { 
            header: 'Make', 
            render: (vehicle) => <span className="font-medium">{vehicle.make ? vehicle.make : "N/A"}</span> 
        },
        { 
            header: 'Model', 
            render: (vehicle) => <span className="">{vehicle.model ? vehicle.model : "N/A"}</span> 
        },
        { 
            header: 'Year', 
            render: (vehicle) => (
               <span>{vehicle.year ? vehicle.year : "N/A"}</span>
            ) 
        },
        {
            header: 'Actions',
            render: (vehicle) => (
                <div className="gap-2 flex items-center">                    
                    <CustomBtn label="Edit" onClick={() => onEdit(vehicle)} style="text-blue-500 hover:underline" />
                    
                    <Link href={`/vehicles/${vehicle.id}`} className="text-green-500 hover:underline">
                        View
                    </Link>
                </div>
            )
        }
    ];
};