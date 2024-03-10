var inputText = document.querySelector("#text-area-input");
var outInput_text = document.querySelector("#exit_messages2");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

function teste(){

    var texto = inputText.value;
    inputText.value=""

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")


    exit_messages2.value = resultCripto

    document.getElementById('exit_messages2').innerHTML = '<textarea readonly class="exit_messages3">' + resultCripto + 
  '</textarea>' + '<button class="action-button-btn"  id="copiar" onclick="copiar()">Copiar</button>' 
  
  }
