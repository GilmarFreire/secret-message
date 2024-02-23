var inputText = document.querySelector("#text-area-input");
var outInput_text = document.querySelector("#exit_messages2");

function teste(){

    
   // outInput_text.value = inputText.value
    // inputText.value=""

    var texto = inputText.value;
    inputText.value=""

    document.getElementById('exit_messages2').innerHTML = '<textarea readonly id="text-area-input">' + texto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'


  
  }
