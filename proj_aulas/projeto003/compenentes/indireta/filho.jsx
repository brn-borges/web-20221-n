export default function Filho(props){
    return(
        <div>
            <h1>Filho - Indireto</h1>
            <button onClick={props.funcao}>Chama Pai</button>
            <button onClick={()=>props.funcao("Oi Pai")}>Chama Pai</button>
        </div>
    )
}