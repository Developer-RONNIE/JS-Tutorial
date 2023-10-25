// We will see how to declare objects in singleton/with the help of constructors 

// const tinderUser = {} //non-singleton object
// console.log(tinderUser); 

const tinderUser = new Object() //this is  an singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sattu"
tinderUser.isLoggedIn = false 

// console.log(tinderUser); // output : { id: '123abc', name: 'Sattu', isLoggedIn: false }

// declaring objects within objects 
const regularUser = {
    email: "some@gmail.com",
    // we are declaring full name as an object 
    fullname : {
        userfullname: { // we can do nesting of objects as much as we want or require 
            firstname: "Sitar",
            middlename: "Punariya",
            lastname: "Mahato",
        }

    }
}
//###   accessing values or objects through dot notation 
console.log(regularUser.fullname)
/* output: 
{
  userfullname: { firstname: 'Sitar', middlename: 'Punariya', lastname: 'Mahato' }
}
*/
console.log(regularUser.fullname.userfullname);   //output: { firstname: 'Sitar', middlename: 'Punariya', lastname: 'Mahato' }

console.log(regularUser.fullname.userfullname.firstname); //output : Sitar



/*
NOTE: 
Optional Chaining : important concept we will be learning later 
*/




// #### Combining Objects 
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {obj1, obj2} //wrong practice 
// console.log(obj3);
//  output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//conclusion : the problem we face here is the above command creates 2 objects within a single object rather combining them both 

/*  
###### assign Method ######
Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

@param target — The target object to copy to.

@param source — The source object from which to copy properties.
*/
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);  //output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// ###### spread method ######
const obj3 = {...obj1, ...obj2}
console.log(obj3);   //output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b'}



// Access values from database. 
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));      //output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));    //output: [ '123abc', 'Sattu', false ]
console.log(Object.entries(tinderUser));  //output: [ [ 'id', '123abc' ], [ 'name', 'Sattu' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //output: true
