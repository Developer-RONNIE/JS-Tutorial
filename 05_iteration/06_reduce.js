// ++++++++++++++++++++ Reduce ++++++++++++++++++++
// Syntax : 
//  array.reduce((accumlator, currentValue) => accumulator + currentValue, initialValue);
// at first iteration the initial value would be put into accumulator then fromt he next iteration the operation value will be put into accumulator 
//  let's see with example 

const myNums = [1, 2, 3, 4, 5]

const myTotal = myNums.reduce( (accumulator, currentValue ) => {
    // console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}` );
    return accumulator + currentValue
}, 0)

// console.log(myTotal);


// -------------------------------------------------------------------------------
// Real World example 

const shoppingCart = [
    {
        courseName : 'js course ',
        price : 2999
    },
    {
        courseName : 'python course ',
        price : 999
    },
    {
        courseName : 'android dev course ',
        price : 5999
    },
    {
        courseName : 'data science course ',
        price : 14999
    },
]

const priceTOPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price},0)

console.log(priceTOPay);