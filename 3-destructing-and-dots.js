// array destructuring
const numbers = [44, 19, 17, 78, 69];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [54, 92];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1) {
    return [num1, num1 + 5];
}
// const boxed = boxify(8);
// console.log(boxed);
const [box1, box2] = boxify(8);
console.log(box1, box2);

// Object Destructuring
// const person = {name: 'Rahim', age: 25};
// console.log(person.name, person.age);
// console.log(person.name, person.age);
// console.log(person.name, person.age);
const {name, age} = {id: 2, money: 34, name: 'Rahim', age: 25};
console.log(name, age);
console.log(name, age);
console.log(name, age);

// create object shortcut
const one = 25;
const two = 35;
const obj = {x: x, y: y};
const obj2 = {one, two};
console.log(obj2);
// console.log(obj);

// new array using three dots
// numbers.push(56); // existing array te new element jog korte chaile
const newNumbers = [...numbers, 56]; // notun array toiri korte chaile
