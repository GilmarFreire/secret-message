var inputText = document.querySelector("#text-area-input");
var outInput_text = document.querySelector("#exit_messages2");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

function cript() {
    var texto = inputText.value;
    inputText.value = "";
    var resultCripto = texto.replace(/[aeiou]/g, function(match) {
        switch (match) {
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'a':
                return 'ai';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return match;
        }
    });
    exit_messages2.value = resultCripto;
    document.getElementById('exit_messages2').innerHTML = '<textarea readonly class="exit_messages3">' + resultCripto + '</textarea>' + '<button class="action-button-btn"  id="copiar" onclick="copiar()">Copiar</button>' + '<button class="action-button-btn" onclick="atualizarPagina()">Tentar Novamente</button>';
}

function descript() {

    var texto = inputText.value;
    inputText.value = "";
    var resultDescript = texto.replace(/(enter|imes|ai|ober|ufat)/g, function(match) {
        switch(match) {
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ai':
                return 'a';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return match;
        }
    });

    exit_messages2.value = resultDescript;
    document.getElementById('exit_messages2').innerHTML = '<textarea readonly class="exit_messages3">' + resultDescript + '</textarea>' + '<button class="action-button-btn"  id="copiar" onclick="copiar()">Copiar</button>' + '<button class="action-button-btn" onclick="atualizarPagina()">Tentar Novamente</button>';
}

function copiar() {
    var textoCop = document.querySelector('.exit_messages3');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  


function colar() {
    navigator.clipboard.readText().then(function(text) {
        inputText.value = text;
        alert("Texto colado.");
    });
}

function atualizarPagina() {
    location.reload();
}
