import api from "./axios";

export interface CreateCustomerPayload {

  name: string;
  phoneNo: string;
  website: string;
  ipAddress: string;
  username: string;
  password: string;
  roleId: number;

}

export const createCustomer = async (

  data: CreateCustomerPayload

) => {

  const response = await api.post(

    "/Auth/Create-New-User",
    data

  );

  return response.data;

};