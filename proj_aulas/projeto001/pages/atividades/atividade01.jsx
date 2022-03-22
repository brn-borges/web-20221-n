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

    const criarSpan = (quantidade) => {
        const ar = []
        for(let i = 1; i <= quantidade; i++){
            ar.push(<br />)  
            ar.push(<span key={i}>{i}</span>)
        }
        return ar;
    }
    const complemento = (
        <div id="container">
            <label htmlFor="qtdSpan">Quantidade: {quantidade}</label>
            <br />
            <input type="button" id="btnAdd" value="Inserir" onClick={inserir} />
            <input type="button" id="btnRem" value="Remover" onClick={remover} />
            <br />
                {criarSpan(quantidade)}
            </div>
    )
    return complemento
}