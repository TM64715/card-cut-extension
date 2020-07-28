chrome.runtime.onMessage.addListener(notify);
console.log('Popup.JS running')
const cardTextArea = document.querySelector('.cardTextArea');
const btn = document.querySelector('.cardControl');
function notify(message) {
  var card = message["cardVar"];
  console.log(card);
  btn.onclick = function() {
      cardTextArea.value = card;
      btn.textContent = "Copy To Clipboard";
  }

}