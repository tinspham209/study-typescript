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

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const enumType: {
	name: string;
	age: number;
	hobbies: string[];
	role: Role;
} = {
	name: "ABC",
	age: 30,
	hobbies: ["Sport", "Cooking"],
	role: Role.ADMIN,
};

// Union Types
function combine(input1: number | string, input2: number | string) {
	let result;
	if (typeof input1 === "number" && typeof input2 === "number") {
		result = input1 + input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("A", "B");
console.log(combinedNames);

// Literal Types
function combineLiteral(
	input1: number | string,
	input2: number | string,
	resultConversion: "as-number" | "as-text"
) {
	let result;
	if (
		(typeof input1 === "number" && typeof input2 === "number") ||
		resultConversion === "as-number"
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

const combinedStringAges = combineLiteral("30", "26", "as-number");
console.log("combinedStringAges ", combinedStringAges);

// Type Aliases / Custom Types
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combineTypeAliases(
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescriptor
) {
	let result;
	if (
		(typeof input1 === "number" && typeof input2 === "number") ||
		resultConversion === "as-number"
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

// Type Aliases & Object Types
type User = { name: string; age: number };

function greet(user: User) {
	console.log("Hi, I am " + user.name);
}
function isOlder(user: User, checkAge: number) {
	return checkAge > user.age;
}

// Function return Types & void
function addVoid(n1: number, n2: number) {
	return n1 + n2;
}

function printResultVoid(num: number): void {
	console.log("Result" + num);
}

printResultVoid(addVoid(5, 15));
