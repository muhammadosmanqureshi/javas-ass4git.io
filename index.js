var a = ["a","b","c","d","e"]
//============================================
// push//(last sy aik value add kryga)
// pop//(last sy aik value nikaldyga)
// shift//(start main aik value nikalna)
// unshift(start my aik valu add keryga)
// slice//(array sy value copy kerna)
// splice//(array sy value cut kerna)

//==========================================
//a.push("a")
//a.pop()
// a.shift()
// a.unshift("x")
//a.slice(1, 3)
//var b=a.slice(1,3)
//var b = a.splice(2,3)
//========================================

// a.splice(2, 0, "p","v")



// console.log(a);
// //console.log(b);
// //========================================
// for (var i = 0; i < 10; i++){

//     alert("abc")
// console.log(i)

// }


// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
0for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}