import { useState } from "react";
import { soteador } from "../funcoes/Soteador";
import Amostragem from "../componentes/Amostragem"
export default function init() {
    const [num, setNum] = useState(6)
    const [numeros, setNumeros] = useState('')

    function sortear() {
        const tmp = []
        const numeros = soteador(num)
        for (let i = 0; i <= numeros.length - 1; i++) {
            tmp.push(<Amostragem key={i} numero={numeros[i]} />)
        }
        setNumeros(tmp)
    }
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",        justifyContent: "center", verticalAlign: "center", height: "100vh"}}>
            <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                <h1>Mega Sena</h1>
            </div>
            <div style={{margin: "10px", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
                {numeros}
            </div>
            <div style={{borderRadius: "20px", width: "80%", height: "85px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <input  style={{fontSize: "20px", textAlign: "center", margin: "15px", height: "40px", width: "60px"}} type="number" min={6} max={15} value={num} onChange={e => setNum(e.target.value)} />
                <button style={{ fontSize: "20px", textAlign: "center", margin: "15px",     height: "40px", width: "80px"}} onClick={sortear}>Sortear</button>
            </div>
        </div>
    )
}