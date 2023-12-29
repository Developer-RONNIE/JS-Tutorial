// We will see how to declare objects in singleton/with the help of constructors 

// const tinderUser = {} //non-singleton object
// console.log(tinderUser); 

const tinderUser = new Object() //this is  an singleton object

tinderUser.id = "123abc"
tinderUser.name = "RanVijay"
tinderUser.isLoggedIn = false 

// console.log(tinderUser); // output : { id: '123abc', name: 'RanVijay', isLoggedIn: false }

// declaring objects within objects 
const regularUser = {
    email: "some@gmail.com",
    // we are declaring full name as an object 
    fullname : {
        userfullname: { // we can do nesting of objects as much as we want or require 
            firstname: "Sitar",
            middlename: "Punariya",
            lastname: "Mahato",
            // We can do nesting of objects within an objects itself 
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
###### Assign Method ######
Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

**target — The target object to copy to.
**source — The source object from which to copy properties.

*/
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);  //output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// ###### Spread method ######
const obj3 = {...obj1, ...obj2} // best practise 
console.log(obj3);   //output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b'}



// Access values from database. 
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
    {
        id: 3,
        email: "r@gmail.com"
    }
]

users[1].email // through this command we can access the email of the 1st user 


// Accessing KEYs, Values, Entries of an object as an Array
console.log(tinderUser); // output : { id: "123abc", name = "RanVijay", isLoggedIn = false  }

console.log(Object.keys(tinderUser));      //output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));    //output: [ '123abc', 'RanVijay', false ]
console.log(Object.entries(tinderUser));  //output: [ [ 'id', '123abc' ], [ 'name', 'RanVijay' ], [ 'isLoggedIn', false ] ]
// NOTE : Used in while working with database, 

// hasOwnProperty Method is used to check if we have a certain property in our program or not 
// it comes in handy to save the code from crashing while checking the desired property without using loops 
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //output: true



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Destructing of ARRAYS & OBJECTS both are posssible, for now we will look into 

// *** Destructing of objects ***

const course = {
    coursename: 'Javascript',
    price: "999",
    courseInstructor : "Ronnie"
}

// console.log(course.courseInstructor); //output : Ronnie  ( it is the right practise but what if u need to call it multiple times ? It's a long name we can change it to our desired name. That's what destructing is all about.  )

const {courseInstructor} = course
// console.log(courseInstructor); //output: Ronnie (it is also good practise but for writting a clean code we can deconstruct the courseInstructor how we do that ? it is shown below)

const {courseInstructor: Instructor} = course
// console.log(Instructor);
// console.log(courseInstructor); // we can see the output for both is same 




// **** BONUS: Methods with React (Example) ****

// const navbar = (props.comapny) => {  // we don't use props.company again and again instead we use deconstrction of object 
const navbar = ({company}) => {
//    whenever we call the navbar it will perform some function, suppose the function name is props here 
}

navbar(company = "sherlockgames") //destructoring in react (It won't be taught in react cuz it's assumed that you have studied js beforehand)




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ***** Intro to APIs *****
/*
we get some values from backend, the method of writing or showcasing those values is handled by APIs
in early times the values were showcased in XML structure which was complex to understand 
these days the values are showcased in JSON 

How does a JSON looks like ? 
*/

{
    // this is JSON format : yes it is an object only but it has no name 
    // let's understand from previous example 
    // in the previous example the object had a name of the object 
    // which was const course but our json structure doesn't have any name 
//     "name"  : "hitesh",
//     "coursename" : "Javascript",
//     "price" : "free"
    //NOTE : keys & values in JSON are treated as string type
    // the syntax might be showing some errors because it is just for example purpose 
    // later on in this course we will work with real APIs 
}




/*
 API could be in array structure too : example 

[
    {},
    {},
    {}
]

if you want to look for more then, go to https://randomuser.me/ 
read the use case and then, test on https://jsonformatter.org/ 
*/ 


