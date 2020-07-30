// ISSUES
// Won't capture User selection
// Won't copy text
// Btn firing before ev (fixed)
// Only loads Card Once (Fixed)
var testArray=[];
function storageFunc(card) {
  chrome.storage.sync.set({
      ['list']:testArray
  }, function() {
      console.log("added to list");
  });
  chrome.storage.sync.get({
    ['list']:testArray //put defaultvalues if any
  },
  function(data) {
  console.log(data.list);
  update(data.list); //storing the storage value in a variable and passing to update function
  }
  );  
}
function update(array)
 {
  array.push(card);
  //then call the set to update with modified value
  chrome.storage.sync.set({
      list:array
  }, function() {
      console.log("added to list with new values");
  });
  }



// chrome.runtime.onMessage.addListener(notify);
console.log('Popup.JS running')
const cardTextArea = document.getElementById('cardTextArea');
const btn = document.getElementById('cardControl');
const para = document.querySelector('.successMsg');
const hiddenPara = document.querySelector('.hiddenStorage');
var card;
// function notify(message) {
//   card = message["cardVar"];
//   console.log('Message Received');
//   console.log(card);

  
// 		// para.style.visibility = "visible"; 
//   }




function genCard() {
  if (btn.textContent == "Generate Card") {
    console.log("If statement is bopping")
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
          cardTextArea.style.textAlign = "left";
          testArray.push(card);
          storageFunc(card);

        });
      });
  }
  btn.addEventListener('click', cardCopy())
  btn.addEventListener("click", startOver());
  
}

if (btn.textContent == "Generate Card") {
    btn.addEventListener("click", genCard);
    btn.addEventListener("click", sendCard);

  }
else if (btn.textContent == "Copy To Clipboard") {
  btn.addEventListener('click', cardCopy())
  }

function cardCopy() {
  console.log(btn.textContent)
  if (btn.textContent == "Copy To Clipboard") {
    navigator.clipboard.writeText(cardTextArea.value).then(function() {
      console.log("clipboard successfully set");
      para.style.visibility = "visible";
      btn.textContent = "Start Over"
      cardTextArea.value = "Press CMD+V on Windows or CTRL+V on Windows";
      
    }, function() {
      var copyText = cardTextArea;
		  copyText.select();
		  // copyText.setSelectionRange(0, 99999);
		  document.execCommand("copy");
      para.style.visibility = "visible";
      console.log("Second Try for copy text")
    })
    ;
  }


}

function startOver () {
  console.log('startOver')
  para.style.visibility = "hidden" ;
  btn.textContent = "Generate Card";
  cardTextArea.value = ""
  
}

// https://stackoverflow.com/questions/14531102/saving-and-retrieving-from-chrome-storage-sync



