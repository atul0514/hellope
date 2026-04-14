import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  approveFundTransfer,
  rejectFundTransfer
} from "../api/fundTransferAction.api";


export const useApproveFundTransfer = () => {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: approveFundTransfer,

    onSuccess: () => {

      queryClient.invalidateQueries({

        queryKey: ["fundTransferRequests"]

      });

    }

  });

};


export const useRejectFundTransfer = () => {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: rejectFundTransfer,

    onSuccess: () => {

      queryClient.invalidateQueries({

        queryKey: ["fundTransferRequests"]

      });

    }

  });

};