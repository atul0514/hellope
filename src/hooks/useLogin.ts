import { useMutation } from "@tanstack/react-query";
import { adminLogin } from "../api/auth.api";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const { login } = useAuthContext();

  return useMutation({
    mutationFn: adminLogin,

    onSuccess: (data) => {
      login(data.token);
    },
  });
};