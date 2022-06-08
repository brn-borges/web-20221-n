import Tabuleiro from "../components/Tabuleiro";
import Layout from "../components/Layout";
export default function TabuleiroPage(){
    return(
        <Layout titulo="Tabuleiro" subtitulo="Uma arte realizada pelo Autor Bruno.">
            <h3>Um Tabuleiro na sua tela!</h3>
            <Tabuleiro></Tabuleiro> 
        </Layout>
    )
}

