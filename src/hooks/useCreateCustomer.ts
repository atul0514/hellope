import { useMutation } from "@tanstack/react-query";
import { createCustomer } from "../api/customer.api";

export const useCreateCustomer = () => {

  return useMutation({

    mutationFn: createCustomer,

  });

};