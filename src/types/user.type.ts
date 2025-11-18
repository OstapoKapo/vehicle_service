
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface GetAllUsersResponse {
    users: User[];
    total: number;
    totalPages: number;
}

export interface GetUserByIdResponse {
    user: User;
}

export interface CreateUserResponse {
   user: User,
   message: string;
}

export interface UpdateUserResponse {
    user: User,
    message: string;
}

export interface DeleteUserResponse {
    message: string;
}

export interface CreateUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    currentPassword?: string;
    isAdmin: boolean;
}

export interface UpdateUserRequest {
    firstName?: string;
    lastName?: string;
    email?: string;
    isAdmin?: boolean;
    password?: string;
    currentPassword?: string;
}

