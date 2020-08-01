// ISSUES
// Won't capture User selection(fixed);
// Won't copy text(fixed)
// Btn firing before ev (fixed)
// Only loads Card Once (Fixed)
<<<<<<< Updated upstream
// Wont add more sites properly
// Maybe add google docs api for storage

var card;
var link;
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "contentToExtn")
  port.onMessage.addListener(function (msg) {
    getLink(msg);
    console.log("Message Recieved")
  });
})

function getLink(msg) {
  link = msg.locationLink;
  console.log(link);
  console.log("getLink running")
  return link;
}
var link = window.link;
console.log("GLopbal " + window.link)


=======
var link;

function getLink () {
  chrome.runtime.onMessage.addListener(
  function(request, sender) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    link = request["location"];
    console.log(link);
    return link;
  });
}

link = getLink()
console.log(link + " link has been defined")


function cardCompile() {
	var nyt = /nytimes/gi;
	var cnbcReg = /cnbc/gi;
	var voxReg = /vox/gi;
	var reutersReg = /reuters/gi;

	// If statements for sites

	if (nyt.test(link)) {
      if (btn.textContent == "Generate Card") {
        console.log("sendCard triggered")
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "nyt"}, function(response) {
              console.log("send Message response activated")
              card = response["cardVar"];
              console.log('Message Received');
              console.log(card);
              cardTextArea.value = card;
              btn.textContent = "Copy To Clipboard";
              cardTextArea.style.textAlign = "left";
    
            });
          });
      }
      btn.addEventListener('click', cardCopy())
      btn.addEventListener("click", startOver());
      
	}

	else if (cnbcReg.test(link)) {
      if (btn.textContent == "Generate Card") {
        console.log("sendCard triggered")
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "cnbc"}, function(response) {
              console.log("send Message response activated")
              card = response["cardVar"];
              console.log('Message Received');
              console.log(card);
              cardTextArea.value = card;
              btn.textContent = "Copy To Clipboard";
              cardTextArea.style.textAlign = "left";
    
            });
          });
      }
      btn.addEventListener('click', cardCopy())
      btn.addEventListener("click", startOver());
      
	}

	else if (voxReg.test(link)) {
		if (btn.textContent == "Generate Card") {
      console.log("sendCard triggered")
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {greeting: "vox"}, function(response) {
            console.log("send Message response activated")
            card = response["cardVar"];
            console.log('Message Received');
            console.log(card);
            cardTextArea.value = card;
            btn.textContent = "Copy To Clipboard";
            cardTextArea.style.textAlign = "left";
  
          });
        });
    }
    btn.addEventListener('click', cardCopy())
    btn.addEventListener("click", startOver());
	}

	else if (reutersReg.test(link)) {
		if (btn.textContent == "Generate Card") {
      console.log("sendCard triggered")
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {greeting: "reuters"}, function(response) {
            console.log("send Message response activated")
            card = response["cardVar"];
            console.log('Message Received');
            console.log(card);
            cardTextArea.value = card;
            btn.textContent = "Copy To Clipboard";
            cardTextArea.style.textAlign = "left";
  
          });
        });
    }
    btn.addEventListener('click', cardCopy())
    btn.addEventListener("click", startOver());
	}

	else {
		console.log('Website Not Supported');
	}

	// chrome.runtime.sendMessage({"cardVar": card});
	console.log("Card Compile is running");


}

// chrome.runtime.onMessage.addListener(notify);
>>>>>>> Stashed changes
console.log('Popup.JS running')
const cardTextArea = document.getElementById('cardTextArea');
const btn = document.getElementById('cardControl');
const para = document.querySelector('.successMsg');
var card;




function genCard() {
  
  if (btn.textContent == "Generate Card") {
    console.log("If statement is bopping")
  }

}
// console.log("send Message response activted")
//     card = response["cardVar"];
//     console.log('Message Received');
//     console.log(card);
// function sendCard () {
//   if (btn.textContent == "Generate Card") {
//     console.log("sendCard triggered")
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//           console.log("send Message response activated")
//           card = response["cardVar"];
//           console.log('Message Received');
//           console.log(card);
//           cardTextArea.value = card;
//           btn.textContent = "Copy To Clipboard";
//           cardTextArea.style.textAlign = "left";

//         });
//       });
//   }
//   btn.addEventListener('click', cardCopy())
//   btn.addEventListener("click", startOver());
  
// }

if (btn.textContent == "Generate Card") {
    btn.addEventListener("click", genCard);
    // btn.addEventListener("click", sendCard);
    btn.addEventListener("click", cardCompile)

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
<<<<<<< Updated upstream


  
=======
  
var cardElements = card.split(', ');
var auth = cardElements[0];
var time = cardElements[1] + ", " +  cardElements[2];
var title = cardElements[3];
var org = cardElements[4];
var link = cardElements[5];
var localTime = cardElements[6];
>>>>>>> Stashed changes
