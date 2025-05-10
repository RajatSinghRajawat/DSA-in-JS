// let ans = Number(prompt("enter your number"))

// if (isNaN(ans)) {
//     console.log("wrong input");

// } else if (ans >= 18) {

//     console.log("you can vote");

// } else {
//     console.log("you cant vote");

// }



//amout question discouts questions 2

// let amount = Number(prompt("enter your amount"));

// if(amount>0 && amount<=5000){
//     console.log(amount);

// }
// else if(amount>5000 && amount<=7000){
//     console.log(amount - Math.floor((5*amount)/100));

// }else if(amount>7000 && amount<=9000){
//     console.log(amount - Math.floor((10*amount)/100));

// }
// else if(amount>9000 ){
//     console.log(amount - Math.floor((20*amount)/100));

// }else{
//     console.log("wrong amount");

// }


// solve in more easy way 

// let amount = Number(prompt("enter your amount"));
// let discount = 0

// if (amount > 0 && amount <= 5000) {
//     discount = 0

// }
// else if (amount > 5000 && amount <= 7000) {
//     discount = 5

// } else if (amount > 7000 && amount <= 9000) {
//     discount = 10
// }
// else if (amount > 9000) {
//     discount = 20
// } else {
//     console.log("wrong amount");

// }

// console.log(amount - Math.floor((dis * amount) / 100));



//bijali bill


let unit = Number(prompt("enter your number"));


let amount = 0;

if (unit > 400) {
    amount = (unit - 400) * 13
    unit = 400
}
if (unit > 200 && unit <= 400) {
    amount += (unit - 200) * 8
    unit = 200
}
if (unit > 100 && unit <= 200) {
    amount += (unit - 200) * 6
    unit = 200
}

amount += unit * 4  
console.log(amount);
