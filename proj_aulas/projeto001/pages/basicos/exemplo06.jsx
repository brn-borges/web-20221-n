import Titulo2 from "../../components/Titulo2";

export default function init(){
    return(
        <>
            <Titulo2 
                principal="Pagina de cadastro"
                descricao="pagina para gerenciar cadastro"
            ></Titulo2>
            <Titulo2 
                principal="Outro Titulo"
                descricao="outra descrição"
                pequeno={true}
            />
        </>
    )
}