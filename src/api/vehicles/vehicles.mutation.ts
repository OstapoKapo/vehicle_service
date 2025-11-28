import { Vehicle } from "@/types/vehicles.type";
import { updateVehicleByIdEndpoint } from "./vehicles.endpoint";
import { toast } from "react-hot-toast";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";


export const useUpdateVehicleMutation = (): UseMutationResult<{message: string}, unknown, { id: string; data: Partial<Vehicle> }> => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => updateVehicleByIdEndpoint(id, data),
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({ queryKey: ['vehicles'] });
        }
    });
};