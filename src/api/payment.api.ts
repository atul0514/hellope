import api from "./axios";

export interface RaiseFundRequestPayload {

  ScreenshotPath: string;

  UserId: number;

  BankName: string;

  UPIId?: string;

  ModeOfPayment: string;

  BeneficiaryName: string;

  Amount: number;

  TransactionId: string;

  IFSCCode?: string;

}

export const raiseAddFundRequest = async (

  data: RaiseFundRequestPayload

) => {

  const formData = new FormData();

  formData.append(
    "ScreenshotPath",
    data.ScreenshotPath
  );

  formData.append(
    "UserId",
    String(data.UserId)
  );

  formData.append(
    "BankName",
    data.BankName
  );

  formData.append(
    "ModeOfPayment",
    data.ModeOfPayment
  );

  formData.append(
    "BeneficiaryName",
    data.BeneficiaryName
  );

  formData.append(
    "Amount",
    String(data.Amount)
  );

  formData.append(
    "TransactionId",
    data.TransactionId
  );

  if (data.ModeOfPayment === "UPI") {

    formData.append(
      "UPIId",
      data.UPIId || ""
    );

  } else {

    formData.append(
      "IFSCCode",
      data.IFSCCode || ""
    );

  }

  const response = await api.post(

    "/FundTransfer/Raise-Add-Fund-Request",

    formData

  );

  return response.data;

};