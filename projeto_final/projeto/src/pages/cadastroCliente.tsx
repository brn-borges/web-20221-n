import Layout from "../components/Layout";
import { useState } from "react";
import CadCliente from "../components/CadCliente";
import Router from "../../node_modules/next/router";

function cadCliente(){
    alert(`Erro: Erro ao cadastrar o cliente ** 500 - Error internal sever **`)
}

export default function CadastroCliente(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')   
    const [endereco, setEndereco] = useState('')
    const [cpf, setCpf] = useState('')

    return (
        <Layout titulo="Cadastro de Cliente" subtitulo="Cadastre Novos clientes">
            <form>
                <div className="flex flex-col w-full md:w-1/2 lg:w-1/2">
                    <CadCliente 
                        label="Nome"
                        tipo="text"
                        valor={nome}
                        valorMudou={setNome}
                    />
                    <CadCliente 
                        label="CPF (Somente números)"
                        tipo="number"
                        valor={cpf}
                        valorMudou={setCpf} 
                    />
                    <CadCliente
                        label="Email"
                        tipo="email"
                        valor={email}
                        valorMudou={setEmail}
                    />
                    <CadCliente
                        label="Telefone"
                        tipo="number"
                        valor={telefone}
                        valorMudou={setTelefone}   
                    />
                    <CadCliente
                        label="Endereço"
                        tipo="text"
                        valor={endereco}
                        valorMudou={setEndereco}    
                    />
                    </div>
                    <button onClick={cadCliente} className={`w-1/2 bg-indigo-500 hover:bg-indigo-400  text-white rounded-lg px-4 py-3 mt-6`}> Cadastrar Cliente</button>
            </form>       
        </Layout>
    )
}