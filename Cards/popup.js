chrome.runtime.onMessage.addListener(notify);

const cardTextArea = document.querySelector('.cardTextArea');
const btn = document.querySelector('.cardControl');
function notify(message) {
  var card = message["cardVar"];
  console.log(card);
  
      cardTextArea.value = card;
      btn.textContent = "Copy To Clipboard";
  

}