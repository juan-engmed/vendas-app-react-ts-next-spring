import { Layout } from 'components'

export const CadastroProdutos: React.FC = () => {
    return (
        <Layout titulo='Cadastro de Produtos'>
            <div className='field'>
                <label className='label' htmlFor="inputSku">SKU: *</label>
                <div className="control">
                    <input className='input'
                    id='inputSku'
                     placeholder='Digite o SKU do Produto'/>
                </div>
            </div>

            <div className='field'>
                <label className='label' htmlFor="inputPrice">Preço: *</label>
                <div className="control">
                    <input className='input'
                    id='inputPrice'
                     placeholder='Digite o Preço do Produto'/>
                </div>
            </div>

            <div className='field'>
                <label className='label' htmlFor="inputName">Nome: *</label>
                <div className="control">
                    <input className='input'
                    id='inputName'
                     placeholder='Digite o Nome do Produto'/>
                </div>
            </div>

            <div className='field'>
                <label className='label' htmlFor="inputDescription">Descrição: *</label>
                <div className="control">
                    <textarea className='textarea'
                    id='inputDescription'
                     placeholder='Digite a Descrição Detalhada do Produto'/>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link">Voltar</button>
                </div>
            </div>

        </Layout>
    )
}