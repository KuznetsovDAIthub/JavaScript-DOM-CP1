let array = [];
for (let i = 0; i < 30; i++) {
  array[i] = Math.floor(Math.random() * 100);
}

const body = document.body;
const table = document.createElement("table");
let counter = 0;
let selector = "";

for (let i = 0; i < 6; i++) {
  let tr = document.createElement("tr");
  table.append(tr);
  for (let j = 0; j < 5; j++) {
    let td = document.createElement("td");
    td.id = "cell" + counter;
    tr.append(td);
    td.append(array[counter]);
    if (array[counter] >= 50) {
      td.classList.add("Orange");
    }
    array[counter] = counter;
    counter = counter + 1;
  }
}
let counterRow = 0;
let tr = document.createElement("tr");
table.append(tr);

function foo() {
  let number = Math.floor(Math.random() * 100);
  if (counterRow <= 4) {
    newCell(number, tr);
    counterRow = counterRow + 1;
    console.log(counterRow);
  } else {
    tr = document.createElement("tr");
    table.append(tr);
    counterRow = 1;
    newCell(number, tr);
  }
}
function newCell(number, tr) {
  let td = document.createElement("td");
  tr.append(td);
  if (number >= 50) {
    td.classList.add("Orange");
  }
  td.append(number);
}

body.prepend(table);
