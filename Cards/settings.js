window.onload = function () {
    const header1 = document.getElementById("settingsHeader");
    const colorBg = document.getElementById("user_bgColor");
    const color1 = document.getElementById("user_color1");
    const color2 = document.getElementById("user_color2");
    const body = document.getElementById("body");
    const demoBtn = document.getElementById("dynamicBtn");
    const revertColor1 = document.getElementById("revertColor1");
    const revertColor2 = document.getElementById("revertColor2");
    const revertBg = document.getElementById("revertBg");
    const goBack = document.getElementById("goBack");
    const labels = document.getElementsByClassName("label");
    const exTxtArea = document.getElementById("dynamicTxtArea");
    chrome.storage.sync.get("bgColor", function (result) {
      colorBg.value = result.bgColor;
      body.style.backgroundColor = result.bgColor;
      console.log("bg retrieved is " + result.bgColor);
    });
  
    chrome.storage.sync.get("color1", function (result) {
      color1.value = result.color1;
      demoBtn.style.color = result.color1;
      for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = result.color1;
      }
      console.log("color1 retrieved is " + result.color1);
    });
  
    chrome.storage.sync.get("color2", function (result) {
      color2.value = result.color2;
      demoBtn.style.backgroundColor = result.color2;
      header1.style.color = result.color2;
      console.log("color2 retrieved is " + result.color2);
      for (let i = 0; i < labels.length; i++) {
        labels[i].style.backgroundColor = result.color2;
      }
      goBack.style.color = result.color2;
      exTxtArea.style.border = `3px double ${result.color2}`;
    });
  
    console.log("DOM ready");
    // Background
    colorBg.addEventListener("change", function () {
      body.style.backgroundColor = colorBg.value;
      chrome.storage.sync.set({ bgColor: colorBg.value });
      console.log("bg is set to " + colorBg.value);
    });
    // Color1
    color1.addEventListener("change", function () {
      chrome.storage.sync.set({ color1: color1.value }, function () {
        console.log("color1 is set to: " + color1.value);
      });
      demoBtn.style.color = color1.value;
      for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = color1.value;
      }
    });
    // Color2
    color2.addEventListener("change", function () {
      chrome.storage.sync.set({ color2: color2.value }, function () {
        console.log("color2 is set to: " + color2.value);
      });
      demoBtn.style.backgroundColor = color2.value;
      header1.style.color = color2.value;
      goBack.style.color = color2.value;
      for (let i = 0; i < labels.length; i++) {
        labels[i].style.backgroundColor = color2.value;
      }
  
      exTxtArea.style.border = `3px double ${color2.value}`;
    });
    // Revert BG
  
    revertBg.addEventListener("click", function () {
      chrome.storage.sync.set({ bgColor: "#faf9f7" });
      body.style.backgroundColor = "#faf9f7";
      colorBg.value = "#faf9f7";
    });
    // Revert Color1
  
    revertColor1.addEventListener("click", function () {
      chrome.storage.sync.set({ color1: "#faf9f7" });
      demoBtn.style.color = "#faf9f7";
      color1.value = "#faf9f7";
      revertColor1.style.color = color1.value;
      revertColor2.style.color = color1.value;
      revertBg.style.color = color1.value;
    });
  
    revertColor2.addEventListener("click", function () {
      chrome.storage.sync.set({ color2: "#ff5e5e" });
      demoBtn.style.backgroundColor = "#ff5e5e";
      color2.value = "#ff5e5e";
      header1.style.color = "#ff5e5e";
      revertColor1.style.backgroundColor = color2.value;
      revertColor2.style.backgroundColor = color2.value;
      revertBg.style.backgroundColor = color2.value;
      goBack.style.color = color2.value;
    });
  };