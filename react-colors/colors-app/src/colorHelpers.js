import chroma from "chroma-js";

const LEVELS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  /* Make a copy of the palette
     but make 'Palette.colors' to be an empty object */
  const newPalette = {
    ...starterPalette,
    colors: {}
  };

  /* Using the object bracket notation to assign the 'Palette.colors' object
    with the corresponding 'LEVELS' */
  for (let level of LEVELS) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    const scales = getScale(color.color, 10);

    for (let scale in scales) {
      newPalette.colors[LEVELS[scale]].push({
        name: `${color.name} ${LEVELS[scale]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scales[scale],
        rgb: chroma(scales[scale]).css(),
        rgba: chroma(scales[scale]).css("rgba")
      });
    }
  }

  return newPalette;
}

/* Passing 'hexColor' and Return an array range of colors,
   starting with white and ending with the darken color of the passing 'hexColor':
   [<white(#fff)>,<passing-hex-color>,<darken-passing-hex-color>] */
function getRange(hexColor) {
  const start = "#fff";
  return [
    start,
    hexColor,
    chroma(hexColor)
      .darken(1.4)
      .hex()
  ];
}

function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

export { generatePalette };
