
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    message: string;
}

export interface SignupRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface SignupResponse {
    message: string;
}

export interface LogoutResponse {
    message: string;
}