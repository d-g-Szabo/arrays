//used node.js to run JS in the terminal

//variables to store one value
let myVariable = "value";
let mySecondVariable = "second value";

//arrays to store multiple values
//declare arrays similar to variables, but we use square brackets
let myArray = ["value1", "value2", "value3"];
console.log(myArray); //node.js runs JS in the terminal

//.length property to get the number of elements in an array
console.log(myArray.length);

//index --> tells me the position of an element in an array
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[myArray.length - 1]); //index of the last item in my array
//length is the total number of items
//index starts from 0
//if I subtract 1 from the length, I get the index of the last item

//array methods --> functions that we can use on arrays
//pop() removes the last element from an array
//slice() returns a copy of an array

//adding an item to my array
myArray[3] = "value4";
console.log(myArray);

//adding multiple items to my array
myArray.push("value4", "value5");
console.log(myArray);

//arrays can store different types of data
let quirkyArray = ["string", 5, true, ["another", "array"]];

//Create an array called blogPosts with a list of blog post titles. Log the array to the console.
const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);

//Accesing arrays
console.log(blogPosts[0]); // Output: My first blog post
console.log(blogPosts[1]); // Output: My second blog post
console.log(blogPosts[2]); // Output: My third blog post

//Updating arrays

blogPosts[3] = "My fourth blog post";

console.log(blogPosts[3]); // Output: My fourth blog post

//Create an array called favouriteFoods with a list of your favourite foods. Log the array to the console.
let favouriteFoods = ["sushi", "chicken", "pasta"];
console.log(favouriteFoods);

//Create an array called favouriteColours with a list of your favourite colours. Log the array to the console.
let favouriteColours = ["white", "red", "black"];
console.log(favouriteColours);

//Create an array called favouriteNumbers with a list of your favourite numbers. Log the array to the console.
let favouriteNumbers = [7, 27, 777];
console.log(favouriteNumbers);
