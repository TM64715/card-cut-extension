// ISSUES
// Won't capture User selection
// Won't copy text
// Btn firing before ev


chrome.runtime.onMessage.addListener(notify);
console.log('Popup.JS running')
const cardTextArea = document.getElementById('cardTextArea');
const btn = document.getElementById('cardControl');
var card;
function notify(message) {
  card = message["cardVar"];
  console.log('Message Received');
  console.log(card);

  
		// para.style.visibility = "visible"; 
  }

function genCard() {
  cardTextArea.value = card;
  btn.textContent = "Copy To Clipboard";

}

if (btn.textContent == "Generate Card") {
    btn.addEventListener("click", genCard)

  }
else if (btn.textContent == "Copy To Clipboard") {
    btn.onclick = function(){
      btn.style.color = "red"
      var copyText = cardTextArea;
		  copyText.select();
		  copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  }

  