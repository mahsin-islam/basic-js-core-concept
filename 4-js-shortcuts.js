const money = 150;
const active = true;
let food;
if(money > 100) {
    food = 'biryani';
} else {
    food = 'alur vorta';
}
// ternary:
// condition ? if true (true value) : else false (false value)
let food = money > 100 ? 'biryani' : 'alur vorta';
// if(active === true) {cssClass = 'active'} else { cssClass = 'inActive'}
const cssClass = active ? 'active' : 'inActive';
active ? displayUser() : hideUse();
//jodi true hoi
active && displayUser();
// jodi false hoi
active || displayUser();

const x = active && 5;
console.log(x);

const y = active || 5;
console.log(y);

// string to number using + sign before string
const number = +'45';
// number to string
const numText = 45 + '';
console.log(numText);

// default parameter
function add(num1, num2 = 5){
    num2 = num2 || 5;
    return num1 + num2;
}
add(45, 10);