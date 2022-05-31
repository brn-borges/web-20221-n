import { iconeAjustes, iconeCasa } from "./icons/index";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return (
        <aside>
            <ul>
                <MenuItem url="/" texto="Inicio" icone={iconeCasa}></MenuItem>
            </ul>
            <ul>
                <MenuItem url="ajustes" texto="Ajustes" icone={iconeAjustes}></MenuItem>
            </ul>
        </aside>
    )
}