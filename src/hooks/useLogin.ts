import { useMutation } from "@tanstack/react-query";
import { adminLogin } from "../api/auth.api";
import { useAuthContext } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

/**
 * JWT payload structure (flexible)
 */
interface JwtPayload {

  UserId?: string | number;
  userid?: string | number;
  sub?: string | number;
  nameid?: string | number;

  role?: string;

  unique_name?: string;
  name?: string;
  username?: string;
  fullname?: string;

}

export const useLogin = () => {

  const { login } = useAuthContext();

  return useMutation({

    mutationFn: adminLogin,

    onSuccess: (data) => {

      /**
       * Save token
       */
      login(data.token);

      try {

        const decoded =
          jwtDecode<JwtPayload>(
            data.token
          );

        console.log("Decoded JWT:", decoded);
        console.log("Login API response:", data);


        /**
         * Extract USER ID
         */
        const userId =
          decoded.UserId ||
          decoded.userid ||
          decoded.nameid ||
          data.UserId ||
          null;

        if (userId) {

          localStorage.setItem(
            "userId",
            String(userId)
          );

        }
        else {

          console.warn("UserId not found");

        }


        /**
         * Extract USER NAME
         */
        const userName =
          decoded.unique_name ||
          decoded.name ||
          decoded.username ||
          decoded.fullname ||
          data.Name ||
          data.FullName ||
          data.UserName ||
          data.username ||
          null;


        if (userName) {

          localStorage.setItem(
            "userName",
            String(userName)
          );

          console.log(
            "UserName stored:",
            userName
          );

        }
        else {

          console.warn(
            "Username NOT returned from backend"
          );

        }


        /**
         * Extract ROLE
         */
        if (decoded.role) {

          localStorage.setItem(
            "role",
            decoded.role
          );

        }


      }
      catch (error) {

        console.error(
          "JWT decode failed:",
          error
        );

      }

    },

  });

};