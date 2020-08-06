// AuthorName/Date/ArticleTitle/Organization/Author'sCredentials/URL/DateAcessed
function runScript() {
	var card;
	var link = window.location.href;
	var domainName = document.domain;
	var splitted = domainName.split('.');
	var website;
	if (splitted.length == 2) {
		website = splitted[0];
	}
	else if (splitted.length == 3) {
		website = splitted[1]
	}
	else if (splitted.length == 4) {
		website = splitted[2];
	}
	function cardCompile() {
	  // If statements for sites

	switch (website) {
		case "nytimes":
			card = nyTimes()
			console.log("nyTimes called")
			break;
		case "cnbc":
			card = cnbc();
			console.log("cnbc called");
			break;
		case "vox":
			card = vox();
			console.log("vox called")
			break;
		case "reuters":
			card = reuters();
			console.log("reuters called")
			break;
		case "businessinsider":
			card = busInsider();
			console.log("busInsider called")
			break;
		case "huffpost":
			card = huffPost();
			console.log("huffPost called")
			break;
		case "washingtonpost":
			card = waPo()
			console.log("wapo called");
			break;
		case "wsj":
			card = wsj();
			console.log("wsj called");
			break;
		case "nbcnews":
			card = nbc();
			console.log("nbc called");
			break;
		case "theguardian":
			card = guardian();
			console.log("theguardian called")
			break;
		case "bloomberg":
			card = bloomberg();
			console.log("bloomberg called")
			break;
		case "forbes":
			card = forbes();
			console.log("forbes called")
			break;
		case "theatlantic":
			card = atlantic();
			console.log("theatlantic called")
			break;
		case "usatoday":
			card = usaToday();
			console.log("usatoday called")
			break;
		case "ft":
			card = financialTimes();
			console.log("ft called")
			break;
		case "wired":
			card = wired();
			console.log("wired called")
			break;
		case "politico":
			card = politico();
			console.log("politico called")
			break;
		case "slate":
			card = slate();
			console.log("slate called")
			break;
		case "qz":
			card = quartz();
			console.log("qz called")
			break;
		case "cnn":
			card = cnn();
			console.log("cnn called")
			break;
		case "bbc":
			card = bbc();
			console.log("bbc called")
			break;
		case "npr":
			card = npr();
			console.log("npr called")
			break;
		case "scmp":
			card = scmp();
			console.log("scmp called")
			break;
		case "thediplomat":
			card = diplomat();
			console.log("thediplomat called")
			break;
		default:
			card = metaScrape();
			console.log("metaScrape Called");
			break;
	}
  
	  // chrome.runtime.sendMessage({"cardVar": card});
	  console.log("Card Compile is running");
	  console.log(card);
	  return card;
	}
  
	function userSelect() {
	  var selected = window.getSelection().toString();
	  return selected;
	}
  
	function nyTimes() {
	  try {
		var auth = document.querySelector(".last-byline").textContent.trim();
	  } catch (err) {
		var auth = "NYT Staff";
	  }
	  try {
		var title = document.querySelector("h1.e1h9rw200").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector("time").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, New York Times, ${link}, ${today}
  
  "${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".last-byline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.e1h9rw200"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector("time").style.backgroundColor =
		  "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function cnbc() {
	  try {
		var auth = document
		  .querySelector(".Author-authorName")
		  .textContent.trim();
	  } catch (err) {
		var auth = "CNBC Staff";
	  }
	  try {
		var title = document
		  .querySelector(".ArticleHeader-headline")
		  .textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document
		  .querySelector('time[data-testid="published-timestamp"]')
		  .textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, CNBC, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".Author-authorName"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".ArticleHeader-headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  'time[data-testid="published-timestamp"]'
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function vox() {
	  try {
		var auth = document
		  .querySelector("span.c-byline__author-name")
		  .textContent.trim();
	  } catch (err) {
		var auth = "Vox Staff";
	  }
	  try {
		var title = document.querySelector(".c-page-title").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector("time").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Vox, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  "span.c-byline__author-name"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".c-page-title"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector("time").style.backgroundColor =
		  "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function reuters() {
	  try {
		var auth = document.querySelector(".BylineBar_byline").textContent.trim();
	  } catch (err) {
		var auth = "Reuters Staff";
		console.log(err);
	  }
	  try {
		var title = document
		  .querySelector("h1.ArticleHeader_headline")
		  .textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document
		  .querySelector(".ArticleHeader_date")
		  .textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Reuters, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".BylineBar_byline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.ArticleHeader_headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".ArticleHeader_date"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function busInsider() {
	  try {
		var auth = document
		  .querySelector("a.byline-author-name")
		  .textContent.trim();
	  } catch (err) {
		var auth = "Business Insider Staff";
	  }
	  try {
		var title = document.querySelector("h1.post-headline").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector(".byline-timestamp").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Business Insider, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  "a.byline-author-name"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.post-headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".byline-timestamp"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function huffPost() {
	  try {
		var auth = document
		  .querySelector(".author-card__link span")
		  .textContent.trim();
	  } catch (err) {
		var auth = "Huffington Post Staff";
	  }
	  try {
		var title = document.querySelector(".headline__title").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document
		  .querySelector(".timestamp__date--published span")
		  .textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Huffington Post, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".author-card__link span"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".headline__title"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".timestamp__date--published span"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function waPo() {
	  try {
		var auth = document.querySelector(".author-name").textContent.trim();
	  } catch (err) {
		var auth = "Washington Post Staff";
	  }
	  try {
		var title = document.querySelector(".font--headline").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector(".display-date").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Washington Post, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".author-name"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".font--headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".display-date"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function wsj() {
	  try {
		var auth = document.querySelector(".author-button").textContent.trim();
	  } catch (err) {
		var auth = "WSJ Staff";
	  }
	  try {
		var title = document
		  .querySelector(".wsj-article-headline")
		  .textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector(".timestamp").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Wall Street Journal, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".author-button"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".wsj-article-headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".timestamp"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
	function nbc() {
	  try {
		var auth = document
		  .querySelector("[data-test = 'byline']")
		  .textContent.trim();
	  } catch (err) {
		var auth = "Bloomberg Staff";
	  }
	  try {
		var title = document
		  .querySelector("[data-test = 'article-hero__headline']")
		  .textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document
		  .querySelector("[data-test = 'timestamp__datePublished']")
		  .textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Bloomberg, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  "[data-test = 'byline']"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "[data-test = 'article-hero__headline']"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  "[data-test = 'timestamp__datePublished']"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function guardian() {
	  try {
		var auth = document.querySelector(".css-1rv9jci").textContent.trim();
	  } catch (err) {
		var auth = "Guardian Staff";
	  }
	  try {
		var title = document.querySelector("h1.css-rtdfvn").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector(".css-1kkxezg").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, The Guardian, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".css-1rv9jci"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.css-rtdfvn"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".css-1kkxezg"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function bloomberg() {
	  try {
		var auth = document
		  .querySelector("a.author-v2__byline")
		  .textContent.trim();
	  } catch (err) {
		var auth = "Bloomberg Staff";
	  }
	  try {
		var title = document
		  .querySelector("h1.lede-text-v2__hed")
		  .textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document
		  .querySelector("time.article-timestamp")
		  .textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Bloomberg News, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  "a.author-v2__byline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.lede-text-v2__hed"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  "time.article-timestamp"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function forbes() {
	  try {
		var auth = document
		  .querySelector(".contrib-link--name")
		  .textContent.trim();
	  } catch (err) {
		var auth = "Forbes Staff";
	  }
	  try {
		var title = document.querySelector(".fs-headline").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector("time").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Forbes, ${link}, ${today}
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".contrib-link--name"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".fs-headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector("time").style.backgroundColor =
		  "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function atlantic() {
	  try {
		var auth = document
		  .querySelector(".c-article-author__link")
		  .textContent.trim();
	  } catch (err) {
		var auth = "Atlantic Staff";
	  }
	  try {
		var title = document
		  .querySelector(".c-article-header__hed")
		  .textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector("time.c-dateline").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Atlantic, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".c-article-author__link"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".c-article-header__hed"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  "time.c-dateline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function usaToday() {
	  try {
		var auth = document.querySelector(".gnt_ar_by_a").textContent.trim();
	  } catch (err) {
		var auth = "USA Today Staff";
	  }
	  try {
		var title = document.querySelector("h1.gnt_ar_hl").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector(".gnt_ar_dt").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, USA Today, ${link}, ${today}
		  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".gnt_ar_by_a"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.gnt_ar_hl"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".gnt_ar_dt"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function financialTimes() {
	  try {
		var auth = document
		  .querySelector(".n-content-tag--author")
		  .textContent.trim();
	  } catch (err) {
		var auth = "Financial Times Staff";
	  }
	  try {
		var title = document
		  .querySelector("h1.topper__headline")
		  .textContent.trim();
	  } 
	  catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document
		  .querySelector(".article-info__timestamp")
		  .textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Financial Times, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".n-content-tag--author"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.topper__headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".article-info__timestamp"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function wired() {
	  try {
		var auth = document.querySelector(".byline__name").textContent.trim();
	  } catch (err) {
		var auth = "WIRED Staff";
	  }
	  try {
		var title = document
		  .querySelector("h1.content-header__hed")
		  .textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document
		  .querySelector(".content-header__publish-date")
		  .textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, WIRED, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".byline__name"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.content-header__hed"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".content-header__publish-date"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function politico() {
	  try {
		var auth = document
		  .querySelector(".story-meta__authors")
		  .textContent.trim();
	  } catch (err) {
		var auth = "Politico Staff";
	  }
	  try {
		var title = document.querySelector(".headline").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document
		  .querySelector(".story-meta__timestamp")
		  .textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Politico, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".story-meta__authors"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".story-meta__timestamp"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
	for (let i = 0; i < 9; i++) {
	  console.log("Content Running");
	}
  
	function slate() {
	  try {
		var auth = document.querySelector(".article__byline").textContent.trim();
	  } catch (err) {
		var auth = "Slate Staff";
	  }
	  try {
		var title = document.querySelector(".article__hed").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document
		  .querySelector(".article__dateline")
		  .textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Slate, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".article__byline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".article__hed"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".article__dateline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function quartz() {
	  try {
		var auth = document.querySelector(".a517e").textContent.trim();
	  } catch (err) {
		var auth = "Quartz Staff";
	  }
	  try {
		var title = document
		  .querySelector("h1.context-article")
		  .textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector(".febc7").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, Quartz, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(".a517e").style.backgroundColor =
		  "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.context-article"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(".febc7").style.backgroundColor =
		  "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function cnn() {
	  try {
		var auth = document
		  .querySelector(".metadata__byline__author")
		  .textContent.trim();
	  } catch (err) {
		var auth = "CNN Staff";
	  }
	  try {
		var title = document.querySelector(".pg-headline").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector(".update-time").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, CNN, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".metadata__byline__author"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".pg-headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".update-time"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function bbc() {
	  try {
		var auth = document.querySelector(".byline__name").textContent.trim();
	  } catch (err) {
		var auth = "BBC Staff";
	  }
	  try {
		var title = document
		  .querySelector("h1.story-body__h1")
		  .textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector(".date").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, BBC, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".byline__name"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.story-body__h1"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(".date").style.backgroundColor =
		  "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function npr() {
	  try {
		var auth = document.querySelector(".byline").textContent.trim();
	  } catch (err) {
		var auth = "NPR Staff";
	  }
	  try {
		var title = document.querySelector(".storytitle").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector("time").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, NPR, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(".byline").style.backgroundColor =
		  "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  ".storytitle"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector("time").style.backgroundColor =
		  "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function scmp() {
	  try {
		var auth = document
		  .querySelector(".article-author__name-link")
		  .textContent.trim();
	  } catch (err) {
			try {var allAuth = document.querySelectorAll("meta[name = 'author'], meta[name = 'og:author'], meta[name = 'article:author'], meta[name = 'byl'], [property = 'author'], [property = 'og:author'], [property = 'article:author'], meta[name = 'DCSext.author'], meta[itemprop = 'author'], meta[itemprop = 'og:author'], meta[itemprop = 'article:author'], meta[itemprop = 'byl']")
			var auth
			for (let i = 0; i< allAuth.length; i++) {
				if (allAuth[i]) {
					auth = allAuth[i].getAttribute("content");
				}
			}} catch(err) {
				auth = "SCMP Staff"
			}
	  }
	  try {
		var title = document.querySelector("h1.headline").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector("time").textContent.trim();
	  } catch (err) {
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, South China Morning Post, ${link}, ${today}
  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".article-author__name-link"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.querySelector(
		  "h1.headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector("time").style.backgroundColor =
		  "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}
  
	function diplomat() {
	  try {
		var auth = document.querySelector(".td-author").textContent.trim();
	  } catch (err) {
		var auth = "The Diplomat Staff";
	  }
	  try {
		var title = document.getElementById("#td-headline").textContent.trim();
	  } catch (err) {
		var title = document.title;
	  }
	  try {
		var time = document.querySelector(".td-date").textContent.trim();
	  } catch (err) {
		var time = "No Time Given/Found";
	  }
	  var link = window.location.href;
	  var today = new Date();
	  var selection = userSelect();
	  var card = `${auth}, ${time}, ${title}, The Diplomat, ${link}, ${today}
	  
"${selection}"`;
	  try {
		var authStyle = (document.querySelector(
		  ".td-author"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var titleStyle = (document.getElementById(
		  "#td-headline"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  try {
		var timeStyle = (document.querySelector(
		  ".td-date"
		).style.backgroundColor = "rgba(107, 240, 255, 0.53)");
	  } catch (err) {
		console.log(err);
	  }
	  return card;
	}

	function metaScrape () {
		var link = window.location.href;
		var today = new Date();
		var selection = userSelect();
		var title = document.title;
		var allAuth = document.querySelectorAll("meta[name = 'author'], meta[name = 'og:author'], meta[name = 'article:author'], meta[name = 'byl'], [property = 'author'], [property = 'og:author'], [property = 'article:author'], meta[name = 'DCSext.author'], meta[itemprop = 'author'], meta[itemprop = 'og:author'], meta[itemprop = 'article:author'], meta[itemprop = 'byl']")
		var auth
		if (allAuth){
			for (let i = 0; i< allAuth.length; i++) {
				if (allAuth[i]) {
					auth = allAuth[i].getAttribute("content");
				}
			}
		} else {
			auth = "Author Not Found"
		}
		var allTime = document.querySelectorAll('meta[property = "article:modified"], meta[property="article:published"], meta[name="article:published"], meta[name="article:updated"], [itemprop="dateCreated"], [itemprop="dateModified"], [name="dateModified"], [name="dateCreated"], meta[property = "article:modified"], meta[itemprop="article:published"], meta[itemprop="article:published"], meta[itemprop="article:updated"], meta[property="article:published"], meta[property="article:published"], meta[property="article:updated"]')
		var time;
		if (allTime) {
			for (let i = 0; i< allTime.length; i++) {
				if (allTime[i]) {
					time = allTime[i].getAttribute("content");
				}
			}
		} else {
			time = "Time Not Found";
		}

		card =  `${auth}, ${time}, ${title}, ${link}, ${today}
  
"${selection}"`;
		console.log(card);
		return card;
		
	}
  
	chrome.runtime.onMessage.addListener(function (
	  request,
	  sender,
	  sendResponse
	) {
	  console.log(
		sender.tab
		  ? "from a content script:" + sender.tab.url
		  : "from the extension"
	  );
	  if (request.greeting == "hello") {
		sendResponse({ cardVar: cardCompile() });
	  }
	  return Promise.resolve("Dummy response to keep the console quiet");
	});
  }
  
  window.addEventListener("DOMContentLoaded", runScript());
  