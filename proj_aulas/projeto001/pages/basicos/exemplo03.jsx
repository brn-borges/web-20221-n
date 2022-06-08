export default function inicio(){
    const subtitulo =  "Estou no subtitulo"
    const resposta = maiorIdade(16)
    const conteudo = (
        <div>
            <h1>Olá mundo JSX!</h1>
            <h2>{subtitulo}</h2>
            <h2>3+3</h2>
            <h2>{3+3}</h2>

            <h2>{maiorIdade(20)}</h2>
            <h2>Resposta: {resposta}</h2>
        </div>
    )
    return conteudo
}

function maiorIdade(idade){
    if(idade >= 18){
        return "Você é maior de idade!"
    }else {
        return "Você é menor de idade!"
    }
}