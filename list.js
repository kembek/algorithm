let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function showList(list) {
  console.log(list.value);

  if (list.next) {
    return showList(list.next);
  } else {
    return;
  }
}

function printList(l) {
  let s = l;
  console.log(s.value);

  do {
    s = s.next;
    console.log(s.value);
  } while (s.next);
}

showList(list);

printList(list);
