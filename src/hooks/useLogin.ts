import { useMutation } from "@tanstack/react-query";
import { adminLogin } from "../api/auth.api";
import { useAuthContext } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  UserId?: string | number;
  userid?: string | number;
  sub?: string | number;
  nameid?: string | number;
  role?: string;
}

export const useLogin = () => {

  const { login } = useAuthContext();

  return useMutation({

    mutationFn: adminLogin,

    onSuccess: (data) => {

      // Save token using AuthContext
      login(data.token);

      try {

        const decoded =
          jwtDecode<JwtPayload>(
            data.token
          );

        // extract userId from token
        const userId =
          decoded.UserId ||
          decoded.userid ||
          decoded.sub ||
          decoded.nameid;

        if (userId) {

          localStorage.setItem(
            "userId",
            String(userId)
          );

          console.log(
            "UserId stored:",
            userId
          );

        } else {

          console.warn(
            "UserId not found in token"
          );

        }

        // optional: store role if exists
        if (decoded.role) {

          localStorage.setItem(
            "role",
            decoded.role
          );

        }

      } catch (error) {

        console.error(
          "JWT decode failed:",
          error
        );

      }

    },

  });

};