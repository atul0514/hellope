import api from "./axios";

export const approveFundTransfer = async (id: number) => {

  const response = await api.post(

    `/FundTransfer/Approve-Fund-Transfer-Request/${id}`

  );

  return response.data;

};


export const rejectFundTransfer = async (id: number) => {

  const response = await api.post(

    `/FundTransfer/reject/${id}`

  );

  return response.data;

};