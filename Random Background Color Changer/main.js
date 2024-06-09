const ColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
    "#DFE9F2",
    "#daeae6",
    "#eed5d6",
    "#cef5ef",
    "#D9A404",
    "#BF7E04",
    "#8373BF",
    "#BF0436"
  ];
  
  function getRandomIndex() {
    const randomIndex = Math.floor(ColorsArr.length * Math.random());
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeColor() {
    const color = ColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");

  btn.onclick = changeColor;