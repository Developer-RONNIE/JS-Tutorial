/* 
JavaScript  Date objects represent a single moment in time in a platform independent format. 
Date Objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC(the epoch)
The ECMA organization in which TC39 is working on Temporal a new Date/Time API which in under progress( for now it's just an proposal)
*/

let myDate = new Date()
console.log(myDate);                        // expected output: 2023-10-22T12:40:19.740Z (not readable)
console.log(myDate.toString());             // expected output: Sun Oct 22 2023 18:10:19 GMT+0530 (Coordinated Universal Time)
console.log(myDate.toDateString());         // output: Sun Oct 22 2023
console.log(myDate.toISOString());          // output: 2023-10-22T12:40:19.740Z
console.log(myDate.toJSON());               // output: 2023-10-22T12:40:19.740Z
console.log(myDate.toLocaleDateString());   // output: 10/22/2023
console.log(myDate.toLocaleString());       // output: 10/22/2023, 6:10:19 PM
console.log(myDate.toLocaleTimeString());   // output: 6:10:19 PM
console.log(myDate.toTimeString());         // output: 18:10:19 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());          // output: Sun, 22 Oct 2023 12:40:19 GMT
console.log(myDate.getTimezoneOffset());    // output: -330

console.log(typeof myDate);  //output: object


myCreateDate = new Date(2023, 0, 23)
//console.log(myCreateDate.toDateString());       // output: Mon Jan 23 2023

let myCreateDate = new Date(2023, 0, 23, 5, 3)  // NOTE : Month starts with 0 in JS 
// let myCreateDate = new Date("2023-01-14")    // NOTE : syntax for YY/MM/DD format
// let myCreateDate = new Date("01-14-2023")    // NOTE : syntax for MM/DD/YY format  (Not Followed in INDIA) 
console.log(myCreateDate.toLocaleString());     // output: 1/23/2023, 5:03:00 AM



let myTimeStamp = Date.now()

console.log(myTimeStamp);  // output : 1697979620433 something like this in milliseconds 
console.log(myCreateDate); // output : 2023-01-22T23:33:00.000Z something like this 
console.log(myCreateDate.getTime()); // output : in milliseconds so now we can compare with myTimeStamp

// NOTE : Comparision should always be done in milliseconds 

// Conversion of milliseconds into seconds. 
console.log(Math.floor(Date.now()/1000));   // used Math.floor method to round off to lower decimal values 


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() ); // month starts from 0 
console.log(newDate.getDay());    // sunday is considered as 0 too 

// very important and interesting : tolocalString 
newDate.toLocaleString('default',{
    weekday: "long",
    timeZoneName: "short"
})
