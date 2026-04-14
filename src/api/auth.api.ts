import api from "./axios";   // ✅ THIS LINE WAS MISSING

export interface LoginRequest {
  userName: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  expires: string;
  role: string;
}

export const adminLogin = async (
  data: LoginRequest
): Promise<LoginResponse> => {

  const response = await api.post(
    "/Auth/Login-ApplicationUser",
    data
  );

  return response.data;
};