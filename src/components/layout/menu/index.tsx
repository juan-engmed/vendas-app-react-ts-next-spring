import Link from 'next/link'
import { MenuItem } from 'components/layout/menu/menu-item'

export const Menu: React.FC = () => {
    return (
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list">
                <MenuItem href="/" label="Home" />
                <MenuItem href="/cadastros/produtos" label="Cadastro" />
                <MenuItem href="/consultas/produtos" label="Produtos" />
                <MenuItem href="/consultas/clientes" label="Clientes" />
                <MenuItem href="/vendas/nova-venda" label="Venda" />
                <MenuItem href="/vendas/relatorio-vendas" label="Relatório" />
            </ul>
        </aside>
    )
}
