import { httpClient } from "app/http";
import { Patient } from "app/models/patients";
import { Axios, AxiosResponse } from "axios";

const resourceURL: string = "/api/patients";

export const usePatientService = () => {
  const salvar = async (patient: Patient): Promise<Patient> => {
    const response: AxiosResponse<Patient> = await httpClient.post<Patient>(
      resourceURL,
      patient
    );
    return response.data;
  };

  const atualizar = async (patient: Patient): Promise<void> => {
    const url: string = `${resourceURL}/${patient.id}`;
    await httpClient.put<Patient>(url, patient);
  };

  return {
    salvar,
    atualizar,
  };
};
