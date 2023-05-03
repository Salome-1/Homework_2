"use strict";

//Task1

let x = 5;
while (x <= 100) {
    console.log(x);
    x++;
}

//Task2

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of array1){
    if (item > 0 & item < 10){
        console.log(item);
    }
}

//Task3

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let item of array2){
    if(array2[item] == 5)
    console.log('არის');
}

//Task4
// let array3= [1, 2, 3, 4, 5];

//Task5
// let array4 = [1, 2, 3, 7, 6, 9];

// //Task6

let array5 = [1, 2, 3, 7, 6, 9];

for (let item of array5) {
    if (item == 7) {
        continue;
    }
    console.log(item);
 }

//Task7

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };

  console.log(user.studentstatus);

//Task8

// let user = {
//   Name: "giorgi",
//   age: 20,
//   studentstatus: "active",
// };

//Task9

let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let item = 0; item < array.length; item++) {
  const element = array[item];
  for (let x = 0; x < element.length; x++) {
    if (element[x] > 0) console.log(element[x]);
  }
}

// // Task10
let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

// for (let item of array) {
//   if (item % 2 == 0) console.log(item);
// }

for (let item of array) {
  if (item % 2 == 1) console.log(item);
}

// Task11
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (let item of users) {
  if (item.status == "true")
   console.log(item);
}
