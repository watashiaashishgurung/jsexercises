const person = {
    "first name": "John",
    "last name": "Doe",
age: 50,
};

// bracket notation
console.log(person["first name"]); // John
console.log(person["last name"]); // Doe
console.log(person["age"]); // 50

const propertyName = "first name";
console.log(person[propertyName]); // John

// dot notation
const students = [
    {name: "John", age: 25},
    {name: "Jane", age: 24},
    {name: "Jack", age: 27},
];

// for loop
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name, students[i].age);
}

// forEach
students.forEach(function(student) {
    console.log(student.name, student.age);
    
});
// push method

students.push({name: "Jake", age: 26});
console.log(students);


// pop method
// removes the last element from an array and returns it
students.pop();
console.log(students);

//shift method
// removes the first element from an array and returns it
students.shift();
console.log(students);



const students2 = [
    {name: "John", age: 25},
    {name: "Jane", age: 24},
    {name: "Jack", age: 27},
    {name: "Jake", age: 26},
    {name: "Jill", age: 23},
    {name: "James", age: 22},
];

//filter method
const filteredStudents = students2.filter(student => student.age > 24);
console.log('using filter method');
console.log(filteredStudents); // students that are older than 24

//map method
const adults = students2.map(student => student.name);
console.log('using map method');
console.log(adults); // all adults students


//searching for an element in an array using find method
const student = students2.find(student => student.name === "Jack");
console.log('using find method');
console.log(student); // Jack

