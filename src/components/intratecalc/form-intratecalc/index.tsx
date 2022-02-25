import { Button } from "components/commom/button";
import { Input } from "components/commom/input";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCalcService } from "app/services";

import { Calc } from "app/models/calc";
import Link from "next/link";
import { parse } from "node:path/win32";

export const CalcIntratecalc: React.FC = () => {
  const service = useCalcService();

  // Variáveis da Bomba de Infusão
  const [bombVol, setBombVol] = useState<number>(0);
  const [bombFlux, setBombFlux] = useState<number>(0);
  const [daysLoadBomb, setDaysLoadBomb] = useState<number>(0);

  //Variáveis nomes das medicações
  const [variable1, setVariable1] = useState<string>("morfina");
  const [variable2, setVariable2] = useState<string>("bupivacaina");
  const [variable3, setVariable3] = useState<string>("cloridina");

  //Variáveis Dosagens
  const [valueDosagem1, setValueDosagem1] = useState<string>("");
  const [valueDosagem2, setValueDosagem2] = useState<string>("");
  const [valueDosagem3, setValueDosagem3] = useState<string>("");

  //Variáveis Dosagens Diárias
  const [valueDosagemDiaria1, setValueDosagemDiaria1] = useState<string>("");
  const [valueDosagemDiaria2, setValueDosagemDiaria2] = useState<string>("");
  const [valueDosagemDiaria3, setValueDosagemDiaria3] = useState<string>("");

  //  Variáveis resultados
  const [result1, setResult1] = useState<number>();
  const [result2, setResult2] = useState<number>();
  const [result3, setResult3] = useState<number>();
  const [resultSoro, setResultSoro] = useState<number>();

  //Variáveis de Toast e Loading
  const [success, setSuccess] = useState(false);

  const dateAtual = new Date();
  dateAtual.setDate(dateAtual.getDate());
  const dateFormattedActual = dateAtual.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  const dataToReload = new Date();
  dataToReload.setDate(dataToReload.getDate() + daysLoadBomb);
  const dataFormattedToReload = dataToReload.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  const notify = () => toast.success("Dados Enviados com Sucesso");

  const calcular = () => {
    //Morfina
    const dosagemDiaria1: number = parseFloat(valueDosagemDiaria1);
    const dosagem1: number = parseFloat(valueDosagem1);

    const calcDose1 = NaN ? 0 : (bombVol * dosagemDiaria1) / bombFlux;
    const resultFinal1 = NaN ? 0 : calcDose1 / dosagem1;

    //Bupivacaína
    const dosagemDiaria2: number = parseFloat(valueDosagemDiaria2);
    const dosagem2: number = parseFloat(valueDosagem2);

    const calcDose2 = NaN ? 0 : (bombVol * dosagemDiaria2) / bombFlux;
    const resultFinal2 = NaN ? 0 : calcDose2 / dosagem2;

    //Cloridina
    const dosagemDiaria3: number = parseFloat(valueDosagemDiaria3);
    const dosagem3: number = parseFloat(valueDosagem2);

    const calcDose3 = NaN ? 0 : (bombVol * dosagemDiaria3) / bombFlux;
    const resultFinal3 = NaN ? 0 : calcDose3 / dosagem3;

    //Setar Resultados
    setResult1(resultFinal1);
    setResult2(resultFinal2);
    setResult3(resultFinal3);

    const calcSoro = bombVol - (resultFinal1 + resultFinal2 + resultFinal3);

    setResultSoro(calcSoro);

    const calcDays = bombVol / bombFlux;
    setDaysLoadBomb(calcDays);

    setSuccess(true);
  };

  const save = () => {
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
    console.log(resultSoro);

    const calc = [
      {
        variable: variable1,
        value: result1,
        time: "2022-02-01 13:44:33",
      },
      {
        variable: variable2,
        value: result2,
        time: "2022-02-01 13:44:33",
      },
      {
        variable: variable3,
        value: result3,
        time: "2022-02-01 13:44:33",
      },
    ];
    service
      .salvar(calc)
      .then((response) => {
        console.log(response);
        setSuccess(true);
        notify();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = () => {
    setValueDosagem1("");
    setValueDosagem2("");
    setValueDosagem3("");
    setValueDosagemDiaria1("");
    setValueDosagemDiaria2("");
    setValueDosagemDiaria3("");

    setSuccess(false);
  };

  return (
    <>
      <div className="columns is-centered">
        <div className="field column is-three-fifths">
          <div className="card is-centered">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <p>Smartband</p>
                  <p>Xiaomi MI 5</p>
                </div>
                <div className="media-content has-text-centered">
                  <p className="title is-4">Juan Oliveira</p>
                  <p className="subtitle is-6">30 anos</p>
                  <p className="subtitle is-6">Rio de Janeiro - RJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Volume da Bomba e Data Atual------------------------------------------------- */}
      <div className="columns box is-centered">
        <Input
          columnClasses="is-one-fifth"
          label={"Volume da Bomba (ml)"}
          placeholder="Digite o volume"
          value={bombVol}
          onChange={setBombVol}
        />
        <Input
          columnClasses="is-one-fifth"
          label={"Fluxo diário (ml)"}
          placeholder="Digite o o fluxo"
          value={bombFlux}
          onChange={setBombFlux}
        />
        <Input
          columnClasses="is-one-fifth"
          label={"Data"}
          placeholder="Digite o volume"
          value={dateFormattedActual}
          disabled
        />
      </div>
      {/* Dosagens das Medicações------------------------------------------------- */}
      <div className="columns box is-centered mt-6">
        <div className="column">
          <Input
            columnClasses="is-three-fifths"
            label={"Dosagem Medicação 1"}
            placeholder="Dosagem Medicação 1"
            value={variable1}
            disabled
          />

          <Input
            columnClasses="is-three-fifths"
            label={"Valor"}
            placeholder="Digite o Valor 1"
            value={valueDosagem1}
            onChange={setValueDosagem1}
          />
        </div>
        <div className="column">
          <Input
            columnClasses="is-three-fifths"
            label={"Dosagem Medicação 2"}
            placeholder="Digite o Variavel 2"
            value={variable2}
            disabled
          />
          <Input
            columnClasses="is-three-fifths"
            label={"Valor"}
            placeholder="Digite Valor 2"
            value={valueDosagem2}
            onChange={setValueDosagem2}
          />
        </div>
        <div className="column">
          <Input
            columnClasses="is-three-fifths"
            label={"Dosagem Medicação 3"}
            placeholder="Digite o Variavel 3"
            value={variable3}
            disabled
          />
          <Input
            columnClasses="is-three-fifths"
            label={"Valor"}
            placeholder="Digite Valor 3"
            value={valueDosagem3}
            onChange={setValueDosagem3}
          />
        </div>
      </div>
      {/* Dosagens Diária Medicações------------------------------------------------- */}
      <div className="columns box is-centered mt-6">
        <div className="column">
          <Input
            columnClasses="is-three-fifths"
            label={"Dosagem Diária 1"}
            placeholder="Dosagem Medicação 1"
            value={variable1}
            disabled
          />

          <Input
            columnClasses="is-three-fifths"
            label={"Valor"}
            placeholder="Digite o Valor 1"
            value={valueDosagemDiaria1}
            onChange={setValueDosagemDiaria1}
          />
        </div>
        <div className="column">
          <Input
            columnClasses="is-three-fifths"
            label={"Dosagem Diária 2"}
            placeholder="Digite o Variavel 2"
            value={variable2}
            disabled
          />
          <Input
            columnClasses="is-three-fifths"
            label={"Valor"}
            placeholder="Digite Valor 2"
            value={valueDosagemDiaria2}
            onChange={setValueDosagemDiaria2}
          />
        </div>
        <div className="column">
          <Input
            columnClasses="is-three-fifths"
            label={"Dosagem Diária 3"}
            placeholder="Digite o Variavel 3"
            value={variable3}
            disabled
          />
          <Input
            columnClasses="is-three-fifths"
            label={"Valor"}
            placeholder="Digite Valor 3"
            value={valueDosagemDiaria3}
            onChange={setValueDosagemDiaria3}
          />
        </div>
      </div>
      {/* Buttons------------------------------------------------- */}
      <div className="mt-5">
        <div className="columns is-centered">
          <div className="field is-grouped">
            <div className="control is-link">
              <Button
                typeButton={"is-link"}
                title={"Calcular"}
                btnFunction={calcular}
              />
            </div>

            <div className="control is-link ml-2">
              <Button
                typeButton={"is-warning"}
                title={"Resetar"}
                btnFunction={reset}
              />
            </div>

            <div className="control is-link ml-6">
              <Button
                typeButton={"is-success"}
                title={"Salvar Resultados"}
                btnFunction={save}
              />
            </div>
          </div>
        </div>
      </div>
      {/* {
            <div className="control">
              <Link href="/">
                <button className="button">Voltar</button>
              </Link>
            </div>
          } */}
      {success && (
        <div className="columns is-centered mt-6 box ">
          <div className="box">
            <div className="columns is-centered">
              <Input
                columnClasses="is-one-fifth"
                label={"Resultado Final 1 - Morfina (ml)"}
                placeholder="Digite o Variavel 3"
                value={result1}
                disabled
              />
              <Input
                columnClasses="is-one-fifth"
                label={"Resultado Final 2 - Cloridina (ml)"}
                placeholder="Digite o Variavel 3"
                value={result2}
                disabled
              />
              <Input
                columnClasses="is-one-fifth"
                label={"Resultado 3 - Bupivacaína (ml)"}
                placeholder="Digite o Variavel 3"
                value={result3}
                disabled
              />
              <Input
                columnClasses="is-one-fifth "
                label={"Completar com Soro Fisiológico(ml)"}
                placeholder="Digite o Variavel 3"
                value={resultSoro}
                disabled
              />
            </div>

            <div className="columns is-centered">
              <h5>Data de retorno {dataFormattedToReload}</h5>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};
