import Link from "next/link";
import { useRouter } from "next/router";

export default function init(){
    const router = useRouter()

    return(
        <>
            <h1>em rotas/index.jsx</h1>
            <h2>Lista</h2>
            <ul>
                <Link href="/rotas/parametros?id=123&nome=cebolinha">
                    <li>Parametros</li>
                </Link>

                <Link href="/rotas/mouse">
                    <li>Produtos</li>
                </Link>
            </ul>
            <h2>Evento</h2>
            <div>
                <button onClick={()=> router.push("/rotas/teclado")}>Teclado</button>
            </div>
        </>
    )
}