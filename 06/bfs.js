const graph = {};

graph["you"] = ["alice", "bob", "greta"];
graph["alice"] = ["tom", "bob"];
graph["bob"] = ["jes", "mack"];
graph["greta"] = ["sam"];

graph["tom"] = ["luke"];
graph["jes"] = [];
graph["mack"] = [];
graph["sam"] = ["putin"];

function search(name) {
  let searchQueue = [];
  const checkedPeople = [];

  searchQueue = searchQueue.concat(graph[name]);

  while (searchQueue.length) {
    const person = searchQueue.shift();

    if (!checkedPeople.includes(person)) {
      if (isMangoSeller(person)) {
        console.log(`${person} is mango seller`);
        return true;
      }

      searchQueue = searchQueue.concat(graph[person]);
      checkedPeople.push(person);
    }
  }

  return false;
}

function isMangoSeller(name) {
  return name[name.length - 1] === "k";
}

console.log(search("you"));
