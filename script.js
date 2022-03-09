function calcular() {
    const pNota = window.document.getElementById('nota01')
    const sNota = window.document.getElementById('nota02')
    const tNota = window.document.getElementById('nota03')
    const qNota = window.document.getElementById('nota04')
    const res = document.querySelector('div#res')

    const primNota = Number(pNota.value)
    const segNota = Number(sNota.value)
    const tercNota = Number(tNota.value)
    const quarNota = Number(qNota.value)

    const resultado = (primNota + segNota + tercNota + quarNota) / 4
    if (resultado >= 7) {
        res.innerHTML = `<p>Sua média é de ${resultado.toFixed(1)}. Parabéns, você foi aprovado!</p>`
    } else {
        res.innerHTML = `<p>Sua média foi de ${resultado.toFixed(1)}. Dedique mais horas saudáveis de estudos para você. Desistir não é uma opção.</p>`
    }

}