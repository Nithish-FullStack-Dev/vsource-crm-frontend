// crm-frontend-next\app\services\auth.service.ts
import { api } from "@/lib/api";

export interface LoginDto {
    email: string;
    password: string;
}

export const authService = {
    async login(data: LoginDto) {
        const response = await api.post("/auth/login", data);
        return response.data;
    },

    async register(data: any) {
        const response = await api.post("/auth/register", data);
        return response.data;
    },
};