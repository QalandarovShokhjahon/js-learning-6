"use strict";

// for → belgilangan soni bo‘yicha kodni takrorlash uchun ishlatiladi.\

// for (boshlanish; shart; qadam) {
  // Kod
// }

for (let i = 1; i <= 4; i++) {
  console.log(i);
}

//  Ichma ich sikl (Nested loog)
// let str = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 1; j++) {
//     str += "*"
//   }
//   console.log(str)
// }

// \n → matni sindirib beradi.
let str = ""

for (let i = 1; i <= 5; i++) {
  for (let k = 5; k > i; k--) {
    str += " "
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    str += "*"
  }
  str += "\n"
}
console.log(str)

let son = 3;
for (let i = 1; i <= 10; i++) {
  console.log(++son);
}

