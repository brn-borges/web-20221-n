function megasena(qtd=6, numero=[]){

    if(qtd < 6 || qtd > 15 ){
        throw "Quantidade Invalida"
    }

    if(numero.length == qtd){
        return numero.sort((a, b) => a - b)
    }

    const aleatorio = parseInt(Math.random()*60) + 1

    if(!numero.includes(aleatorio)){
        // quando aleatorio nao estiver em numeros
        // adicionar o aleatorio na lista
        novaLista = [...numero, aleatorio]

        return megasena(qtd, novaLista)
    }

    return megasena(qtd, numero)
}

console.log(megasena(qtd=6))