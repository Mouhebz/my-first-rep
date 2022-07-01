let counterEl = document.getElementById("counter")
let counterElG = document.getElementById("counterG")
let counter = 0
let counterG = 0

function addOne() {
  counter += 1
  counterEl.textContent = counter
}

function addtwo() {
  counter += 2
  counterEl.textContent = counter
}

function addthree() {
  counter += 3
  counterEl.textContent = counter
}

function addOneG() {
  counterG += 1
  counterElG.textContent = counterG
}

function addtwoG() {
  counterG += 2
  counterElG.textContent = counterG
}

function addthreeG() {
  counterG += 3
  counterElG.textContent = counterG
}

function newGame() {
  counter = 0
  counterElG.textContent = counter
  counterG = 0
  counterEl.textContent = counterG
}

function winner() {
  if (counter > counterG) {
    counterEL.style.color = 'Green';
  }
  else if (counterG > counter) {
    counterElG.style.color = 'Green';
  }
}

