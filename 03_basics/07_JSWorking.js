// +++++++ HOW DOES JAVASCRIPT WORKS BEHIND THE SCENE +++++++

// JS EXECUTION CONTEXT 
/**
 this means whichever file you have served javascript, It will deal with it and try to run it and execute it 
 these JS programs can be runned in 2 phases, which we will be covering soon

 STEP #1: 
 {JS code} --> Global Execution Context <-- this  

 1. Global Execution Context
 2. Funcion Execution Context

 
 Step #2: 
 {JS code} -->  Memory Creation Phase 
           -->  Execution Phase 

 Let's understand the process in depth 
 */

//  Try understandiing what's happening in the following function. if not please refer to 01_function.js 
 let val1 = 15
 let val2 = 5
 function addTwo (num1, num2){
    let total = (num1, num2)
    return total
 }
 let result1 = addTwo(val1, val2)
 let result2 = addtwo(30,2)

 /**
  ## Phase 1:[Global Execution Phase] the entire code will be allocated in "this" variable 

  ### Phase 2:[Memory Phase] stores all the values without any execution, let's take the above example and understand what is stored 
  val1 --> undefined 
  val2 --> undefined 
  addtwo --> defination 
  num1 --> undefined 
  num2 --> undefined 

  ## Phase 3:[execution Phase] the excution phase will store the value & execute 
  val1 --> 15
  val2 --> 5
  line: 29 : addTwo --> [new variable environment+ execution thread] <--[Delete]
  line 30 : addtwo 

  # Phase 3.a.1:[Memory Phase]
  val1 --> undefined 
  val2 --> undefined 
  total --> undefined 
  # Phase 3.a.2:[Execution Context]
  num1 --> 15
  num 2 --> 5
  total --> 20  (this will return to global execution context)
  #Phasse 3.a.3: [Delete]

  # Phase 3.b.1:[Memory Phase]
  val1 --> undefined 
  val2 --> undefined 
  total --> undefined 
  # Phase 3.b.2:[Execution Context]
  val1 --> 30
  val2 --> 2
  total --> 32  (this will return to global execution context)
  #Phasse 3.b.3: [Delete]

  */


//   +++++++++++++++++ Call Stack +++++++++++++++++

/**
 * Search for call stack in MDN docs to get a clear idea 
 *It follows LIFO principle - Last In First Out 
 As we know now how when a function is called it goes through various phases as dicussed earlier 

 Case study #1: 
 now suppose what if we have 3 different functions with us which are one(), two(), three()
 it's obvious that the functions would be called in stack one after the other 
 which means functions would go through the phases and then removed from stack one after the other 

 Case Study #2: 
 now suppose what if we have 3 different functions
 where function one() has a fuction two() within itself and function two() has another function three() within itself 
 here, Lifo principle will come in handy 
 so function one() will be called into stack and it's execution will be put on hold 
 cuz we need to perform the function two() first, but after calling function two() within the stack it will aslo be put on hold cuz function three() need to be executed for execution of function two() 
 So, this is how function three() will be executed first, then function two(), then function one()
 now, you understand the principle of LIFO 

//  Practise it on web page 
 */