function main() {
  console.log('Popup.JS running')
  const cardTextArea = document.getElementById('cardTextArea');
  const btn = document.getElementById('cardControl');
  const para = document.getElementById('successMsg');
  const storagebtn = document.getElementById('getStored');
  const storageField = document.getElementById('cardHistory');
  const appendTo = document.getElementById('appendedTo');
  var card;
  var stored;
  var cardList;
  storagebtn.addEventListener("click", function () {
    chrome.storage.sync.get("card", function(result) {
      if (typeof result.card == "string") {
        cardList = result.card.split('///')
      }
      console.log("Fist ones running")  
      cardList = result.card;
      for (let i = 0; i < (cardList.length); i++) {
        var newPara = document.createElement('p');
        console.log("new paragraph")
        newPara.textContent = cardList[i];
        appendTo.appendChild(newPara);
      }
      
      console.log(cardList)
    });
  })
  

  

  // Defining Variables
  
  storagebtn.addEventListener("click", function () {
    chrome.storage.sync.get("card", function(result) {
      storageField.textContent = result.card;
      console.log(result.card)
    });
    console.log("Second thing working")
    
  })


  function genCard() {
    
    if (btn.textContent == "Generate Card") {
      console.log("If statement is working")
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
            storeCard(card)

          });
        });
    }
    btn.addEventListener('click', cardCopy())
    btn.addEventListener("click", startOver());
    
  }

  function storeCard(card) {
    if (card.isArray !== true) {
      cardList = card.split('///')
    }
    chrome.storage.sync.set({"card": cardList}, function() {
      console.log('Value is set to ' + cardList);
    });
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
}
window.addEventListener("DOM Content Loaded", main())