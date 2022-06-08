import { iconeAjustes, iconeCadastroCliente, iconeCasa, iconeSair, iconeTabuleiro} from "./icons/index";
import MenuItem from "./MenuItem";
import Logo from "./Logo";

export default function MenuLateral(){
    return (
        <aside>
            <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-300 h-20 w-20`}>
                <Logo />
            </div>
            <ul>
                <MenuItem url="/" texto="Inicio" icone={iconeCasa}></MenuItem>
            </ul>
            <ul>
                <MenuItem url="cadastroCliente" texto="Cad. Cliente" icone={iconeCadastroCliente}></MenuItem>
            </ul>
            <ul>
                <MenuItem url="tabuleiro" texto="Tabuleiro" icone={iconeTabuleiro}></MenuItem>
            </ul>
            <ul>
                <MenuItem url="ajustes" texto="Ajustes" icone={iconeAjustes}></MenuItem>
            </ul>
            <ul>
                <MenuItem url="autenticacao" texto="Sair" icone={iconeSair}></MenuItem>
            </ul>
        </aside>
    )
}