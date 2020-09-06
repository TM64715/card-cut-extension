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
    let root = document.documentElement;
    chrome.storage.sync.get("bgColor", function (result) {
      if (result["bgColor"]){
        var newStyle = document.createElement('style');
        newStyle.innerHTML = `
        :root {
          --background-color: ${result.bgColor};
        }
        `
        body.appendChild(newStyle);
    }
    });
    // Get Color1
    chrome.storage.sync.get("color1", function (result) {
      root.style.setProperty("--main-text-color", result.color1);
    });
    // Get Color2
    chrome.storage.sync.get("color2", function (result) {
      root.style.setProperty("--heading-color", result.color2);
    });
    // Get Color3
    chrome.storage.sync.get("color3", function(result) {
      root.style.setProperty("--accent-color", result.color3);
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
      root.style.setProperty("--background-color", colorBg.value);
      chrome.storage.sync.set({ bgColor: colorBg.value });
    });
    // Color1
    color1.addEventListener("change", function () {
      chrome.storage.sync.set({ color1: color1.value });
      root.style.setProperty("--main-text-color", color1.value);
    });
    // Color2
    color2.addEventListener("change", function () {
      chrome.storage.sync.set({ color2: color2.value });
      root.style.setProperty("--heading-color", color2.value);
    });

    color3.addEventListener("change", function () {
      chrome.storage.sync.set({color3: color3.value})
      root.style.setProperty("--accent-color", color3.value);
    })
    // Categories
    var categories;
    catInput.addEventListener("change", function() {
      chrome.storage.local.set({"catInput": catInput.value})
      categories = catInput.value.split("/");
      var myObj = {}
      categories = categories.reverse();
      var cycleArrCat = []
      categories.forEach(item => {
        cycleArrCat.push(item.trim());
      })
      categories = cycleArrCat;
      console.log(categories)
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
      chrome.storage.sync.set({ bgColor: "#86CCCC" });
      root.style.setProperty("--background-color", "#86CCCC");
    });
    // Revert Color1
  
    revertColor1.addEventListener("click", function () {
      chrome.storage.sync.set({ color1: "#707070" });
      root.style.setProperty("--main-text-color", "#707070");
    });
  
    revertColor2.addEventListener("click", function () {
      chrome.storage.sync.set({ color2: "#FFFFFF" });
      root.style.setProperty("--heading-color", "#FFFFFF");
    })

    revertColor3.addEventListener("click", function() {
      chrome.storage.sync.set({color3: "#00FFB1"});
      root.style.setProperty("--accent-color", "#00FFB1");
    })

    
  };