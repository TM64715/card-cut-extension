var pages;
document.addEventListener("DOMContentLoaded", function () {
chrome.storage.local.get("pages", function(result) {
  if(result.pages && typeof result.pages == "object") {
    pages = result["pages"];
    console.log("if")
  } else {
    chrome.storage.local.set({
      "pages" : {"Pro":
      {
          "inner": ""
      },
      "Con":
      {
          "inner": ""
      },
      "Other":
      {
          "inner":""
      }
    }}, function() {
      pages = 
      {"Pro":
      {
          "inner": ""
      },
      "Con":
      {
          "inner": ""
      },
      "Other":
      {
          "inner":""
      }}
      console.log("else")
    }
    )
  }
  var dropdown = document.getElementById("select");
const navList = document.getElementById("navList");
var bod = document.getElementById("replace");
for (let page in pages) {
  $(document).trigger("DOMContentLoaded")
  let storageBtn = document.getElementById('getStored');
  var newOption  = document.createElement('option');
  newOption.textContent = page;
  dropdown.appendChild(newOption)
  var newLi = document.createElement('dt');
  newLi.className = "navItem newCat"
  navList.appendChild(newLi);
  var newLink = document.createElement('a');
  newLi.appendChild(newLink);
  newLink.textContent = page;
  newLink.setAttribute("href", "#");
  newLink.setAttribute("id", page)
  
  newLi.addEventListener("click", function () {
    theme()
    var bodyInner = `
  <h1 id = "pastCards">${page}</h1>
		<!-- <textarea class = "cardTextArea" id = "cardHistory" spellcheck="false"></textarea> -->
		<div class = "alignCenter catControl" id ="bgSticky">
			<button id = "exportAll" class="gap-10">Copy All</button>
			<button id = "getStored" class="gap-10">See ${page.length <= 9 ? page : 'Past'} Cards</button>
			<button id = "clearStorage">Clear History</button>
		</div>
		<div id = "appendedTo"></div>
  `

  // Clear Storage
  $(document).on("click", "#clearStorage", function () {
    var myObj = {}
    myObj[page] = []
    chrome.storage.local.set(myObj);
    appendTo.innerHTML = '';
  })

  // Export all
  $(document).on("click", "#exportAll", function() {
    var copyText = "";
    chrome.storage.local.get(page, function(result) {
      for (let i = 0; i < result[page].length; i++) {
        copyText += result[page][i];
        console.log("Hello " + result[page][i]);
      }
      navigator.clipboard.writeText(copyText).then(function () {
        console.log("copied" + copyText);
      });
    })

  });

  // Looping Storage
    var getStored = document.getElementById("getStored");
    bod.innerHTML = bodyInner;
    console.log(`${page} clicked`);
    console.log(page + " triggered");
    var appendTo = document.getElementById('appendedTo');
    $(document).on("click", "#getStored",function () {
      appendTo.innerHTML = '';
      console.log("getstored clicked");
      chrome.storage.local.get(page, function (result) {
        var newArr = result[`${page}`];
        console.log(newArr);
        for (let i = newArr.length - 1; i >= 0; i--) {
          const newInput = document.createElement('textarea');
          newInput.setAttribute("id", `textarea${i}`)
          const copyBtn = document.createElement('button');
          const clipboardIcon = document.createElement("object");
          const deleteBtn = document.createElement('button');
          const trashIcon = document.createElement('object');
          const btnContainer = document.createElement("div");
          clipboardIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height = "29px" fill = "var(--main-text-color)"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"/></svg>`
          trashIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height = "29px" fill = "var(--main-text-color)"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/></svg>`
          newInput.className = "oldCardContent"
          clipboardIcon.className = "clipboard"
          trashIcon.className = "trash"
          deleteBtn.className = "deleteBtn gap-10"
          // deleteBtn.textContent = "Delete";
          deleteBtn.id = `deleteBtn${i}`;
          copyBtn.setAttribute("class", "copyBtn");
          copyBtn.setAttribute("id", `copyBtn${i}`);
          // copyBtn.textContent = "Copy Card"
          const newInputCopy = document.getElementById(`textarea${i}`);
          btnContainer.className = "btnControlContainer";
          console.log("new textarea")
          newInput.value = newArr[i] + '\n';
          appendTo.appendChild(newInput);
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
            newArr.splice(i, 1);
            newInput.remove();
            deleteBtn.remove();
            copyBtn.remove();
            var myObj = {}
            myObj[page] = newArr;
            chrome.storage.local.set(myObj, function() {
              console.log("value is set to ");
              console.log(myObj);
            })
          })
        }
        
      })
      
    })
  })

  
}


document.addEventListener("DOMContentLoaded", theme ())
function theme () {
  changing_style = document.getElementById("style");
  chrome.storage.sync.get("color1", (color1) => {
    chrome.storage.sync.get("color2", (color2) => {
      chrome.storage.sync.get("color3", (color3) => {
        chrome.storage.sync.get("bgColor", (bgColor) => {
          style.innerHTML = `
          :root {
            ${(color1.color1 != undefined) ? "--main-text-color: " + color1.color1 + ";" : ''}
            ${color3.color3 != undefined ? "--accent-color: " + color3.color3 + ";": ''}
            ${color2.color2 != undefined ? "--button-background-color: " + color2.color2 + ";": ''}
            ${(bgColor.bgColor != undefined) ? "--background-color: "+ bgColor.bgColor + ";": ''}

          }
          `
      })
      })
    })

  })
}

function changes () {
  for (page in pages) {
    let storageBtn = document.getElementById('getStored');
    var newOption  = document.createElement('option');
    newOption.textContent = page;
    dropdown.appendChild(newOption)
  }
}
  }
    );

});