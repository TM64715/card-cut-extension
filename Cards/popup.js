function main() {
  console.log('Popup.JS running')
  // Defining Variables
  const cardTextArea = document.getElementById('cardTextArea');
  const btn = document.getElementById('cardControl');
  const para = document.getElementById('successMsg');
  const storagebtn = document.getElementById('getStored');
  const storageField = document.getElementById('cardHistory');
  const appendTo = document.getElementById('appendedTo');
  const clearStorageBtn = document.getElementById("clearStorage");
  const exportAll = document.getElementById("exportAll");
  var card;
  var stored;
  var cardList = [];
  // Clear History
  clearStorageBtn.addEventListener("click", function (){
    chrome.storage.sync.clear();
  })
  // Export All
  exportAll.addEventListener("click", function () {
    exportAll.style.color = "blue";
    chrome.storage.sync.get("card", function(result) {
      cardList = result.card
      var copyText = cardList.join("\n\n");
      navigator.clipboard.writeText(copyText).then(function() {
        console.log(copyText)
        exportAll.style.color = "white"
    })
  })});
  // Looping Through Storage
  storagebtn.addEventListener("click", function () {
    console.log("get Card is running");
    appendTo.innerHTML = "";
    chrome.storage.sync.get("card", function(result) {
      if (typeof result.card == "string") {
        cardList = result.card.split('///')
      }
      if (true) {
        console.log("First ones running")  
        cardList = result.card;
        for (let i = (cardList.length - 1); i > 0; i--) {
          const newInput = document.createElement('textarea');
          newInput.setAttribute("id", `textarea${i}`)
          var copyBtn = document.createElement('button');
          var deleteBtn = document.createElement('button');
          deleteBtn.className = "deleteBtn"
          deleteBtn.textContent = "Delete Card From History";
          deleteBtn.id = `deleteBtn${i}`;
          copyBtn.setAttribute("class", "copyBtn");
          copyBtn.setAttribute("id", `copyBtn${i}`);
          copyBtn.textContent = "Copy Card"
          const newInputCopy = document.getElementById(`textarea${i}`)
          console.log(newInput.value);
          console.log("new textarea")
          newInput.value += cardList[i] + '\n';
          appendTo.appendChild(newInput);
          appendTo.appendChild(copyBtn);
          appendTo.appendChild(deleteBtn)
          $(document).on('click',`#copyBtn${i}`,function(){
            event.preventDefault();
            navigator.clipboard.writeText(newInput.value).then(function() {
              console.log("clipboard successfully set");
              console.log(newInput.value)
              
            }, function() {
              var copyText = newInputCopy;
              copyText.select();
              document.execCommand("copy");
              
              console.log("Second Try for copy text")
            })
          

          })

          $(document).on('click', `#deleteBtn${i}`, function () {
            cardList.splice(i, 1);
            newInput.remove();
            deleteBtn.remove();
            copyBtn.remove();
            chrome.storage.sync.set({"card": cardList}, function() {
              console.log('Value is set to ' + cardList);
            })
          })
        }
     }
      console.log(cardList)
    });
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
    console.log("store card is running")
    chrome.storage.sync.get("card", function(result) {
      if (result.card !== undefined) {
        cardList = result.card;
      }
      else (
        cardList = []
      )
      console.log("Getting Cardlist: " + cardList);
      cardList.push(card);
      console.log("after pushed: " + cardList);
      chrome.storage.sync.set({"card": cardList}, function() {
        console.log('Value is set to ' + cardList);
      })
      
    })
    
    ;
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