import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UpdateVehicleReq, UpdateVehicleRes } from "@/types/vehicles.type";
import { UpdateVehicle } from "./vehicles.endpoint";

export const useUpdateVehicle = (): UseMutationResult<
  UpdateVehicleRes,
  unknown,
  {data: UpdateVehicleReq, id: string}
> => {
  const queryClient = useQueryClient();
  return useMutation({
      mutationFn: {data: UpdateVehicleReq, id: string} => UpdateVehicle(data, id),
    onSuccess: async (data) => {
      toast.success(data.message);
      await queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
