function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if (ini.Value.length == 0 || fim.Value.length == 0 || passo.Value.length == 0) {
        window.alert('[ERRO] Falta dados')
    } else {
        alert('ok')
    }
}