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
        for (let i = (cardList.length - 1); i >= 0; i--) {
          const newInput = document.createElement('textarea');
          newInput.setAttribute("id", `textarea${i}`)
          const copyBtn = document.createElement('button');
          const clipboardIcon = document.createElement("svg");
          const deleteBtn = document.createElement('button');
          const trashIcon = document.createElement('svg');
          trashIcon.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="15px" height="15px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
       <path fill="#faf9f7" d="M459.232,60.687h-71.955c-1.121-17.642-15.631-31.657-33.553-31.657H161.669
         c-17.921,0-32.441,14.015-33.553,31.657H64.579c-18.647,0-33.767,15.12-33.767,33.768v8.442c0,18.648,15.12,33.768,33.767,33.768
         h21.04v342.113c0,13.784,11.179,24.963,24.963,24.963h308.996c13.784,0,24.964-11.179,24.964-24.963V136.665h14.691
         c18.663,0,33.768-15.12,33.768-33.768v-8.442C493,75.807,477.896,60.687,459.232,60.687z M196.674,443.725
         c0,12.58-10.197,22.803-22.802,22.803c-12.598,0-22.803-10.223-22.803-22.803v-284.9c0-12.597,10.205-22.802,22.803-22.802
         c12.605,0,22.802,10.206,22.802,22.802V443.725z M287.887,443.725c0,12.58-10.205,22.803-22.803,22.803
         s-22.803-10.223-22.803-22.803v-284.9c0-12.597,10.205-22.802,22.803-22.802s22.803,10.206,22.803,22.802V443.725z M379.099,443.725
         c0,12.58-10.205,22.803-22.803,22.803c-12.613,0-22.803-10.223-22.803-22.803v-284.9c0-12.597,10.189-22.802,22.803-22.802
         c12.598,0,22.803,10.206,22.803,22.802V443.725z"/>
       </svg>
       ` 
          clipboardIcon.className = "clipboard"
          clipboardIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 138" viewBox="0 0 100 100" x="0px" y="0px" height = "20px" width = "20px" fill = "white"><title>Artboard 2 copy 29</title><path d="M72.32,26.43V16.52a5.58,5.58,0,0,0-5.58-5.58H53.47A6.57,6.57,0,0,1,50,23.1H27.68a6.57,6.57,0,0,1-3.47-12.16H10.94a5.58,5.58,0,0,0-5.58,5.58V77.9a5.58,5.58,0,0,0,5.58,5.58H37.17V32a5.58,5.58,0,0,1,5.58-5.58Z"/><path d="M22.1,16.52a5.58,5.58,0,0,0,5.58,5.58H50a5.58,5.58,0,0,0,0-11.16H44.42a5.58,5.58,0,1,0-11.16,0H27.68A5.58,5.58,0,0,0,22.1,16.52Z"/><path d="M89.06,27.68H44.42a5.58,5.58,0,0,0-5.58,5.58v55.8a5.58,5.58,0,0,0,5.58,5.58H75.11L94.64,75.11V33.26A5.58,5.58,0,0,0,89.06,27.68ZM77.9,72.32a5.58,5.58,0,0,0-5.58,5.58V89.06H47.21a2.79,2.79,0,0,1-2.79-2.79V36.05a2.79,2.79,0,0,1,2.79-2.79H86.27a2.79,2.79,0,0,1,2.79,2.79V72.32Z"/><path d="M69.53,55.58H58.37a2.79,2.79,0,0,0,0,5.58H69.53a2.79,2.79,0,0,0,0-5.58Z"/><path d="M75.11,44.42H58.37a2.79,2.79,0,0,0,0,5.58H75.11a2.79,2.79,0,1,0,0-5.58Z"/></svg>`
          trashIcon.className = "trash"
          deleteBtn.className = "deleteBtn"
          // deleteBtn.textContent = "Delete";
          deleteBtn.id = `deleteBtn${i}`;
          copyBtn.setAttribute("class", "copyBtn");
          copyBtn.setAttribute("id", `copyBtn${i}`);
          // copyBtn.textContent = "Copy Card"
          const newInputCopy = document.getElementById(`textarea${i}`)
          console.log(newInput.value);
          console.log("new textarea")
          newInput.value += cardList[i] + '\n';
          appendTo.appendChild(newInput);
          appendTo.appendChild(copyBtn);
          appendTo.appendChild(deleteBtn)
          deleteBtn.appendChild(trashIcon);
          copyBtn.appendChild(clipboardIcon);
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