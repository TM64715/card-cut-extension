// AuthorName/Date/ArticleTitle/Organization/Author'sCredentials/URL/DateAcessed
function runScript() {
	var card;

	function cardCompile() {
		var link = window.location.href;
		var nyt = /nytimes/gi;
		var cnbcReg = /cnbc/gi;
		var voxReg = /vox/gi;
		var reutersReg = /reuters/gi;
		var busReg = /insider\.com/gi;
		var huffPostReg = /huffpost/gi;
		var waPoReg = /washingtonpost/gi;
		var wsjReg = /www\.wsj/gi;
		var nbcReg = /nbcnews/gi;

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

		else if (busReg.test(link)){
			card = busInsider();
		}
		else if (huffPostReg.test(link)) {
			card = huffPost();
		}
		else if (waPoReg.test(link)) {
			card = waPo();
		}
		else if (wsjReg.test(link)) {
			card = wsj();
		}
		else if (nbcReg.test(link)) {
			card = nbc();
		}
		else {
			console.log('Website Not Supported');
			card = "Website Not Supported";
		}

		// chrome.runtime.sendMessage({"cardVar": card});
		console.log("Card Compile is running")
		console.log(card);
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

		try {
			var auth = document.querySelector(".last-byline").textContent.trim()
		} catch(err) {
			var auth = "NYT Staff";
		}
		try {
			var title = document.querySelector("h1.e1h9rw200").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector("time").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, New York Times, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".last-byline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector("h1.e1h9rw200").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector("time").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}
		

	function cnbc() {
		try {
			var auth = document.querySelector(".Author-authorName").textContent.trim()
		} catch(err) {
			var auth = "CNBC Staff";
		}
		try {
			var title = document.querySelector(".ArticleHeader-headline").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector("time[data-testid=\"published-timestamp\"]").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, CNBC, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".Author-authorName").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector(".ArticleHeader-headline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector("time[data-testid=\"published-timestamp\"]").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}


	function vox () {
		try {
			var auth = document.querySelector("span.c-byline__author-name").textContent.trim()
		} catch(err) {
			var auth = "Vox Staff";
		}
		try {
			var title = document.querySelector(".c-page-title").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector("time").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Vox, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector("span.c-byline__author-name").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector(".c-page-title").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector("time").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function reuters () {
		try {
			var auth = document.querySelector(".BylineBar_byline").textContent.trim()
		} catch(err) {
			var auth = "Reuters Staff";
			console.log(err);
		}
		try {
			var title = document.querySelector("h1.ArticleHeader_headline").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".ArticleHeader_date").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Reuters, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".BylineBar_byline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector("h1.ArticleHeader_headline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".ArticleHeader_date").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}


	function busInsider () {
		try {
			var auth = document.querySelector("a.byline-author-name").textContent.trim()
		} catch(err) {
			var auth = "Business Insider Staff";
		}
		try {
			var title = document.querySelector("h1.post-headline").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".byline-timestamp").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Business Insider, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector("a.byline-author-name").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector("h1.post-headline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".byline-timestamp").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function huffPost () {
		try {
			var auth = document.querySelector(".author-card__link span").textContent.trim()
		} catch(err) {
			var auth = "Huffington Post Staff";
		}
		try {
			var title = document.querySelector(".headline__title").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".timestamp__date--published span").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Huffington Post, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".author-card__link span").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector(".headline__title").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".timestamp__date--published span").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}
	
	function waPo () {
		try {
			var auth = document.querySelector(".author-name").textContent.trim()
		} catch(err) {
			var auth = "Washington Post Staff";
		}
		try {
			var title = document.querySelector(".font--headline").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".display-date").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Washington Post, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".author-name").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector(".font--headline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".display-date").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function wsj () {
		try {
			var auth = document.querySelector(".author-button").textContent.trim()
		} catch(err) {
			var auth = "WSJ Staff";
		}
		try {
			var title = document.querySelector(".wsj-article-headline").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".timestamp").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Wall Street Journal, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".author-button").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector(".wsj-article-headline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".timestamp").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}
	function nbc() {
		try {
			var auth = document.querySelector(".founders-cond").textContent.trim()
		} catch(err) {
			var auth = "NBC Staff";
		}
		try {
			var title = document.querySelector(".article-hero__headline").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector("time.relative").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, NBC News, ${link}, ${today}
		
"${selection}"`
		try {
			var authStyle = document.querySelector(".founders-cond").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector(".article-hero__headline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector("time.relative").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}
	for (let i = 0; i<9; i++) {
		console.log("Content Running")
	}

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
		console.log(sender.tab ?
					"from a content script:" + sender.tab.url :
					"from the extension");
		if (request.greeting == "hello") {
			sendResponse({"cardVar":cardCompile()});
		}
		return Promise.resolve("Dummy response to keep the console quiet");
		});
	}

	window.addEventListener('DOMContentLoaded', runScript());