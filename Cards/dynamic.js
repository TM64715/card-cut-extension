var pages = 
{
    "Pro":
    {
        "storage": "pro",
        "list": "proList"
    },
    "Con":
    {
        "storage": "con",
        "list": "conList"
    },
    "Other":
    {
        "storage": "other",
        "list": "otherList"
    }
}

var dropdown = document.getElementById("select");
const navList = document.getElementById("navList");

for (page in pages) {
    var storage = page.storage;
    var list = page.list;
    var newPage = document.implementation.createHTMLDocument(page.key);
    newPage.name = `${page}.html`
    var newOption = document.createElement('option');
    newOption.textContent = `${page}.html`;
    dropdown.appendChild(newOption)

    var newNav = document.createElement("li");
    newNav.className = "navItem";
    var newNavLink = document.createElement('a');
    newNavLink.setAttribute("href", newPage.name);
    console.log(newPage.URL)
    newNavLink.textContent = page;
    newNav.appendChild(newNavLink);
    navList.appendChild(newNav);
    newPage.head.setAttribute("id", "head");
    var newPageHead = newPage.getElementById("head");
    newPageHead.innerHTML = headHtml
    newPage.body.innerHTML = bodyHtml
    var headHtml = `
        <title>${page}</title>
        <meta charset="utf-8">
        <base href = "chrome-extension://hhgdnmngaegaiabanhgonigogefgfokn/${page}.html"></base>
        <link rel="stylesheet" type="text/css" href="list1.css">	
        <link href="https://fonts.googleapis.com/css2?family=Acme&family=Krona+One&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">`
    var bodyHtml = `<nav>
    <button type="button" class="collapsible">&#9776;</button>
    <div class="content">
        <ul class="navList">
            <li class="navItem"><a href = "popup.html#cardGenerator">Create Card</a></li>
            <li class="navItem"><a href = "popup.html#pastCards">Locker</a></li>
            <li class = "navItem"><a href = "List1.html">Pro</a></li>
            <li class="navItem"><a href = "list2.html">Con</a></li>
            <li class="navItem"><a href = "other.html">Other</a></li>
            <li class="navItem"><a href = "settings.html">Settings</a></li>
        </ul>
    </div>
</nav>
<h1 class="color2">${page}</h1>
<div class = "btnFlex" id ="bgSticky">
    <button id = "exportAll" class="color1 color2Fill">Copy All</button>
    <button id = "getStored" class="color1 color2Fill">See ${page} Cards</button>
    <button id = "clearStorage" class="color1 color2Fill">Clear Card History</button>
</div>
<div id = "appendedTo"></div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script>function main() {
    const storagebtn = document.getElementById('getStored');
    const appendTo = document.getElementById('appendedTo');
    const clearStorageBtn = document.getElementById("clearStorage");
    const exportAll = document.getElementById("exportAll");
clearStorageBtn.onclick = function (){
    chrome.storage.local.set({"${storage}": []}, function () {
      console.log("cleared ${storage}");
    });
    appendTo.innerHTML = "";
  }
  // Export All
  exportAll.addEventListener("click", function () {
    exportAll.style.color = "blue";
    chrome.storage.local.get("${storage}", function(result) {
      ${list} = result.${storage}
      var copyText = ${list}.join("\n\n");
      navigator.clipboard.writeText(copyText).then(function() {
        console.log(copyText)
        exportAll.style.color = "white"
    })
  })});

  storagebtn.addEventListener("click", function () {
    console.log("get Card is running");
    appendTo.innerHTML = "";
    chrome.storage.local.get("${storage}", function(result) {
      if (typeof result.${storage} == "string") {
        ${list} = result.${storage}.split('///')
      }
      if (true) {
        console.log("First ones running")  
        ${list} = result.${storage};
        for (let i = (${list}.length - 1); i >= 0; i--) {
          const newInput = document.createElement('textarea');
          newInput.setAttribute("id", \`textarea\${i}\`)
          const copyBtn = document.createElement('button');
          const clipboardIcon = document.createElement("svg");
          const deleteBtn = document.createElement('button');
          const trashIcon = document.createElement('svg');
          chrome.storage.sync.get(["color1", "color2"], function (result) {
            trashIcon.innerHTML = \`<svg width="20px" height="18px" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="\${result["color1"] || "#faf9f7"}" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
        </svg>
       \` 
            clipboardIcon.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 138" viewBox="0 0 100 100" x="0px" y="0px" height = "23px" width = "23px" fill = "\${result["color1"] || "#faf9f7"}"><title>Artboard 2 copy 29</title><path d="M72.32,26.43V16.52a5.58,5.58,0,0,0-5.58-5.58H53.47A6.57,6.57,0,0,1,50,23.1H27.68a6.57,6.57,0,0,1-3.47-12.16H10.94a5.58,5.58,0,0,0-5.58,5.58V77.9a5.58,5.58,0,0,0,5.58,5.58H37.17V32a5.58,5.58,0,0,1,5.58-5.58Z"/><path d="M22.1,16.52a5.58,5.58,0,0,0,5.58,5.58H50a5.58,5.58,0,0,0,0-11.16H44.42a5.58,5.58,0,1,0-11.16,0H27.68A5.58,5.58,0,0,0,22.1,16.52Z"/><path d="M89.06,27.68H44.42a5.58,5.58,0,0,0-5.58,5.58v55.8a5.58,5.58,0,0,0,5.58,5.58H75.11L94.64,75.11V33.26A5.58,5.58,0,0,0,89.06,27.68ZM77.9,72.32a5.58,5.58,0,0,0-5.58,5.58V89.06H47.21a2.79,2.79,0,0,1-2.79-2.79V36.05a2.79,2.79,0,0,1,2.79-2.79H86.27a2.79,2.79,0,0,1,2.79,2.79V72.32Z"/><path d="M69.53,55.58H58.37a2.79,2.79,0,0,0,0,5.58H69.53a2.79,2.79,0,0,0,0-5.58Z"/><path d="M75.11,44.42H58.37a2.79,2.79,0,0,0,0,5.58H75.11a2.79,2.79,0,1,0,0-5.58Z"/></svg>\`
            deleteBtn.style.backgroundColor = result.color2;
            copyBtn.style.backgroundColor = result.color2;
            newInput.style.border = \`3px double \${result.color2}\`;
          })
          
          newInput.className = "oldCardContent"
          clipboardIcon.className = "clipboard"
          trashIcon.className = "trash"
          deleteBtn.className = "deleteBtn color1 color2Fill"
          // deleteBtn.textContent = "Delete";
          deleteBtn.id = \`deleteBtn\${i}\`;
          copyBtn.setAttribute("class", "copyBtn color1");
          copyBtn.setAttribute("id", \`copyBtn\${i}\`);
          // copyBtn.textContent = "Copy Card"
          const newInputCopy = document.getElementById(\`textarea\${i}\`)
          console.log(newInput.value);
          console.log("new textarea")
          newInput.value += \${list}[i] + '\n';
          appendTo.appendChild(newInput);
          appendTo.appendChild(copyBtn);
          appendTo.appendChild(deleteBtn)
          deleteBtn.appendChild(trashIcon);
          copyBtn.appendChild(clipboardIcon);
          newInput.setAttribute("spellcheck", "false")
          $(document).on('click',\`#copyBtn\${i}\`,function(){
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

          $(document).on('click', \`#deleteBtn\${i}\`, function () {
            ${list}.splice(i, 1);
            newInput.remove();
            deleteBtn.remove();
            copyBtn.remove();
            chrome.storage.local.set({"${storage}": ${list}}, function() {
              console.log('Value is set to ' + ${list});
            })
          })
        }
     }
      console.log(${list})
    });
  })
  chrome.storage.sync.get(["color2", "color1", "bgColor"], function(result) {
    var body = document.getElementById("body");
    var btnList = document.getElementById("bgSticky");
    btnList.style.backgroundColor = result.bgColor;
    body.style.backgroundColor = result.bgColor;
    if (result.color1) {
      var useColor1 = document.getElementsByClassName("color1");
      for (let i = 0; i < (useColor1.length); i++) {
          useColor1[i].style.color = result.color1
      }
  }

      else {
          for (let i = 0; i < (useColor1.length); i++) {
              useColor1[i].style.color = "#faf9f7"
          }

          chrome.storage.sync.set({"color1": "#faf9f7"}, function (){
              console.log("color1 set to #faf9f7");
          })}

          chrome.storage.sync.get("color2", function(result) {
            var useColor2 = document.getElementsByClassName("color2");
            var color2Fill = document.getElementsByClassName("color2Fill");
            for (let i = 0; i < (useColor2.length); i++) {
                useColor2[i].style.color = result.color2
            }
    
            for (let i = 0; i < (color2Fill.length); i++) {
                color2Fill[i].style.backgroundColor = result.color2;
            }

        })  
      }
  )
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
}
  window.addEventListener("DOM Content Loaded", main())</script>`
}