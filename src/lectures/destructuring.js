var person = {
    firstName: "Allan",
    lastName: "Smith",
    age: 50,
    eyeColor: "blue"
};

const {firstName, age} = person
console.log(firstName)
console.log(person.age)


var [a,b] = [1,2]
console.log(a)

var [head,...tail] = [1,2,3,4,5]
console.log(head)
console.log(...tail)


var [,,c] = [1,2,3]
console.log(c)