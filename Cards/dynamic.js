var pages = 
{
    "Pro":
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
  var newLi = document.createElement('li');
  newLi.className = "navItem"
  navList.appendChild(newLi);
  var newLink = document.createElement('a');
  newLi.appendChild(newLink);
  newLink.textContent = page;
  newLink.setAttribute("href", "#");
  newLink.setAttribute("id", page)
  
  newLi.addEventListener("click", function () {
    theme()
    var bodyInner = 
`<h1 class="color2">${page}</h1>
    <div class = "btnFlex bgFill" id ="bgSticky">
      <button id = "exportAll" class="color1 color2Fill">Copy All</button>
      <button id = "getStored" class="color1 color2Fill">See ${page} Cards</button>
      <button id = "clearStorage" class="color1 color2Fill">Clear ${page} History</button>
    </div>
    <div id = "appendedTo"></div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
  </body>
  </html>`
  var getStored = document.getElementById("getStored");
    bod.innerHTML = bodyInner;
    console.log(`${page} clicked`);
    console.log(page + " triggered");
    var appendTo = document.getElementById('appendedTo');
    $(document).on("click", "#getStored",function () {
      appendTo.innerHTML = '';
      console.log("clicked");
      chrome.storage.local.get(pages, function (result) {
        var newArr = result[page];
        for (let i = newArr.length; i > 0; i--) {
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
          newInput.value = newArr[i] + '\n';
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


var home = document.getElementById('home');
home.addEventListener("click", function () {
  theme()
  changes()
  bod.innerHTML = `<h1 class="productName color2" id = "cardGenerator">Evidence Locker</h1>
	<div>
		<textarea class = "cardTextArea" id = "cardTextArea" placeholder="Highlight the text of the card then press 'Create Card'" spellcheck="false"></textarea>
		<li class = "saveTo color2Fill">
			<label for = "saveTo" class = "saveToLabel color1">Destination: </label>
			<select id = "select" class="color1" value = "Locker">
				<option>Locker</option>
			</select>
		</li>
		<button class="cardControl color1 color2Fill" id = "cardControl">Create Card</button>
		
		<p class = "color2">All cards are saved to <strong>Locker.</strong> If you want a more specific list save the card to a different category otherwise leave it on <strong>Locker.</strong></p>
		<h1 class="productName color2" id = "pastCards">Locker</h1>
		<!-- <textarea class = "cardTextArea" id = "cardHistory" spellcheck="false"></textarea> -->
		<div class = "btnFlex" id ="bgSticky">
			<button id = "exportAll" class="color1 color2Fill">Copy All</button>
			<button id = "getStored" class="color1 color2Fill">See Past Cards</button>
			<button id = "clearStorage" class="color1 color2Fill">Clear Card History</button>
		</div>
		<div id = "appendedTo"></div>
		
		
	</div>`
})


document.addEventListener("DOMContentLoaded", theme ())
function theme () {
  chrome.storage.sync.get("bgColor", function(result) {
      var body = document.getElementById("body");
      var bgSticky = document.getElementById("bgSticky");
      body.style.backgroundColor = result.bgColor;
      bgSticky.style.backgroundColor = result.bgColor;


  })
  chrome.storage.sync.get("color1", function(result) {
      if (result.color1) {
          var useColor1 = document.getElementsByClassName("color1");
          var select = document.getElementById("select");
          for (let i = 0; i < (useColor1.length); i++) {
              useColor1[i].style.color = result.color1
          }
          try {
          select.style.border = `.5px solid ${result.color1}`;
          } catch(err) {
            console.log(err);
          }
      }

          else {
              for (let i = 0; i < (useColor1.length); i++) {
                  useColor1[i].style.color = "#faf9f7"
              }

              chrome.storage.sync.set({"color1": "#faf9f7"}, function (){
                  console.log("color1 set to #faf9f7");
              })
          }
       }
  );
  chrome.storage.sync.get("color2", function(result) {
      var useColor2 = document.getElementsByClassName("color2");
      var color2Fill = document.getElementsByClassName("color2Fill");
      for (let i = 0; i < (useColor2.length); i++) {
          useColor2[i].style.color = result.color2
      }

      for (let i = 0; i < (color2Fill.length); i++) {
          color2Fill[i].style.backgroundColor = result.color2;
      }
      try {
      const bigTxtArea = document.getElementById("cardTextArea");
      select.style.backgroundColor = result.color2;
      bigTxtArea.style.border = `3px double ${result.color2}`;}catch(err) {}
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