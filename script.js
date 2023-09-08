function calcular() {
    var pt = document.getElementById('npt')
    var st = document.getElementById('nst')
    var p = document.getElementById('np')
    if (pt.value > 10 || pt.value < 0 ) {
        resultA.innerHTML ='Erro! Os dados estão incorretos, insira novamente'
    } else if (st.value > 10 || st.value < 0) {
        resultA.innerHTML ='Erro! Os dados estão incorretos, insira novamente'
    } else if (p.value > 10 ||  p.value < 0) {
        resultA.innerHTML ='Erro! Os dados estão incorretos, insira novamente'
    }
     else {
        var ppt = Number(pt.value)
        var sst = Number(st.value)
        var pp = Number(p.value)
        res = (ppt + sst + pp)/3
        resultA.innerHTML = `Sua nota é: ${res}`
    }
}

 function verificar() {
    var tum = document.getElementById('ntum')
    var tdois = document.getElementById('ntdois')
    var ttres = document.getElementById('nttres')
    if (tum.value < 0 || tum.value > 10) {
        resultB.innerHTML ='Erro! Os dados estão incorretos, insira novamente'
    } else if (tdois.value < 0 || tdois.value > 10) {
        resultB.innerHTML ='Erro! Os dados estão incorretos, insira novamente'
    } else if (ttres.value < 0 || ttres.value > 10) {
        resultB.innerHTML ='Erro! Os dados estão incorretos, insira novamente'
    } else {
        var tu = Number(tum.value)
        var td = Number(tdois.value)
        var tt = Number(ttres.value)
        var res = (tu + td + tt)/3
        if (res <= 5 ) {
            x = 'REPROVADO'
        } else {
            x = 'APROVADO'
        }
    switch (x) {
        case 'APROVADO':
            resultB.innerHTML = `Sua nota é ${res}, você foi aprovado!`
        break
        case 'REPROVADO':
            resultB.innerHTML = `Sua nota é ${res}, infelizmente você foi reprovado.`
        break
        default:
            resultB.innerHTML = "?"
    }
    }
 }