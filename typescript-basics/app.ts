function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return n1 + n2;
	}
}

let number1: number = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);

const person: {
	name: string;
	age: number;
} = {
	name: "ABC",
	age: 30,
};

console.log(person.name);
