function dividir() {
    var qt_alunos = parseInt(document.getElementById("quant_alunos").value)
    //var i=0
    var texto = ""
    for(i=0; i<qt_alunos; i++)
    {
        texto += '<input id="nome" class="aluno" placeholder="nome2">' +
        '<input id="p1" class="notaProva">' + '<input id="p2" class="notaTrabalho"><BR>' 
    }
    //document.getElementById("trocar").innerHTML=texto;
    $("#trocar").html(texto);
}

function notaTrabalho() {
    var qt_alunos = parseInt(document.getElementById("quant_alunos").value);
    var notaTrabalho = document.querySelectorAll(".notaTrabalho");
    console.log(notaTrabalho);
    //console.log("Segue a lista:" + notaTrabalho[0].value);
    //console.log("Segue a lista:" + notaTrabalho[1].value);
    var soma = 0;
    var min = 0;
    var max = 0;
    //console.log("Nota minima =",min)
    //console.log("Nota maxima =",max)
    for(i=0; i<min;)
    {
        if (i<min) {
            min=i;
            console.log("Nota minima =",min)
        }
        else 
        {
            (console.log("Fuck"))
        }
    }

    notaTrabalho.forEach(item => {
        soma+=parseInt(item.value);
        console.log(item.value);
    })
    var media = soma/qt_alunos
    console.log("Média:",media);
}

function notaProva() {
    var qt_alunos = parseInt(document.getElementById("quant_alunos").value)
    var notaProva = document.querySelectorAll(".notaProva");
    console.log(notaProva);
    //console.log("Segue a lista:" + notaProva[0].value);
    //console.log("Segue a lista:" + notaProva[1].value);
    var soma=0;
    notaProva.forEach(item => {
        soma+=parseInt(item.value);
        console.log(item.value);
    })
    var media = soma/qt_alunos
    var min = notaProva
    console.log("Média:",media);
    console.log("Nota minima trabalho:", Math.min.apply(...min))
}

function notaGeral() {
    var notaTrabalho = document.querySelectorAll(".notaTrabalho").value;
    var notaProva = document.querySelectorAll(".notaProva").value;
    var notaGeral = ((notaProva * 2) + parseInt((notaTrabalho[0].value) * 3)) / 5;
    console.log(notaGeral);
}

function mediaGeral() {
    var notaTrabalho = document.querySelectorAll(".notaTrabalho").value;
    var notaProva = document.querySelectorAll(".notaProva").value;
    var notaGeral = ((notaProva * 2) + (notaTrabalho * 3)) / 5;
    console.log(notaGeral)
}