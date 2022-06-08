interface CadClienteProps {
    label: string
    valor: any
    tipo?: 'text' | 'email' | 'number'
    valorMudou: (novoValor: any) => void
}

export default function CadCliente(props:CadClienteProps){
    return (
        <div className="w- flex flex-col mt-4">
            <label>{props.label}</label>
            <input type={props.tipo ?? 'text'} 
                value={props.valor}
                onChange={(e) => props.valorMudou?.(e.target.value)}
                className={`px-1 py-1 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white outline-none`}
            />
        </div>
    )
}