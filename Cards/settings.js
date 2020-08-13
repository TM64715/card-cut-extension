window.onload = function () {
    const header1 = document.getElementById("settingsHeader");
    const colorBg = document.getElementById("user_bgColor");
    const color1 = document.getElementById("user_color1");
    const color2 = document.getElementById("user_color2");
    const color3 = document.getElementById("user_color3")
    const body = document.getElementById("body");
    const demoBtn = document.getElementById("dynamicBtn");
    const revertColor1 = document.getElementById("revertColor1");
    const revertColor2 = document.getElementById("revertColor2");
    const revertBg = document.getElementById("revertBg");
    const revertColor3 = document.getElementById("revertColor3");
    const labels = document.getElementsByClassName("label");
    const exTxtArea = document.getElementById("dynamicTxtArea");
    const catInput = document.getElementById('categories');
    var useBg = document.getElementsByClassName("bgColor");
    var useColor1 = document.getElementsByClassName("color1");
    var useColor2 = document.getElementsByClassName("color2");
    var useColor2Border = document.getElementsByClassName("color2Border");
    var useColor3Fill = document.getElementsByClassName("color3Fill");
    // Get Background Color
    var useColor2Fill = document.getElementsByClassName("color2Fill");
    chrome.storage.sync.get("bgColor", function (result) {
      if (result["bgColor"]){
      for (let i = 0; i < useBg.length; i++) {
        useBg[i].style.backgroundColor = result.bgColor;
      }
      colorBg.value = result.bgColor}
    });
    // Get Color1
    chrome.storage.sync.get("color1", function (result) {
      if (result["color1"]){
      color1.value = result.color1;
      for (let i = 0; i < useColor1.length; i++) {
        useColor1[i].style.color = result.color1;
      }}
    });
    // Get Color2
    chrome.storage.sync.get("color2", function (result) {
      if (result["color2"]){
      color2.value = result.color2;
      document.getElementById("house").setAttribute("fill", result.color2)
      for (let i = 0; i < useColor2.length; i++) {
        useColor2[i].style.color = result.color2;
      }
      for (let i = 0; i < useColor2Fill.length; i++) {
        useColor2Fill[i].style.backgroundColor = result.color2;
      }
      for (let i = 0; i < useColor2Border.length; i++) {
        useColor2Border[i].style.border = `3px double ${result.color2}`;
      }}
    });
    // Get Color3
    chrome.storage.sync.get("color3", function(result) {
      if (result["color3"]){
      color3.value = result.color3;
      for (let i = 0; i < useColor3Fill.length; i++) {
        useColor3Fill[i].style.backgroundColor = result.color3;
      }}
    })

    chrome.storage.local.get("catInput", function(result) {
      console.log(result);
      if (result["catInput"]) {
        console.log("is result");
        catInput.value = result["catInput"];
      }
    })
    console.log("DOM ready");
    // Background
    colorBg.addEventListener("change", function () {
      for (let i = 0; i < useBg.length; i++) {
        useBg[i].style.backgroundColor = colorBg.value;
      }
      chrome.storage.sync.set({ bgColor: colorBg.value });
    });
    // Color1
    color1.addEventListener("change", function () {
      chrome.storage.sync.set({ color1: color1.value });
      for (let i = 0; i < useColor1.length; i++) {
        useColor1[i].style.color = color1.value;
      }
    });
    // Color2
    color2.addEventListener("change", function () {
      chrome.storage.sync.set({ color2: color2.value });

      for (let i = 0; i < useColor2.length; i++) {
        useColor2[i].style.color = color2.value;
      }
      for (let i = 0; i < useColor2Fill.length; i++) {
        useColor2Fill[i].style.backgroundColor = color2.value;
      }
      for (let i = 0; i < useColor2Border; i++) {
        useColor2Border[i].style.border = `3px double ${color2.value}`;
      }
      document.getElementById("house").setAttribute("fill", color2.value)
    });

    color3.addEventListener("change", function () {
      chrome.storage.sync.set({color3: color3.value})
      for (let i = 0; i < useColor3Fill.length; i++) {
        useColor3Fill[i].style.backgroundColor = color3.value;
      }
    })
    // Categories
    var categories;
    catInput.addEventListener("change", function() {
      chrome.storage.local.set({"catInput": catInput.value})
      categories = catInput.value.split("/");
      var myObj = {}

      for (let i = 0; i < categories.length; i++) {
        var page = categories[i];
        myObj[page] = {
          inner: ""
        }
        console.log(myObj)
        chrome.storage.local.set({"pages":myObj})
      }
      console.log(categories);
      console.log("changed")
    })
    // Revert BG
  
    revertBg.addEventListener("click", function () {
      chrome.storage.sync.set({ bgColor: "#faf9f7" });
      for (let i = 0; i < useBg.length; i++) {
        useBg[i].style.backgroundColor = "#faf9f7"
      }
    });
    // Revert Color1
  
    revertColor1.addEventListener("click", function () {
      chrome.storage.sync.set({ color1: "#faf9f7" });
      for (let i = 0; i < useColor1; i++) {
        useColor1[i].style.color = "#faf9f7"
      }
    });
  
    revertColor2.addEventListener("click", function () {
      chrome.storage.sync.set({ color2: "#ff5e5e" });
      for (let i = 0; i < useColor2.length; i++) {
        useColor2[i].style.color = "#ff5e5e";
      }
      for (let i = 0; i < useColor2Fill.length; i++) {
        useColor2Fill[i].style.backgroundColor = "#ff5e5e";
      }
      for (let i = 0; i < useColor2Border.length; i++) {
        useColor2[i].style.border = `3px double #ff5e5e`;
      }
    })

    revertColor3.addEventListener("click", function() {
      chrome.storage.sync.set({color3: "#e0e0e0"});
      for (let i = 0; i < useColor3Fill.length; i++) {
        useColor3Fill[i].style.backgroundColor = "#e0e0e0";
      }
      color3.value = "e0e0e0";
    })
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
  };