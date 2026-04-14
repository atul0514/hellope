import { useMutation } from "@tanstack/react-query";
import { raiseAddFundRequest } from "../api/payment.api";

export const useRaiseFundRequest = () => {

  return useMutation({

    mutationFn: raiseAddFundRequest,

  });

};