export default function Span(props){
    //props.numero++
    return (
        <div>
            <div>
                {lista(props.numero)}
            </div>
            <div>
                {lista(props.numero)}
            </div>
        </div>
    )


       
    
}
function lista(n){
    const tmp = []
    for(let i=0; i<=n; i++){
        tmp.push(<span>{i},</span>)
    }
    return tmp
}

