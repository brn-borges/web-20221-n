import Layout from "../components/Layout";
import ListClientes from "../components/ListClientes";

export default function Clientes(){
    return(
        <Layout titulo="Clientes" subtitulo="Lista de Clientes">
        
        <div className="py-3 flex flex-col w-full">
            <table >
                <thead >
                    <th>Código</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                </thead>
                <tbody>
                    <tr>
                    <ListClientes
                        valor="01"
                    />
                    <ListClientes
                        valor="Bruno Borges Ferreira"
                    />
                    <ListClientes
                        valor="897.685.789-00"
                    />
                    <ListClientes
                        valor="bruno.ferreira@gmail.com"
                    />
                    <ListClientes
                        valor="(16) 92565-8569"
                    />
                    <ListClientes  
                        valor="Rua da Liberdade, nº 2022"
                    />
                    </tr>
                    <tr >
                    <ListClientes
                        valor="02"
                    />
                    <ListClientes
                        valor="Murillo Torres Lopes"
                    />
                    <ListClientes
                        valor="123.456.789-00"
                    />
                    <ListClientes
                        valor="murillo@gmail.com"
                    />
                    <ListClientes
                        valor="(16) 99898-7856"
                    />
                    <ListClientes  
                        valor="Rua do Ben 10, nº 5698"
                    />
                    </tr>
                </tbody>    
            </table>
        </div>

        </Layout>
    )
}