import { fetchAPI } from "../lib/api";
import { LoginCredentials, LoginResponse } from "../types";

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const resp = await fetchAPI<LoginResponse>("/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })

    if(resp.token) {
        localStorage.setItem("token", resp.token)
        localStorage.setItem("user", JSON.stringify(resp.user))
    }

    return resp;
}

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}