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
var tuplesType = {
    name: "ABC",
    age: 30,
    hobbies: ["Sport", "Cooking"],
    role: [2, "author"]
};
console.log(person.name);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var enumType = {
    name: "ABC",
    age: 30,
    hobbies: ["Sport", "Cooking"],
    role: Role.ADMIN
};
