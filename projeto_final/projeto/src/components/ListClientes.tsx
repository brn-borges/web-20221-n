interface ListClientesProps {
    valor: any
}

export default function ListClientes(props: ListClientesProps) {
    return (
        
                <td className={`px-1 py-1 bg-gray-200 mt-2 border
                border-gray-400
                focus:bg-white outline-none`}>{props.valor}</td>

    
    )
}    
    
