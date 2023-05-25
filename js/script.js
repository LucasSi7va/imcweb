//alert('Ola JS!');

function calcularimc() {  
    //console.log('funçao carregada!')

    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var result = document.getElementById('result');
    console.log(altura);
    console.log(peso);


    if (altura != '' && peso != '') {
        // console.log('ok');
        result.style.visibility = 'visible';

        var imc = peso / (altura * altura);
        // console.log(imc);

        result.innerHTML = '<h3>Seu IMC é:' + imc.toFixed(2) + '</h3>';


        if (imc < 17 || imc >= 30) {
            result.style.background = '#bf1c0a'
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            result.style.background = '#005F09'
        }
        else {
            result.style.background = '#bf5a11'
        }

    }
    else {
        alert('preencha todos os campos');
    }
}

//selecionando o imput
var inputpeso = document.getElementById('peso');

//associando o evento de 'soltar uma tecla' ao input
inputpeso.addEventListener('keyup', function(e){
    //console.log(e.key);
    //e -> resposta do browser ao evento

    if (e.key == 'Enter'){
        calcularimc();
    }

})