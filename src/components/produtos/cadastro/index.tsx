import { Layout } from 'components'
import { FormProdutos } from './form-produtos'

export const CadastroProdutos: React.FC = () => {
    return (
        <Layout titulo='Cadastro de Produtos'>

            <FormProdutos />

        </Layout>
    )
}