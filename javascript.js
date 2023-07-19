# Question_4 : How do we check if a key exists in a JavaScript object?

var obj = { key: undefined };
console.log("key" in obj);

/* It will check the existence of a key in the given 
 object and returns true if the key is present or
 else it returns false  */
_______________________________________________________________________________________________________________________________________
# Question_8 : Remove Duplicate Items from Array using reduce function.

const arr = [23, 33, 45, 23, 70, 45];
const removeduplicate = arr.reduce((accu, item) => {
    if (!accu.includes(item)) {
        accu.push(item);
    }
    return accu;
}, []);
console.log(removeduplicate);

/* Explanation ->The reduce iterates over each element of its original array and 
thus the element in the array will reduce to a single value */

 //   [ 23, 33, 45, 70 ]  
______________________________________________________________________________________________________________________________________
# Question_9 :Sort an array of strings by length.
              Input: ["Testing", "The", "Code"]

const arr = ["Testing", "The", "Code"];
const sortedArray = arr.sort((a,b) => a.length>b.length? 1:-1);
console.log(sortedArray);


// [ 'The', 'Code', 'Testing' ]
______________________________________________________________________________________________________________________________________
# Question_10 : Write a JavaScript function to check whether an `input` is an array or not.
 
function isArray(input) {
    return Array.isArray(input);
}
console.log(isArray(["34", "35"])); 
console.log(isArray({ key : "APPINVENTIV" } )); 

// The function isArray is taken input as a parameter and it will check whether
input is an object and not null to ensure it is not dealing with string or number.
When all its condition passes than it means the input is an array and will return 'True'
and if the condition fails than it will return  'False' //
_______________________________________________________________________________________________________________________________________
# Question_11 : Write a JavaScript function to sort the following array of objects by title value. 
                Sample object : 
                var library = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
                { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 const sortByTitle = library.sort((a,b) => (a.title>b.title) ? 1:-1);
 console.log(sortByTitle);
        
 /*
 [
   {
     author: 'Suzanne Collins',
     title: 'Mockingjay: The Final Book of The Hunger Games',
     libraryID: 3245
   },
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
 ]
 */
_______________________________________________________________________________________________________________________________________
# Question_12 : Write a program to derive the provided output:-
                Input: var arrOfObj=[{name: 'Rohan', physics: 20, chemistry: 18, math: 26},
                {name: 'Geeta', physics: 29, chemistry: 30, math: 22}, 
                {name: 'Kunal', physics: 27, chemistry: 25, math: 21}, 
                {name: 'Abhishek', physics: 21, chemistry: 26, math: 23},
                {name: 'Aashish', physics: 25, chemistry: 16, math: 18}];

var arr = [ {name: 'Rohan', physics: 20, chemistry: 18, math: 26},
{name: 'Geeta',   physics: 29, chemistry: 30, math: 22},
{name: 'Kunal',   physics: 27, chemistry: 25, math: 21},
{name: 'Abhishek',physics: 21, chemistry: 26, math: 23}, 
{name:'Aashish', physics: 25, chemistry: 16, math: 18} ];
var output = {};
arr.forEach(marks => {
  var total = ( marks.physics + marks.chemistry + marks.math );
  output[marks.name] = total; });
console.log(output);

// { Rohan: 64, Geeta: 81, Kunal: 73, Abhishek: 70, Aashish: 59 }
_______________________________________________________________________________________________________________________________________
# Question_13 : Write a JavaScript function to filter false, null, 0 and blank values from an array.
                Input: [“Test”, true, null, false, 0]

var arr = ["Test", true, null, false, 0];
var output = filter(arr)

function filter(array) {
  return array.filter(element => 
   element !== false && element !== null && element !== 0 && element !=='')
   }

console.log(output);

// [ 'Test', true ]
_______________________________________________________________________________________________________________________________________
# Question_14 : Write a JavaScript program to count the number of arrays inside a given array.
                Input: [2,8,[6],3,3,5,3,4,[5,4]]

var input = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
var output = NestedArr(input);
function NestedArr(array) {
  var count = 0;
  array.forEach(function(value) { 
    if (Array.isArray(value)) { 
      count++; 
    }
  });
  return count; 
}
console.log(output);

// 2

