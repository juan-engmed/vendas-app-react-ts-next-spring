import { httpClientTago } from "app/http-tago";
import { Calc } from "app/models/calc";
import { Axios, AxiosResponse } from "axios";

const resourceURL: string = "/data";
const config = {
  headers: {
    Authorization: "b69564f9-f96b-4a95-a52b-3f5b909bcfac",
    "Content-Type": "application/json",
  },
};
export const useCalcService = () => {
  const salvar = async (calc: Calc): Promise<Calc> => {
    const response: AxiosResponse<Calc> = await httpClientTago.post<Calc>(
      resourceURL,
      calc,
      config
    );
    return response.data;
  };

  return {
    salvar,
  };
};
