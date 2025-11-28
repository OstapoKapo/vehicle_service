
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface GetAllUsersRes {
    users: User[];
    total: number;
    totalPages: number;
}

export type CreateUserReq = User & { password: string };

export type UpdateUserReq = Partial<CreateUserReq>;
