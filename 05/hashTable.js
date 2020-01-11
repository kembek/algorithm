const table = {};

function hash(name, value) {
  if (!table[name]) {
    table[name] = value;
    return;
  }

  return table[name];
}

function hashLength() {
  return Object.keys(table).length;
}

console.log("Save...");
hash("banana", 5);
hash("apple", 3);
hash("strawberry", 6);
console.log("Save...Done!");

console.log("Banana", hash("banana"));
console.log("Length", hashLength());
