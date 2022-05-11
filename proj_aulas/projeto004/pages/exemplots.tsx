import Pessoa from "../compenentes/Pessoa";

export default function exemploTS(){
    return (
        <div> 
            <Pessoa nome="Cebolinha"/>
            <Pessoa nome="Bruno Borges" idade={50}/>
        </div>
    )
}