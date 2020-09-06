function main() {
  console.log('Popup.JS running')
  // Defining Variables
  const cardTextArea = document.getElementById('cardTextArea');
  const btn = document.getElementById('cardControl');
  const storagebtn = document.getElementById('getStored');
  const storageField = document.getElementById('cardHistory');
  const appendTo = document.getElementById('appendedTo');
  const clearStorageBtn = document.getElementById("clearStorage");
  const exportAll = document.getElementById("exportAll");
  const select = document.getElementById("select");
  const hamburger = document.getElementById("hamburger")
  var card;
  var stored;
  var cardList = [];
  var cardList1 = [];
  var cardList2 = [];
  var cardList3 = [];
  // Clear History
  clearStorageBtn.addEventListener("click", function (){
    chrome.storage.local.set({"card": []}, function () {
      console.log("cleared");
    });
    appendTo.innerHTML = "";
  })
  // Export All
  exportAll.addEventListener("click", function () {
    exportAll.style.color = "blue";
    chrome.storage.local.get("card", function(result) {
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
    chrome.storage.local.get("card", function(result) {
      if (typeof result.card == "string") {
        cardList = result.card.split('///$555')
      }
      if (true) {
        console.log("First ones running")  
        cardList = result.card;
        for (let i = (cardList.length - 1); i >= 0; i--) {
          const newInput = document.createElement('textarea');
          newInput.setAttribute("id", `textarea${i}`)
          const copyBtn = document.createElement('button');
          const clipboardIcon = document.createElement("object");
          const deleteBtn = document.createElement('button');
          const trashIcon = document.createElement('object');
          const btnContainer = document.createElement("div");
          btnContainer.className = "btnControlContainer";
          trashIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height = "25px" fill = "var(--main-text-color)"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/></svg>`
          clipboardIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height = "25px" fill = "var(--main-text-color)"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"/></svg>`
          
          newInput.className = "oldCardContent"
          clipboardIcon.className = "clipboard"
          trashIcon.className = "trash"
          deleteBtn.className = "deleteBtn"
          // deleteBtn.textContent = "Delete";
          deleteBtn.id = `deleteBtn${i}`;
          copyBtn.setAttribute("class", "copyBtn");
          copyBtn.setAttribute("id", `copyBtn${i}`);
          // copyBtn.textContent = "Copy Card"
          const newInputCopy = document.getElementById(`textarea${i}`)
          console.log("new textarea")
          newInput.value += cardList[i] + '\n';
          appendTo.appendChild(newInput);
          appendTo.appendChild(btnContainer);
          btnContainer.appendChild(deleteBtn);
          btnContainer.appendChild(copyBtn);
          deleteBtn.appendChild(trashIcon);
          copyBtn.appendChild(clipboardIcon);
          newInput.setAttribute("spellcheck", "false")
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
            chrome.storage.local.set({"card": cardList}, function() {
              // console.log('Value is set to ' + cardList);
            })

          })
        }
     }
      // console.log(cardList)
    });
  })
  
  function genCard() {
    
  }
  // console.log("send Message response activted")
  //     card = response["cardVar"];
  //     console.log('Message Received');
  //     console.log(card);
  function sendCard () {
    if (btn.textContent == "Create Card") {
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
            destination(card);
            document.getElementById("saveTo").style.display = "none";

          });
        });
    }
    btn.addEventListener('click', cardCopy())
    btn.addEventListener("click", startOver());
    
  }

  function storeCard(card) {
    console.log("store card is running")
    chrome.storage.local.get("card", function(result) {
      if (result.card !== undefined) {
        cardList = result.card;
      }
      else (
        cardList = []
      )
      console.log("Getting Cardlist: " + cardList);
      cardList.push(card);
      console.log("after pushed: " + cardList);
      chrome.storage.local.set({"card": cardList}, function() {
        console.log('Value is set to ' + cardList);
      })
      
    })
    
    ;
  }
  if (btn.textContent == "Create Card") {
      btn.addEventListener("click", genCard);
      btn.addEventListener("click", sendCard);

    }
    // Prolly Useless(elif)
  else if (btn.textContent == "Copy To Clipboard") {
    btn.addEventListener('click', cardCopy())
    }

  function cardCopy() {
    console.log(btn.textContent)
    if (btn.textContent == "Copy To Clipboard") {
      navigator.clipboard.writeText(cardTextArea.value).then(function() {
        console.log("clipboard successfully set");
        btn.textContent = "Start Over"
        cardTextArea.value = "Press CMD+V on Windows or CTRL+V on Windows";
        
      }, function() {
        var copyText = cardTextArea;
        copyText.select();
        // copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        console.log("Second Try for copy text")
      })
      ;
    }


  }

  function startOver () {
    console.log('startOver')
    if (btn.textContent == "Start Over") {
    btn.textContent = "Create Card";
    cardTextArea.value = "";
    document.getElementById("saveTo").style.display = "block";
    }
  }
// Saving Dropdown
  select.addEventListener("change", function () {
      chrome.storage.sync.set({"select": select.value}, function () {
      console.log("select set to " + select.value);
    })
  })

  chrome.storage.sync.get("select", function (result) {
    if (result.select) {
    select.value = result.select
    }
    else {
      select.value = "Default";
    }
  })

  // save special
  function destination (card) {
    const dropdown = document.getElementById("select");
    if (dropdown.value != "Default") {
      var shelf = dropdown.value;
      var storageObj = {}
      chrome.storage.local.get(dropdown.value, function(result) {
        var gotten = result[dropdown.value];
        if (typeof gotten != "object" || !gotten) {
          storageObj[shelf] = [card];
          chrome.storage.local.set(storageObj)
        }
        else {
          var listDy = result[dropdown.value]
          listDy.push(card);
          storageObj[shelf] = listDy;
          chrome.storage.local.set(storageObj)
        }
      })
      chrome.storage.local.set(storageObj);
      console.log(storageObj)
    }
  }
}
window.addEventListener("DOM Content Loaded", main())