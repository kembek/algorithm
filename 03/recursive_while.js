const boxes = [
  createBox(),
  createBox(),
  createBox(),
  createBox(),
  createBox(),
  createBox({ hasKey: true, isBox: true }),
  createBox(),
  createBox(),
  createBox(),
];

function createBox({ hasKey = false, isBox = true } = {}) {
  return {
    hasKey,
    isBox,
  };
}

function findKey() {
  let shouldSearch = true;
  let i = 0;
  let box;
  while (shouldSearch) {
    box = boxes[i];
    if (box.hasKey) {
      shouldSearch = false;
    }

    i++;
  }

  return box;
}

findKey();
