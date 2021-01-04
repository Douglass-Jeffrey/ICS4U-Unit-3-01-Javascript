/*
* This program uses recursion to reverse a string.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2021-01-04
* Class StringReverser.
*/

/**
* Function reverses the string.
*/

function reverser(someString) {
    
  // check if string is empty
  if (someString.length == 0) {
    return someString;
  // enter reverser function again if it is not empty
  } else {
    return reverser(someString.substring(1)) + someString.charAt(0);
  }
}

let recString = "Recursion";
console.log("Original String: " + recString);
console.log("Reversed String: " + reverser(recString));
