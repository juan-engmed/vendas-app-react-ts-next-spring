import { Button } from "components/commom/button";
import { Input } from "components/commom/input";
import { useState } from "react";

import { usePatientService } from "app/services";

import { Patient } from "app/models/patients";
import Link from "next/link";

export const FormPatients: React.FC = () => {
  const service = usePatientService();

  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [address, setAdress] = useState<string>("");
  const [bombDesc, setBombDesc] = useState<string>("");
  const [bombVol, setBombVol] = useState<string>("");
  const [smartDesc, setSmartDesc] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cid, setCid] = useState<string>("");
  const [registerDate, setRegisterDate] = useState<string>("");

  const save = () => {
    const patient: Patient = {
      id,
      name,
      age: parseInt(age),
      address,
      bombDesc,
      bombVol: parseInt(bombVol),
      smartDesc,
      description,
      cid,
    };

    if (id) {
      service.atualizar(patient).then((response) => console.log("atualizado"));
    } else {
      service
        .salvar(patient)
        .then((response) => {
          setId(response.id || "");
          setRegisterDate(response.registerDate || "");
          console.log(description);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      {id && (
        <div className="columns">
          <Input
            label="Código:"
            columnClasses="is-half"
            value={id}
            id="inputId"
            disabled={true}
          />

          <Input
            label="Data Cadastro:"
            columnClasses="is-half"
            value={registerDate}
            id="inputDataCadastro"
            disabled
          />
        </div>
      )}

      <div className="columns">
        <Input
          columnClasses="is-half"
          label={"Nome"}
          placeholder="Digite o Nome do Paciente"
          value={name}
          onChange={setName}
        />
        <Input
          columnClasses="is-one-fifth"
          label={"Idade"}
          placeholder="Digite a idade do paciente"
          value={age}
          onChange={setAge}
        />
      </div>

      <div className="columns">
        <Input
          columnClasses="is-half"
          label={"Endereço"}
          placeholder="Digite o Endereço do paciente"
          value={address}
          onChange={setAdress}
        />
      </div>

      <div className="columns">
        <Input
          columnClasses="is-half"
          label={"Modelo Bomba de Infusão"}
          placeholder="Digite o modelo da Bomba de Infusão"
          value={bombDesc}
          onChange={setBombDesc}
        />
        <Input
          columnClasses="is-one-fifth"
          label={"Volume (ml)"}
          placeholder="Digite volume da bomba"
          value={bombVol}
          onChange={setBombVol}
        />
      </div>

      <div className="columns">
        <Input
          columnClasses="is-half"
          label={"Modelo da Smartband"}
          placeholder="Digite o modelo da Smartband"
          value={smartDesc}
          onChange={setSmartDesc}
        />
      </div>

      <div className="columns">
        <Input
          columnClasses="is-one-fifth"
          label={"CID"}
          placeholder="Digite o CID da patologia"
          value={cid}
          onChange={setCid}
        />
      </div>

      <div className="columns">
        <div className="field column is-full">
          <label className="label" htmlFor="inputDescription">
            Descrição do Paciente
          </label>
          <div className="control">
            <textarea
              className="textarea"
              id="inputDescription"
              placeholder="Digite a descrição sobre o paciente"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control is-link">
          <Button
            typeButton={"is-link"}
            title={id ? "Atualizar" : "Salvar"}
            btnFunction={save}
          />
        </div>

        {
          <div className="control">
            <Link href="/">
              <button className="button">Voltar</button>
            </Link>
          </div>
        }
      </div>
    </div>
  );
};
