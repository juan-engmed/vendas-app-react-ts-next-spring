import { Button } from "components/commom/button";
import { Input } from "components/commom/input";
import { useState } from "react";

import { useProdutoService } from "app/services";

import { Produto } from "app/models/produtos";
import Link from "next/link";

export const FormProdutos: React.FC = () => {
  const service = useProdutoService();

  const [sku, setSku] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [cadastro, setCadastro] = useState<string>("");

  const save = () => {
    const produto: Produto = {
      id,
      sku,
      preco: parseFloat(preco),
      nome,
      descricao,
    };

    if (id) {
      service.atualizar(produto).then((response) => console.log("atualizado"));
    } else {
      service
        .salvar(produto)
        .then((response) => {
          setId(response.id || "");
          setCadastro(response.cadastro || "");
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
            value={cadastro}
            id="inputDataCadastro"
            disabled
          />
        </div>
      )}

      <div className="columns">
        <Input
          columnClasses="is-half"
          label={"SKU"}
          placeholder="Digite o SKU do Produto"
          value={sku}
          onChange={setSku}
        />
        <Input
          columnClasses="is-half"
          label={"Price"}
          placeholder="Digite o Preço do Produto"
          value={preco}
          onChange={setPreco}
        />
      </div>

      <div className="columns">
        <Input
          columnClasses="is-half"
          label={"Nome"}
          placeholder="Digite o Nome do Produto"
          value={nome}
          onChange={setNome}
        />
      </div>

      <div className="columns">
        <div className="field column is-full">
          <label className="label" htmlFor="inputDescription">
            Descrição: *
          </label>
          <div className="control">
            <textarea
              className="textarea"
              id="inputDescription"
              placeholder="Digite a Descrição Detalhada do Produto"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
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

        <div className="control">
          <Link href="/">
            <button className="button">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
