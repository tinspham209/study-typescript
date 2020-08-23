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

const product: {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
} = {
	id: "abc1",
	price: 12.99,
	tags: ["great-offer", "hot-and-new"],
	details: {
		title: "Red Carpet",
		description: "A great carpet - almost brand-new!",
	},
};

console.log(product);

const tuplesType: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: "ABC",
	age: 30,
	hobbies: ["Sport", "Cooking"],
	role: [2, "author"],
};

console.log(person.name);
