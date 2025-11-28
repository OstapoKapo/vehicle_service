import { PAGINATION_LIMIT } from "@/constants/app.constants";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAllUsersEndpoint } from "../user/user.endpoint";
import { GetAllUsersRes } from "@/types/user.type";


export const useGetAllUsersQuery = (page: number, initialData: GetAllUsersRes): UseQueryResult<GetAllUsersRes, unknown> => {
    return useQuery({
        queryKey: ['users', page],
        queryFn: () => getAllUsersEndpoint(page, PAGINATION_LIMIT),
        placeholderData: (prev) => prev,
        initialData: page === 1 ? initialData : undefined,
        staleTime: 1000 * 60 * 1,
    });
}