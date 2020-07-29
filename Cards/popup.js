// ISSUES
// Won't capture User selection
// Won't copy text
// Btn firing before ev (fixed)
// Only loads Card Once (Fixed)


// chrome.runtime.onMessage.addListener(notify);
console.log('Popup.JS running')
const cardTextArea = document.getElementById('cardTextArea');
const btn = document.getElementById('cardControl');
const para = document.querySelector('.successMsg');
var card;
// function notify(message) {
//   card = message["cardVar"];
//   console.log('Message Received');
//   console.log(card);

  
// 		// para.style.visibility = "visible"; 
//   }

function genCard() {
  console.log("genCard???")

}

function clipboardCopy () {
  if (btn.textContent == "Copy To Clipboard") {
    navigator.clipboard.writeText(card).then(function() {
    console.log("Clipboard Copy Successful");
    para.style.visibility = "visible";

  }, function() {
    console.log("Clipboard Copy Failed")
  });
  }
}

// console.log("send Message response activted")
//     card = response["cardVar"];
//     console.log('Message Received');
//     console.log(card);
function sendCard () {
  if (btn.textContent == "Generate Card") {
  
    console.log("sendCard triggered")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log("send Message response activated")
        card = response["cardVar"];
        console.log('Message Received');
        console.log(card);
        cardTextArea.value = card;
        btn.textContent = "Copy To Clipboard";
      });
    });
  }
  
}

if (btn.textContent == "Generate Card") {
    btn.addEventListener("click", genCard);
    btn.addEventListener("click", sendCard);

  }
else if (btn.textContent == "Copy To Clipboard") {
  btn.addEventListener('click', clipboardCopy ());
}

  