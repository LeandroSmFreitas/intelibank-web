export interface Login{
    email: string;
    password: string;
}

export interface LoginResponse{
    token?: string;
    message: string;
}

export interface Register{
    name: string;
    email: string;
    password: string;
}