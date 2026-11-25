//1
const cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];

let visaCount = 0;
for (let four = 0; four < cards.length; four++) {
  if (cards[four][0] === "4") {
    visaCount++;
  }
}
console.log(`Card VISA ${visaCount} из ${cards.length}`);


//2
const inns = ["01212201212345", "11212201212345", "21212201212345", "11212201212345", "11212201212345", "01212201212345", "21212201212345"];

let companies = 0;
let women = 0;
let men = 0;

for (let i = 0; i < inns.length; i++) {
  const first = inns[i][0];
  if (first === "0") {
    companies++;
  } else if (first === "1") {
    women++;
  } else if (first === "2") {
    men++;
  }
}
console.log(`Женщин: ${women}, мужчин: ${men}, компаний: ${companies}`);


//3
const numbers = [0, 3, 0, 12, 5, 0, 1];
const result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== 0) {
    result.push(numbers[i]);
  }
}
console.log(result);
