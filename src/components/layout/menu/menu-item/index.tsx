import Link from 'next/link'

interface MenuItemProps {
    href: string;
    label: string;
}

export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <li>
            <Link href={props.href} >
                <a className="has-text-primary-dark">
                    <span className="icon"></span> {props.label}
                </a>
            </Link>
        </li>
    )
}

