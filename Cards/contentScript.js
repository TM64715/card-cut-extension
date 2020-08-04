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
		var guardianReg = /theguardian/gi;
		var bloombergReg = /bloomberg\.com/gi;
		var forbesReg = /forbes\.com/gi;
		var atlanticReg = /theatlantic\.com/gi;
		var usaTodayReg = /usatoday\.com/gi;
		var financialTimesReg = /ft\.com/gi;
		var wiredReg = /wired\.com/gi;
		var politicoReg = /politico\.com/gi;

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
		else if (guardianReg.test(link)) {
			card = guardian();
		} 
		else if (bloombergReg.test(link)) {
			card = bloomberg();
		}
		else if (forbesReg.test(link)) {
			card = forbes();
		}
		else if (atlanticReg.test(link)) {
			card = atlantic();
		}
		else if (usaTodayReg.test(link)) {
			card = usaToday();
		}
		else if (financialTimesReg.test(link)) {
			card = financialTimes();
		}
		else if (wiredReg.test(link)) {
			card = wired();
		}
		else if (politicoReg.test(link)) {
			card = politico();
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
			var auth = document.querySelector("[data-test = 'byline']").textContent.trim()
		} catch(err) {
			var auth = "Bloomberg Staff";
		}
		try {
			var title = document.querySelector("[data-test = 'article-hero__headline']").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector("[data-test = 'timestamp__datePublished']").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Bloomberg, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector("[data-test = 'byline']").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector("[data-test = 'article-hero__headline']").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector("[data-test = 'timestamp__datePublished']").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function guardian () {
		try {
			var auth = document.querySelector(".css-1rv9jci").textContent.trim()
		} catch(err) {
			var auth = "Guardian Staff";
		}
		try {
			var title = document.querySelector("h1.css-rtdfvn").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".css-1kkxezg").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, The Guardian, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".css-1rv9jci").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector("h1.css-rtdfvn").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".css-1kkxezg").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function bloomberg () {
		try {
			var auth = document.querySelector("a.author-v2__byline").textContent.trim()
		} catch(err) {
			var auth = "Bloomberg Staff";
		}
		try {
			var title = document.querySelector("h1.lede-text-v2__hed").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector("time.article-timestamp").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Bloomberg News, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector("a.author-v2__byline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector("h1.lede-text-v2__hed").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector("time.article-timestamp").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function forbes () {
		try {
			var auth = document.querySelector(".contrib-link--name").textContent.trim()
		} catch(err) {
			var auth = "Forbes Staff";
		}
		try {
			var title = document.querySelector(".fs-headline").textContent.trim()
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
		var card = `${auth}, ${time}, ${title}, Forbes, ${link}, ${today}
"${selection}"`
		try {
			var authStyle = document.querySelector(".contrib-link--name").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector(".fs-headline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
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

	function atlantic () {
		try {
			var auth = document.querySelector(".c-article-author__link").textContent.trim()
		} catch(err) {
			var auth = "Atlantic Staff";
		}
		try {
			var title = document.querySelector(".c-article-header__hed").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector("time.c-dateline").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Atlantic, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".c-article-author__link").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector(".c-article-header__hed").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector("time.c-dateline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function usaToday () {
		try {
			var auth = document.querySelector(".gnt_ar_by_a").textContent.trim()
		} catch(err) {
			var auth = "USA Today Staff";
		}
		try {
			var title = document.querySelector("h1.gnt_ar_hl").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".gnt_ar_dt").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, USA Today, ${link}, ${today}
		
"${selection}"`
		try {
			var authStyle = document.querySelector(".gnt_ar_by_a").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector("h1.gnt_ar_hl").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".gnt_ar_dt").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function financialTimes () {
		try {
			var auth = document.querySelector(".n-content-tag--author").textContent.trim()
		} catch(err) {
			var auth = "Financial Times Staff";
		}
		try {
			var title = document.querySelector("h1.topper__headline").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".article-info__timestamp").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Financial Times, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".n-content-tag--author").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector("h1.topper__headline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".article-info__timestamp").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function wired () {
		try {
			var auth = document.querySelector(".byline__name").textContent.trim()
		} catch(err) {
			var auth = "WIRED Staff";
		}
		try {
			var title = document.querySelector("h1.content-header__hed").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".content-header__publish-date").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, WIRED, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".byline__name").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector("h1.content-header__hed").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".content-header__publish-date").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		return card;
	}

	function politico () {
		try {
			var auth = document.querySelector(".story-meta__authors").textContent.trim()
		} catch(err) {
			var auth = "Politico Staff";
		}
		try {
			var title = document.querySelector(".headline").textContent.trim()
		} catch(err) {
			var title = document.title;
		}
		try {
			var time = document.querySelector(".story-meta__timestamp").textContent.trim();
		} catch(err) {
			var time = "No Time Given/Found";
		}
		var link = window.location.href
		var today = new Date()
		var selection = userSelect()
		var card = `${auth}, ${time}, ${title}, Politico, ${link}, ${today}

"${selection}"`
		try {
			var authStyle = document.querySelector(".story-meta__authors").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var titleStyle = document.querySelector(".headline").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
		} catch(err) {
		  console.log(err);
		}
		try {
			var timeStyle = document.querySelector(".story-meta__timestamp").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
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
			sendResponse({"cardVar": cardCompile()});
		}
		return Promise.resolve("Dummy response to keep the console quiet");
		});
			
	}

window.addEventListener('DOMContentLoaded', runScript());

