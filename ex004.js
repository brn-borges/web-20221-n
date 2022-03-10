function somar(){
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')

    var res = document.getElementById("resultado")

    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var soma = n1 + n2

    res.innerHTML =  `Soma ${n1} + ${n2} = ${soma}`
}

function limpar(){
    document.getElementById('txtn1').value = ""
    document.getElementById('txtn2').value = ""
    document.getElementById("resultado").innerHTML = " "
    document.getElementById("txtn1").focus

}