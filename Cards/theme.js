document.addEventListener("DOMContentLoaded", function () {
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

            select.style.border = `.5px solid ${result.color1}`;
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
        const bigTxtArea = document.getElementById("cardTextArea");
        select.style.backgroundColor = result.color2;
        bigTxtArea.style.border = `3px double ${result.color2}`;
    })  
})