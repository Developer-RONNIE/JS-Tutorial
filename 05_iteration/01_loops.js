// ++++++++++++ For Loop ++++++++++++

/**  Syntax : 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

Here, in for loop if we see carefully, we can notice few things
1. let index = 0;                  is initialization of variable index 
2. index < array.length;           is an comaprision statement 
3. const element = array[index]    declaration of element variable  
4. {}                              is a scope 
5. index++                         increment operator 
*/

// CaseStudy #1 : simple for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    // Using an conditional statement 
    if (element == 5){
        // console.log("5 is my lucky number")
    }
    // console.log(element);
    
}

// +++++++++++++++++++++ NESTED LOOPS +++++++++++++++++++++

// CaseStudy #2 : outer & inner loop concept 
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i}`);
    for (let j = 0; j <=10 ; j++) {
        // console.log(`Inner Loop Value ${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} = ${(i*j)}`); 
        
    }
    
}

// CaseStudy #3 : Loops in array 
let myArray = ["Spiderman", "Ironman", "Hulk"]
// console.log (myArray.length); //output : 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// CaseStudy #4: break statement 
for (let index = 1; index <=10; index++) {
    if(index ==5)
    {
        // console.log(`Detected 5`);
        break
    }
    // console.log(`Value of i in ${index}`);
    
}

// CaseStudy #5: continue (skips one)
for (let index = 1; index <=10; index++) {
    if(index ==5)
    {
        // console.log(`Detected 5`);
        continue
    }
    // console.log(`Value of i in ${index}`); // output: 1, 2, 3, 4, 6, 7, 8, 9, 10
    
}