import listaProduto from "../../data/listaProduto"
import produto from "../../model/produto"

export default function repeticao02(){

    function renderizarLinhas(){
        return listaProduto.map(produto=>{
            return(
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {renderizarLinhas()}
            </tbody>
        </table>
    </div>
    )
}