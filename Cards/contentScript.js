// AuthorName/Date/ArticleTitle/Organization/Author'sCredentials/URL/DateAcessed

var card;

function cardCompile() {
	var link = window.location.href;
	var nyt = /nytimes/gi;
	var cnbcReg = /cnbc/gi;
	var voxReg = /vox/gi;
	var reutersReg = /reuters/gi;

	// If statements for sites

	if (nyt.test(link)) {
		card = nyTimes();
	}

	else if (cnbcReg.test(link)) {
		card = cnbc();
	}

	else if (voxReg.test(link)) {
		card = vox();
	}

	else if (reutersReg.test(link)) {
		card = reuters()
	}

	else {
		console.log('Website Not Supported')
	}

	// chrome.runtime.sendMessage({"cardVar": card});
	console.log("Card Compile is running")
	return card;


}

function userSelect() {
	var selected = window.getSelection().toString();
	return selected;
}

function displayCard(attatch, card) {
	let divi = document.createElement('div');
	let cardTextArea = document.createElement('textarea');
	let btn = document.createElement('button');
	let para = document.createElement('para');
    
    divi.style.backgroundColor = "#D3D3D3";
	divi.style.width = "60%";
	divi.style.marginLeft = "auto";
	divi.style.marginRight = "auto";
	divi.style.marginTop = "40px";
	divi.style.marginBottom = "40px";
	divi.style.padding = "20px";
	divi.style.fontFamily = "verdana";
	divi.style.fontSize = "15px";
	divi.style.height = "500px";
    
	cardTextArea.style.fontWeight = "lighter";
	cardTextArea.style.width = '100%';
	cardTextArea.style.height = '400px';

	

    // cardTextArea.value = card;
	btn.textContent = "Generate New Card";

	
	para.style.visibility = 'hidden';
	para.textContent = 'Copied To Clipboard!';
	para.style.display = "inline-block";
	para.style.color = "#0bda51";
	para.style.float = "right";
	para.style.margin = "20px";

    
    if (btn.textContent == "Generate New Card") {
		btn.onclick = function () {
			btn.textContent = "Copy To Clipboard";
			cardTextArea.value = card;
			
		}
	} else if  (btn.textContent == "Copy To Clipboard") {
		var copyText = cardTextArea;
		copyText.select();
		// copyText.setSelectionRange(0, 99999);
		document.execCommand("copy");
		para.style.visibility = "visible";
	}
    
    btn.style.border ="none";
    btn.style.backgroundColor = "#42C0FB";
    btn.style.color = "white";
	btn.style.padding = "7px";
	btn.style.margin = "20px";
	btn.style.borderRadius = "10px";
	btn.style.display = "inline-block";
	btn.style.float = "left";
    
	attatch.append(divi);
    divi.appendChild(cardTextArea)
	divi.appendChild(btn)
	divi.appendChild(para)
	
}

function nyTimes() {

		var timeFull = document.getElementsByTagName("time")[0].getAttribute("datetime");
		var auth = document.querySelector('.last-byline').textContent; 
		var time = timeFull.slice(0,10);
		var title = document.querySelector("h1.e1h9rw200").textContent;
		var today = new Date();
		var link = window.location.href
		var selection = userSelect();
		var card = `${auth}, ${time}, ${title}, New York Times, ${link}, ${today}

"${selection}"`;
		console.log(card);
		card;
		// Setting Highlights
		var authStyles = document.querySelector('.last-byline')
		authStyles.style.backgroundColor = "yellow";
		var timeFullStyle = document.getElementsByTagName("time")[0];
		timeFullStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";
		var titleStyle = document.querySelector("h1.e1h9rw200");
		titleStyle.style.backgroundColor = "#00ccff";

		//Putting card on page

		var containHeader = document.querySelector("h1.e1h9rw200");
		// displayCard(containHeader, card);
		return card;
}
	

function cnbc() {
	var time = document.querySelector('time[data-testid="published-timestamp"]').textContent;
	var auth = document.querySelector(".Author-authorName").textContent;
	var title = document.querySelector('.ArticleHeader-headline').textContent;
	var link = window.location.href;
	var today = new Date();
	var selection = userSelect();
	var card = `${auth}, ${time}, ${title}, New York Times, ${link}, ${today}

"${selection}"`;
	console.log(card);
	// Setting Highlights
	var titleStyle = document.querySelector('.ArticleHeader-headline');
	titleStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";
	var authStyle = document.querySelector(".Author-authorName");
	authStyle.style.backgroundColor  = "rgba(107, 240, 255, 0.53)";
	var timeStyle = document.querySelector('time[data-testid="published-timestamp"]');
	timeStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";

	//Putting Card on Page
	// displayCard(titleStyle, card)
	return card;
	
}


function vox () {
	var fullTime = document.getElementsByTagName('time')[0].getAttribute('datetime');
	var time = fullTime.slice(0,9);
	var auth = document.querySelector('span.c-byline__author-name').textContent
	var title = document.querySelector('.c-page-title').textContent;
	var link = window.location.href;
	var today = new Date();
	var selection = userSelect();
	var card = `${auth}, ${time}, ${title}, New York Times, ${link}, ${today}

"${selection}"`;
	console.log(card);
	// Setting Highlights
	var authStyle = document.querySelector('span.c-byline__author-name');
	authStyle.style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
	var titleStyle = document.querySelector('.c-page-title');
	titleStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";
	var timeStyle = document.querySelector('time.c-byline__item');
	timeStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";

	// displayCard(titleStyle, card);
	return card;
}

function reuters () {
	var time = document.querySelector('.ArticleHeader_date').textContent;
	var auth = document.querySelector('.BylineBar_byline').textContent;
	var title = document.querySelector('h1.ArticleHeader_headline').textContent;
	var link = window.location.href;
	var today = new Date();
	var selection = userSelect();
	var card = `${auth}, ${time}, ${title}, New York Times, ${link}, ${today}

"${selection}"`;
	console.log(card);
	// Setting Highlights
	var authStyle = document.querySelector('.BylineBar_byline').style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
	var titleStyle = document.querySelector('.ArticleHeader_headline').style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
	var timeStyle = document.querySelector('.ArticleHeader_date').style.backgroundColor = 'rgba(107, 240, 255, 0.53)';

	var containHeader = document.querySelector('.ArticleHeader_headline');
	// displayCard(containHeader, card);
	return card;
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	  console.log(sender.tab ?
				  "from a content script:" + sender.tab.url :
				  "from the extension");
	  if (request.greeting == "hello")
		sendResponse({"cardVar": cardCompile()});
	});
