import Link from "next/link";
import { MenuItem } from "components/layout/menu/menu-item";
import Image from "next/image";
import img from "../../../../public/logofinal.png";
import imgUFJF from "../../../../public/ufjf.png";

export const Menu: React.FC = () => {
  return (
    <>
      <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile has-background-dark ">
        <p className="menu-label is-hidden-touch has-text-info-dark ">
          <Image src={img} alt="My Image" width={60} height={60} />
          IoT Health
        </p>
        <ul className="menu-list ">
          <MenuItem href="/" label="Home" />
          {/* <MenuItem href="/cadastros/produtos" label="Cadastro Produtos" /> */}
          <MenuItem href="/cadastros/patients" label="Cadastro de Paciente" />
          <MenuItem href="/monitoramento/patient" label="Monitoramento" />
          <MenuItem href="/intratecalc/calc" label="Intratecalc" />
        </ul>
        <div className="columns is-centered mt-6">
          <p className="menu-label is-hidden-touch has-text-info-dark ">
            <Image src={imgUFJF} alt="My Image" width={110} height={70} />
          </p>
        </div>
        <div className="columns is-centered mt-1">
          <p className="menu-label is-hidden-touch has-text-info-dark ">
            <Link href="/">
              <a>
                <p>Sair</p>
              </a>
            </Link>
          </p>
        </div>
      </aside>
    </>
  );
};
