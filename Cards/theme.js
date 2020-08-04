window.onload = function() {
    chrome.storage.sync.get("bgColor", function(result) {
        var body = document.getElementById("body");
        var bgSticky = document.getElementById("bgSticky");
        body.style.backgroundColor = result.bgColor;
        bgSticky.style.backgroundColor = result.bgColor;


    })
    chrome.storage.sync.get("color1", function(result) {
        var useColor1 = document.getElementsByClassName("color1");
        for (let i = 0; i < (useColor1.length); i++) {
            useColor1[i].style.color = result.color1
        }
    })
    chrome.storage.sync.get("color2", function(result) {
        var useColor2 = document.getElementsByClassName("color2");
        var color2Fill = document.getElementsByClassName("color2Fill");
        for (let i = 0; i < (useColor2.length); i++) {
            useColor2[i].style.color = result.color2
        }

        for (let i = 0; i < (color2Fill.length); i++) {
            color2Fill[i].style.backgroundColor = result.color2;
        }
        const bigTxtArea = document.getElementById("cardTextArea");
        bigTxtArea.style.border = `3px double ${result.color2}`;
    })  
}