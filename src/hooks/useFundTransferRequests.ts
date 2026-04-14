import { useQuery } from "@tanstack/react-query";
import { getAllFundTransferRequests } from "../api/fundTransfer.api";

export const useFundTransferRequests = () => {

  return useQuery({

    queryKey: ["fundTransferRequests"],

    queryFn: getAllFundTransferRequests,

  });

};