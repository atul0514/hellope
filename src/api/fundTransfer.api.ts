import api from "./axios";

export const getAllFundTransferRequests = async () => {

  const response = await api.get(

    "/FundTransfer/Get-All-Fund-Transfer-Request"

  );

  return response.data;

};