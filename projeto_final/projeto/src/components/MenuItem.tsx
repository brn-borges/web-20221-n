import Link from "../../node_modules/next/link"

interface MenuItemProps{
    url: string
    texto: string
    icone: any
}

export default function MenuItem(props: MenuItemProps){
    return (
        <li className={`hover:bg-gray-200`}>
            <Link href={props.url}>
                <a>
                    {props.icone}
                    <span>
                        {props.texto}
                    </span>
                </a>
            </Link>
        </li>
    )
}