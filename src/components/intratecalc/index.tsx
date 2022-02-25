import { Layout } from "components";
import { ToastContainer } from "react-toastify";
import { CalcIntratecalc } from "./form-intratecalc";

export const Intratecalc: React.FC = () => {
  return (
    <Layout titulo="Cálculo Intratecalc">
      <CalcIntratecalc />
    </Layout>
  );
};
