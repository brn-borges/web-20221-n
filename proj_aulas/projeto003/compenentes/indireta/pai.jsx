import Filho from "./filho"

export default function Pai(){
    function conversaPai(param){
        console.log("MSG para o Pai")
        console.log(param)
    }
    return(
        <div>
            <Filho funcao={conversaPai}></Filho>
        </div>
    )
}