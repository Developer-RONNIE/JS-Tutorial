// ++++++++++++++++++ SWITCH CASE ++++++++++++++++++
// Suppose we have a list of if else statements to check. then, there's an alternative to do it 


const month = 3
switch (month) {
    case 1:
        console.log.apply("Jan")
        break;
    case 2:
        console.log.apply("Feb")
        break;
    case 3:
        console.log.apply("March")
        break;// remeber if we don't use break statement here, by default all code will run except "default". 
    case 4:
        console.log.apply("April")
        break;

    default: // default 
        console.log.apply("December")
        break;
}