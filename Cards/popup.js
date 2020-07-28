chrome.runtime.onMessage.addListener(notify);
console.log('Popup.JS running')
const cardTextArea = document.querySelector('.cardTextArea');
const btn = document.querySelector('.cardControl');
function notify(message) {
  var card = message["cardVar"];
  console.log('Defined Card');
  console.log(card);
  
      cardTextArea.value = card;
      btn.textContent = "Copy To Clipboard";
  

}