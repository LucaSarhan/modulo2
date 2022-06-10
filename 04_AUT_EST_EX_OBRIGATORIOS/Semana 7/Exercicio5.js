function dividir() {
    var qt_alunos = parseInt(document.getElementById("quant_alunos").value)
    //var i=0
    var texto = ""
    for(i=0; i<qt_alunos; i++)
    {
        texto += '<input id="nome" class="aluno" placeholder="sobrenome">' +
        '<input id="p1" class="notaProva">' + '<input id="p2" class="notaTrabalho"><BR>' 
    }
    //document.getElementById("trocar").innerHTML=texto;
    $("#trocar").html(texto);
}

function notaTrabalho() {
    var qt_alunos = parseInt(document.getElementById("quant_alunos").value)
    var notaTrabalho = document.querySelectorAll(".notaTrabalho");
    console.log(notaTrabalho);
    var soma = 0
    var notaTrabalhoMM = []
    notaTrabalho.forEach(item => {
        soma+=parseFloat(item.value);
        console.log(item.value);
        notaTrabalhoMM+=parseFloat(item.value);
    })
    var media = soma/qt_alunos
    console.log("Média:",media);
    //console.log(notaTrabalhoMM);
    console.log("Nota minima =", + Math.min(...notaTrabalhoMM));
    console.log("Nota maxima =", + Math.max(...notaTrabalhoMM)); 
}

function notaProva() {
    var qt_alunos = parseInt(document.getElementById("quant_alunos").value)
    var notaProva = document.querySelectorAll(".notaProva");
    console.log(notaProva);
    var soma=0
    var notaProvaMM = []
    notaProva.forEach(item => {
        soma+=parseFloat(item.value);
        console.log(item.value);
        notaProvaMM+=parseFloat(item.value);
    })
    var media = soma/qt_alunos
    console.log("Média:",media);
    //console.log(notaProvaMM);
    console.log("Nota minima =", + Math.min(...notaProvaMM));
    console.log("Nota maxima =", + Math.max(...notaProvaMM)); 
}

function mediaGeral() {
    var notaTrabalho = document.querySelectorAll(".notaTrabalho");
    var notaProva = document.querySelectorAll(".notaProva");
    //console.log(notaTrabalho);
    //console.log(notaProva);
    //var notaProvaMM = []
    //var notaTrabalhoMM = []
    var somaProva = 0
    var somaTrabalho = 0
    notaProva.forEach(item => {
        somaProva+=parseFloat(item.value);
        //notaProvaMM+=parseFloat(item.value);
        //console.log(item.value);
    })
    notaTrabalho.forEach(item => {
        somaTrabalho+=parseFloat(item.value);
        //notaTrabalhoMM+=parseFloat(item.value);
        //console.log(item.value);
    })
    //console.log(somaProva);
    //console.log(somaTrabalho);
    var notaGeral = ((somaProva * 2) + (somaTrabalho * 3)) / 5;
    console.log("Média geral da turma: " + notaGeral);
}

function notaIndividual() {
    var array = [];
    var arrayT = [];
    var arrayP = [];
    var input = document.getElementById("selecionar").value
    var aluno = document.querySelectorAll(".aluno")
    var notaTrabalho = document.querySelectorAll(".notaTrabalho");
    var notaProva = document.querySelectorAll(".notaProva");
    var position = 0
    array.push(input);
    console.log(aluno);
    console.log(notaTrabalho);
    console.log(notaProva);

    for(let i = 0; i<aluno.length; i++) {
        arrayT.push(aluno[i]);
    }
    console.log(arrayT[0]);

    for(let i = 0; i<aluno.length; i++) {
        if ('a'== 'a') {
            position = 2
            //console.log("pussy");
            console.log(position);
        }
    }
    //console.log(position);
    /*console.log(aluno);
    var nome = []
    aluno.forEach(item=>{
        nome+=item.value;
        console.log(item.value);
    })
    console.log(nome);
    var words = nome.split('');
    console.log(input);
    console.log(words);
    console.log(words.indexOf(input));
    var position = words.indexOf(input)
    var notaT = []
    notaTrabalho.forEach(item=>{
        notaT+=item.value
        console.log(item.value)
    })
    var notaP = []
    notaProva.forEach(item=>{
        notaP+=item.value
        console.log(item.value)
    })
    console.log(notaT);
    console.log(notaP);
    var notaTT = notaT.split('')
    var notaPP = notaP.split('')
    console.log(notaTT);
    console.log(notaPP);
    console.log(position);
    var posNotaTT = notaTT.indexOf(position)
    var posNotaPP = notaPP.indexOf(position)
    console.log(posNotaTT);
    console.log(posNotaPP);*/
    //console.log(notaTrabalho);
    //console.log(notaProva);
    var notaIndividual = ((notaProva[2] * 2) + (notaTrabalho[2] * 3)) / 5
    console.log(notaIndividual);
}