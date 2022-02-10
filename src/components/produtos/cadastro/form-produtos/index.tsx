import { Button } from "components/commom/button"
import { Input } from "components/commom/input"
import { useState } from "react"

export const FormProdutos: React.FC = () => {

    const [sku, setSku] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const save = () => {
        const produto = {
            sku, price, name, description
        }
        console.table(produto)
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
                    value={price}
                    onChange={setPrice}
                />
            </div>

            <div className="columns">
                <Input
                    columnClasses="is-half"
                    label={"Nome"}
                    placeholder="Digite o Nome do Produto"
                    value={name}
                    onChange={setName}
                />
            </div>

            <div className="columns">
                <div className='field column is-full'>
                    <label className='label' htmlFor="inputDescription">Descrição: *</label>
                    <div className="control">
                        <textarea className='textarea'
                            id='inputDescription'
                            placeholder='Digite a Descrição Detalhada do Produto'
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <Button typeButton={"is-link"} title={"Salvar"} onClick={save} />
            </div>
        </div>
    )
}