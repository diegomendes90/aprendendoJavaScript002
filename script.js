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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(valorsexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //CRIANÇA
                img.setAttribute('src', '_imagem/crianca_h.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', '_imagem/jovem_h.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', '_imagem/adulto_h.png')
            } else {
                //IDOSO
                img.setAttribute('src', '_imagem/velho_h.png')
            }
        } else if (valorsexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //CRIANÇA
                img.setAttribute('src', '_imagem/crianca_f.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', '_imagem/jovem_f.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', '_imagem/adulto_f.png')
            } else {
                //IDOSO
                img.setAttribute('src', '_imagem/velho_f.png')
            }
        }
        resultadofinal.style.textAlign = 'center'
        resultadofinal.innerHTML = `<h1>Detectamos ${genero} com idade de ${idade}</h1>`
        resultadofinal.appendChild(img)
    }
}