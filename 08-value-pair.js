/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here
  //let {key} = obj1;
  let obj1Key = obj1[key];
  let obj2Key = obj2[key];
  console.log([obj1Key, obj2Key]);
  
}

let object1 = { name: 'One', location: 'NY', age: 3 };
let object2 = { name: 'Two', location: 'SF' };
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
//valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;