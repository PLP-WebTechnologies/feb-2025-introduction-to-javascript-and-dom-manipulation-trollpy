function changeText() {
    const desc = document.getElementById("description");
    desc.textContent = "✅ The text has been changed dynamically!";
    desc.style.color = "blue";
    desc.style.fontSize = "1.5rem";
    desc.style.fontFamily = "Arial, sans-serif";
    desc.style.textAlign = "center";
    desc.style.background = "linear-gradient(to right,rgb(112, 112, 112),rgb(226, 222, 222))";
    desc.style.padding = "10px";
    desc.style.borderRadius = "5px";
    desc.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    desc.style.width = "100%";
  }
  
  function changeStyle() {
    const heading = document.getElementById("main-heading");
    heading.style.color = "coral";
    heading.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
    heading.style.fontSize = "2.5rem";
    heading.style.textTransform = "uppercase";
    heading.style.fontFamily = "Arial, sans-serif";
    heading.style.background = "linear-gradient(to right,rgb(226, 222, 222),rgb(112, 112, 112))";
    heading.style.padding = "10px";
    heading.style.borderRadius = "5px";
    heading.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    heading.style.width = "100%";
    heading.style.textAlign = "center";
    heading.style.margin = "0 auto";
    
  }
  
  function toggleBox() {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("surprise-box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement("div");
      box.id = "surprise-box";
      container.appendChild(box);
        box.style.width = "200px";
        box.style.height = "200px";
        box.style.backgroundColor = "#2196F3";
        box.style.borderRadius = "10px";
        box.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        ;
    }
  }
