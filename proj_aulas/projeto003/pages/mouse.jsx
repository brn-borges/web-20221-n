import { useState } from "react"

export default function init(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function movimento(e){
        console.log(e.clientX, e.clientY)
        setX(e.clientX)
        setY(e.clientY)
    }

    return(
        <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} onMouseMove={movimento}>
            <span> Coordenada X: {x}</span>
            <span> Coordenada Y: {y}</span>
        </div>
    )
}