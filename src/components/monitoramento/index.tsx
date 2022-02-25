import { Layout } from "components";
import { MonitoramentoRealTime } from "./form-monitoramento";

export const Monitoramento: React.FC = () => {
  return (
    <Layout titulo="Monitoramento em Tempo Real">
      <MonitoramentoRealTime />
    </Layout>
  );
};
