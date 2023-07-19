# Question_4 : How do we check if a key exists in a JavaScript object?

var obj = { key: undefined };
console.log("key" in obj);

/* It will check the existence of a key in the given 
 object and returns true if the key is present or
 else it returns false  */

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

# Question_9 :Sort an array of strings by length.
              Input: ["Testing", "The", "Code"]

const arr = ["Testing", "The", "Code"];
const sortedArray = arr.sort((a,b) => a.length>b.length? 1:-1);
console.log(sortedArray);


// [ 'The', 'Code', 'Testing' ]

# Question_10 : Write a JavaScript function to check whether an `input` is an array or not.














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

# Question_12 : Write a program to derive the provided output:-
                Input: var arrOfObj=[{name: 'Rohan', physics: 20, chemistry: 18, math: 26},
                {name: 'Geeta', physics: 29, chemistry: 30, math: 22}, 
                {name: 'Kunal', physics: 27, chemistry: 25, math: 21}, 
                {name: 'Abhishek', physics: 21, chemistry: 26, math: 23},
                {name: 'Aashish', physics: 25, chemistry: 16, math: 18}];
