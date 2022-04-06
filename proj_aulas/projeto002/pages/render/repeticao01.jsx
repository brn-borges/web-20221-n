export default function init(){
    const lista=[
        'Cebolinha',
        'Cascao',
        'Monica',
        "Magali"
    ]

    // //Forma 01
    // function renderizarLista(){
    //     const itens=[]
    //     for(let i=0; i < lista.length; i++){
    //         itens.push(<li key={i}>{lista[i]}</li>)
    //     }
    //     return itens
    // }


    // Forma 02
    function renderizarLista(){
        return lista.map((nome, i) => <li key={i}>{nome}</li>)
    }
    return(
        <>
            <ul>
                {renderizarLista()}
            </ul>
        </>
    )
}