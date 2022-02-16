import { Button } from "components/commom/button"
import { Input } from "components/commom/input"
import { useState } from "react"

import { useProdutoService } from "app/services"

import { Produto } from 'app/models/produtos'


export const FormProdutos: React.FC = () => {

    const service = useProdutoService()

    const [sku, setSku] = useState<string>('')
    const [preco, setPreco] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')

    const save = () => {
        const produto = {
            sku, preco: parseFloat(preco), nome, descricao
        }
        service.salvar(produto)
            .then(response => console.log(response))
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
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
                <div className='field column is-full'>
                    <label className='label' htmlFor="inputDescription">Descrição: *</label>
                    <div className="control">
                        <textarea className='textarea'
                            id='inputDescription'
                            placeholder='Digite a Descrição Detalhada do Produto'
                            value={descricao}
                            onChange={event => setDescricao(event.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <Button typeButton={"is-link"} title={"Salvar"} btnFunction={save} />
            </div>
        </div>
    )
}