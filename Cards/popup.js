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
          const clipboardIcon = document.createElement("svg");
          const deleteBtn = document.createElement('button');
          const trashIcon = document.createElement('svg');
          chrome.storage.sync.get(["color1", "color2"], function (result) {
            trashIcon.innerHTML = `<svg width="20px" height="18px" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="${result["color1"] || "#faf9f7"}" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
        </svg>
       ` 
            clipboardIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 138" viewBox="0 0 100 100" x="0px" y="0px" height = "23px" width = "23px" fill = "${result["color1"] || "#faf9f7"}"><title>Artboard 2 copy 29</title><path d="M72.32,26.43V16.52a5.58,5.58,0,0,0-5.58-5.58H53.47A6.57,6.57,0,0,1,50,23.1H27.68a6.57,6.57,0,0,1-3.47-12.16H10.94a5.58,5.58,0,0,0-5.58,5.58V77.9a5.58,5.58,0,0,0,5.58,5.58H37.17V32a5.58,5.58,0,0,1,5.58-5.58Z"/><path d="M22.1,16.52a5.58,5.58,0,0,0,5.58,5.58H50a5.58,5.58,0,0,0,0-11.16H44.42a5.58,5.58,0,1,0-11.16,0H27.68A5.58,5.58,0,0,0,22.1,16.52Z"/><path d="M89.06,27.68H44.42a5.58,5.58,0,0,0-5.58,5.58v55.8a5.58,5.58,0,0,0,5.58,5.58H75.11L94.64,75.11V33.26A5.58,5.58,0,0,0,89.06,27.68ZM77.9,72.32a5.58,5.58,0,0,0-5.58,5.58V89.06H47.21a2.79,2.79,0,0,1-2.79-2.79V36.05a2.79,2.79,0,0,1,2.79-2.79H86.27a2.79,2.79,0,0,1,2.79,2.79V72.32Z"/><path d="M69.53,55.58H58.37a2.79,2.79,0,0,0,0,5.58H69.53a2.79,2.79,0,0,0,0-5.58Z"/><path d="M75.11,44.42H58.37a2.79,2.79,0,0,0,0,5.58H75.11a2.79,2.79,0,1,0,0-5.58Z"/></svg>`
            deleteBtn.style.backgroundColor = result.color2;
            copyBtn.style.backgroundColor = result.color2;
            newInput.style.border = `3px double ${result.color2}`;
          })
          
          newInput.className = "oldCardContent"
          clipboardIcon.className = "clipboard"
          trashIcon.className = "trash"
          deleteBtn.className = "deleteBtn color1 color2Fill"
          // deleteBtn.textContent = "Delete";
          deleteBtn.id = `deleteBtn${i}`;
          copyBtn.setAttribute("class", "copyBtn color1");
          copyBtn.setAttribute("id", `copyBtn${i}`);
          // copyBtn.textContent = "Copy Card"
          const newInputCopy = document.getElementById(`textarea${i}`)
          console.log("new textarea")
          newInput.value += cardList[i] + '\n';
          appendTo.appendChild(newInput);
          appendTo.appendChild(copyBtn);
          appendTo.appendChild(deleteBtn)
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
    
    if (btn.textContent == "Generate Card") {
      console.log("If statement is working")
    }

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
    btn.textContent = "Create Card";
    cardTextArea.value = ""
  }
// Nav
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
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
      select.value = "Locker";
    }
  })

  // save special
  function destination (card) {
    if (dropdown.value != "Locker") {
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