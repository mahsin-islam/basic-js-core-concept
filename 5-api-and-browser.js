// JSON
const person = {
    name: 'Abdul',
    age: 25,
    district: 'Dhaka',
    salary: 100000
};
// JSON convert back and forth
console.log(JSON.stringify(person));
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
console.log(dataParsed.name);
// online JSON converter
// API fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

// local storage (name r value thakte pare)
// localStorage.setItem('userId', 1245);
const userId = localStorage.getItem('userId');
console.log(userId);
// localStorage.setItem('person', person);
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson.age);

const keys = Object.keys(parsedPerson);
console.log("Keys-->",keys);
const values = Object.values(parsedPerson);
console.log("Values-->",values);
