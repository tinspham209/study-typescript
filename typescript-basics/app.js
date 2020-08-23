function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
var person = {
    name: "ABC",
    age: 30
};
console.log(person.name);
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!"
    }
};
console.log(product);
