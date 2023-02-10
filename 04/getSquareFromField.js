"use strict";

function getSquareFromField(width, height) {
  if (width === height) {
    return width;
  }

  return width > height
    ? getSquareFromField(width - height, height)
    : getSquareFromField(width, height - width);
}

console.log(getSquareFromField(1680, 640)); // 80
