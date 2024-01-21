const main_container = document.querySelector('.main-container');
const ul = document.querySelector('ul');
const inputText = document.getElementById('color-code');
const btnColorChanger = document.getElementById('change-bg-btn');
const colorName = document.querySelector('p#color-name');

const colores = [
  "Name",
  "IndianRed",
  "LightCoral",
  "Salmon",
  "DarkSalmon",
  "LightSalmon",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Name",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "PaleVioletRed",
  "Name",
  "LightSalmon",
  "Coral",
  "Tomato",
  "OrangeRed",
  "DarkOrange",
  "Orange",
  "Name",
  "Gold",
  "Yellow",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Khaki",
  "DarkKhaki",
  "Name",
  "Lavender",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "MediumPurple",
  "RebeccaPurple",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "DarkMagenta",
  "Purple",
  "Indigo",
  "SlateBlue",
  "DarkSlateBlue",
  "MediumSlateBlue",
  "Name",
  "GreenYellow",
  "Chartreuse",
  "LawnGreen",
  "Lime",
  "LimeGreen",
  "PaleGreen",
  "LightGreen",
  "MediumSpringGreen",
  "SpringGreen",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "YellowGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "MediumAquamarine",
  "DarkSeaGreen",
  "LightSeaGreen",
  "DarkCyan",
  "Teal",
  "Name",
  "Aqua",
  "Cyan",
  "LightCyan",
  "PaleTurquoise",
  "Aquamarine",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "CadetBlue",
  "SteelBlue",
  "LightSteelBlue",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DeepSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "MediumSlateBlue",
  "RoyalBlue",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "MidnightBlue",
  "Name",
  "Cornsilk",
  "BlanchedAlmond",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "SaddleBrown",
  "Sienna",
  "Brown",
  "Maroon",
  "Name",
  "White",
  "Snow",
  "HoneyDew",
  "MintCream",
  "Azure",
  "AliceBlue",
  "GhostWhite",
  "WhiteSmoke",
  "SeaShell",
  "Beige",
  "OldLace",
  "FloralWhite",
  "Ivory",
  "AntiqueWhite",
  "Linen",
  "LavenderBlush",
  "MistyRose",
  "Name",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "SlateGray",
  "DarkSlateGray",
  "Black"
].filter(color => color != 'Name');


  inputText.onkeyup = () => {
    main_container.style.backgroundColor = inputText.value;
    colorName.textContent = main_container.style.backgroundColor;
  }

  btnColorChanger.onclick = () => {
    inputText.value = "";
    main_container.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    colorName.textContent = main_container.style.backgroundColor;
  }

