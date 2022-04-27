import Filho from "./filho"

export default function Pai(){
    function conversaPai(){
        console.log("MSG para o Pai")
    }
    return(
        <div>
            <Filho funcao={conversaPai}></Filho>
        </div>
    )
}