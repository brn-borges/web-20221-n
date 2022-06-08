import {useState} from 'react';
export default function inicio(){
    const [quantidade, setQuantidade] = useState(0)

    const inserir = () => {
        setQuantidade(anterior => anterior + 1)
    }

    const remover = () => {
        if (quantidade> 0){
            setQuantidade(anterior => anterior - 1)  
        }
    }

    const complemento = (
        <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1> Contador </h1>
            <label style={{width:"120px", height:"120px", borderRadius:"50%", fontWeight:"bolder", fontSize:"50px", color:"white", backgroundColor:"black", display:"flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}}>{quantidade}</label>
            <br />
            <input type="button" id="btnAdd" value="Inserir" onClick={inserir} />
            <input type="button" id="btnRem" value="Remover" onClick={remover} />
        </div>
    )
    return complemento
}