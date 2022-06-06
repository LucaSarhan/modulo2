function calcular() {
    var pessoas = document.getElementById("input1").value
    var periodo = document.getElementById("input2").value
    if (periodo == 'noturno') {
        if (pessoas >= 50) {
            var calculons = pessoas * 100 * .80
            alert("Com desconto: " + calculons)
        }
        var calculon = pessoas * 100
        if (pessoas < 50) {
            alert("Sem desconto: " + calculon)
        }
    }

    if (periodo == 'diurno') {
        if (pessoas >= 50) {
            var calculons = pessoas * 100 * .60
            alert("Com desconto: " + calculons)
        }
        var calculon = pessoas * 100
        if (pessoas < 50) {
            alert("Sem desconto: " + calculon)
        }
    }
}