import { GetAllVehicleRes } from "@/types/vehicles.type";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAllVehiclesEndpoint } from "./vehicles.endpoint";
import { PAGINATION_LIMIT } from "@/constants/app.constants";


export const useGetAllVehiclesQuery = (page: number, initialData: GetAllVehicleRes): UseQueryResult<GetAllVehicleRes, unknown> => {
    return useQuery({
        queryKey: ['vehicles', page],
        queryFn: () => getAllVehiclesEndpoint(page, PAGINATION_LIMIT),
        placeholderData: (prev) => prev,
        initialData: page === 1 ? initialData : undefined,
        staleTime: 1000 * 60 * 1,
    });
}