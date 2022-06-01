import { iconeAjustes, iconeCasa } from "./icons/index";
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
                <MenuItem url="ajustes" texto="Ajustes" icone={iconeAjustes}></MenuItem>
            </ul>
        </aside>
    )
}