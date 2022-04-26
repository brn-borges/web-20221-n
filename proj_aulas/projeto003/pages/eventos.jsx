function acao1(){
    console.log("Ação 1")
}

export default function init(){
    function acao2(){
        console.log("Ação 2")
    }

    return (
        <div>
            <button onClick={acao1}>Clique 1</button>
            <button onClick={acao2}>Clique 2</button>
            <button onClick={function (){
                console.log("Ação 3")
            }}>Clique 3</button>
            <button onClick={()=> console.log("Ação 4")}>Clique 4</button>            
        </div>
    )
}