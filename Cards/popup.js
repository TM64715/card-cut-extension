chrome.runtime.onMessage.addListener(notify);
console.log('Popup.JS running')
const cardTextArea = document.querySelector('.cardTextArea');
const btn = document.querySelector('.cardControl');
const storage = document.querySelector('.storage');
function notify(message) {
  var card = message["cardVar"];
  console.log('Defined Card');
  console.log(card);
  storage.textContent = card;
 

}
const card = storage.textContent;
if (btn.textContent == "Generate Card") {
  btn.onclick = function () {
    cardTextArea.value = card;
    console.log("Logged Card to Text Box");
    btn.textContent = "Copy To Clipboard";
    storage.style.visibility = "visible";
  }
}
else if (btn.textContent == "Copy To Clipboard") {
    btn.onclick = function() {
    var copyText = cardTextArea;
    copyText.select();
    // copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    para.style.visibility = "visible";
  }  
}