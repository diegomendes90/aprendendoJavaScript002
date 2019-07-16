function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var valordoano = document.getElementById('anovalor')
    var resultadofinal = document.querySelector('div#msg')
   
    if(valordoano.value <= 0 ) {
        window.alert('[ERRO] Campo não preenchido, insira a data de nascimento')
    }
    else if(valordoano.value > ano) {
        window.alert(`[ERRO] Ano de nascimento maior que ${ano}, você veio do futuro?`)
    }
    else {
        var valorsexo = document.getElementsByName('selsexo')
        var idade = ano - Number(valordoano.value)
        var genero = ''
        if(valorsexo[0].checked) {
            genero = 'Homem'
        } else if (valorsexo[1].checked) {
            genero = 'Mulher'
        }
        resultadofinal.style.textAlign = 'center'
        resultadofinal.innerHTML = `<h3>Detectamos ${genero} com idade de ${idade}</h3>`   }
}