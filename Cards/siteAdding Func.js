function cardCreate(auth, title, time, staff, org) {
  console.log(`try {
    var auth = document.querySelector("${auth}").textContent.trim()
} catch(err) {
    var auth = "${staff}";
}`);
  console.log(`try {
    var title = document.querySelector("${title}").textContent.trim()
} catch(err) {
    var title = document.title;
}`)
  console.log(`try {
    var time = document.querySelector("${time}").textContent.trim();
} catch(err) {
    var time = "No Time Given/Found";
}`);
  console.log("var link = window.location.href");
  console.log("var today = new Date()");
  console.log("var selection = userSelect()");
  console.log(`var card = \`\${auth}, \${time}, \${title}, ${org}, \${link}, \${today}
"\${selection}"\``);
  console.log(`try {
    var authStyle = document.querySelector("${auth}").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
} catch(err) {
  console.log(err);
}`);
  console.log(`try {
    var titleStyle = document.querySelector("${title}").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
} catch(err) {
  console.log(err);
}`);
  console.log(`try {
    var timeStyle = document.querySelector("${time}").style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
} catch(err) {
  console.log(err);
}`);


  console.log("return card\;");
}


cardCreate('.article__byline', '.article__hed', '.article__dateline', 'Slate Staff', 'Slate')
