import { Layout } from "components";
import { FormPatients } from "./form-patients";

export const CadastroPatients: React.FC = () => {
  return (
    <Layout titulo="Cadastro de Paciente">
      <FormPatients />
    </Layout>
  );
};
