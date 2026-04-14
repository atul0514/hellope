import api from "./axios";

/**
 * CREATE CUSTOMER
 */

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


/**
 * GET ALL CUSTOMERS
 */

export const getAllCustomers = async () => {

  const response = await api.get(

    "/Auth/Get-All-Users"

  );

  return response.data;

};