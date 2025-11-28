'use client';
import { useGetAllVehiclesQuery } from "@/api/vehicles/vehicles.query";
import { User } from "@/types/user.type";
import { GetAllVehicleRes, Vehicle } from "@/types/vehicles.type";
import { useEffect, useMemo, useState } from "react";
import { CustomTable } from "../custom/customTable.component";
import { EditUserModal } from "../ui/editUserModal.component";
import { getVehicleColums } from "@/configs/allVehicleTable.config";
import { useUpdateVehicleMutation } from "@/api/vehicles/vehicles.mutation";

interface VehicleContainerProps {
  initialData: GetAllVehicleRes;
}

export const AllVehicleContainer = ({initialData}: VehicleContainerProps) => {
    const [page, setPage] = useState(1);
    
    const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const updateMutation = useUpdateVehicleMutation();
    
    const { data, isLoading } = useGetAllVehiclesQuery(page, initialData);
    
    const handleEditClick = (vehicle: Vehicle) => {
        setEditingVehicle(vehicle);
        setIsModalOpen(true);
    };
    
    const handleSaveChanges = (id: string, updatedData: Partial<User | Vehicle>) => {
        updateMutation.mutate(
          { id, data: updatedData as Partial<Vehicle> },
          {
            onSuccess: () => {
              setIsModalOpen(false);
              setEditingVehicle(null);
            },
          },
        );
      };
    
    const vehicleColumns = useMemo(
        () =>
          getVehicleColums({
            page,
            onEdit: (vehicle) => handleEditClick(vehicle),
          }),
        [page, handleEditClick],
      );
    
    useEffect(() => {
        if (!isLoading && data?.data?.length === 0 && page > 1) {
          setPage((prev) => prev - 1);
        }
    }, [data, isLoading, page]);

    console.log(data)
    
    return (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Транспортні засоби</h1>
          <CustomTable
            data={data?.data || []}
            columns={vehicleColumns}
            isLoading={false}
            currentPage={page}
            totalPages={data?.totalPages || 1}
            onPageChange={(newPage) => setPage(newPage)}
          />
    
          <EditUserModal
            type="vehicle"
            isOpen={isModalOpen}
            vehicle={editingVehicle}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveChanges}
            isLoading={updateMutation.isPending}
          />
        </div>
    );
}