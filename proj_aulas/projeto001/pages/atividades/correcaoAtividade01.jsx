function lista(){
   const tmp = [
    <span>1,</span>,
    <span>2,</span>,
    <span>3,</span>,
    <span>4,</span>,
    <span>5</span>
   ]

    return tmp
}

export default function init(){
    return (
        <div>
            {lista()}
        </div>
    )
}