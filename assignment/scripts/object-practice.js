console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/

// const me = {
//   // TODO - add properties here
// };
// console.log('A little about me:', me);
//original questions code above------------------


console.log('---#1 Start---');
const me = {
  firstName: 'Nate',
  lastName: 'Notermann',
  age: 32,
  hasSiblings: true,
  shoeCount: 3,
  favThreeFoods: ['Pizza', 'Chicken', 'Beer']
  // TODO - add properties here
};
console.log('A little about me:', me);

console.log( 'checking favThreeFoods & index #2 item. Should be "beer"', me.favThreeFoods[2]);




//test video code//
let card0 = {
  suit: 'Hearts',
  number: 2
}

let card1 = {
  suite: 'Spades',
  number: 1
}
// console.log(card0);
// console.log(card0, card0.suit);
// console.log(card0 + card0.suit);
// console.log(card0.suit);

function isRed( cardToCheck ) {
  console.log( 'in isRed', cardToCheck );
  if( cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamonds' ) {
    return true;
  }
  else {
    return false;
  }
}

console.log( isRed(card0) );
console.log( isRed(card1) );
//-------end of test video code-----------

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
console.log('---#2 Start---');
let fullName = (me.firstName + ' ' + me.lastName); //only i could figure to add a space in between was to use " "
console.log('my first name is:', me.firstName + ', and my last name is '+ me.lastName);
console.log('making my whole name: ', fullName);



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]); /*console.logging object "me", looks for PROPERTY named "favThreeFoods" 
in index positions [0], with would be the first item in the array. should be 'pizza' */
console.log(me.favThreeFoods[2]);//console.logging last item in array

//tried to find last fav food with a function, didn't work
// function lastItem (arrayName) {
//   arrayEnd = arrayName.length;
//   console.log(arrayEnd)
//   return;
// }
// let testArray = ['Pizza', 'Chicken', 'Beer']
// console.log('test lastItem', lastItem(me.favThreeFoods[favFoods,length]));

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log('testing shoeCount. should be 3-->', me.shoeCount);
console.log('adding 1 to shoeCount. should be 4-->', me.shoeCount+1);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/