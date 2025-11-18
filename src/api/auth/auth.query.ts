import { PAGINATION_LIMIT } from "@/constants/app.constants";
import { GetAllUsersResponse } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";
import { getAllUsersEndpoint } from "../user/user.endpoint";


export const useGetAllUsersQuery = (page: number, initialData: GetAllUsersResponse) => {
    return useQuery<GetAllUsersResponse>({
        queryKey: ['users', page],
        queryFn: () => getAllUsersEndpoint(page, PAGINATION_LIMIT),
        placeholderData: (prev) => prev,
        initialData: page === 1 ? initialData : undefined,
        staleTime: 1000 * 60 * 1,
    });
}