'use strict'
let users = [
  {
    name: 'Дарина',
    age: 22,
  },
  {
    name: 'Антон',
    age: 19,
  },
  {
    name: 'Ксения',
    age: 38,
  },
  {
    name: 'Саша',
    age: 15,
  },
  {
    name: 'Таня',
    age: 5,
  }
]
// Задача:
// Методы массивов.
// Создать массив пользователей.
// Из массива пользователей получить массив их имен и массив возрастов.
// На основе первоначального создать новый массив пользователей которым есть 18 лет.
// Найти пользователя с конкретным именем и возрастом и его индекс в массиве.
// Для этого использовать встроенные методы массивов.
// Также написать свои функции map, filter, которые первым аргументом принимают массив а вторым функцию колбек. По примеру forEach из лекции. Своими словами описать как эти функции работают и как будет происходить выполнение кода.


console.log(users.map(function (user) {
  return user.name;
}));

console.log(users.map(function (user) {
  return user.age;
}));

console.log(users.filter(function (user) {
  return user.age >= 18;
}));


console.log(users.find(function (user, index) {
  return user.name === 'Таня' && user.age === 5;
})),

  console.log(users.findIndex(function (user) {
    return user.name === 'Таня' && user.age === 5;;
  }));

function filter(arr, callback) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i])
    }

  }
  return result;
}

console.log('Реализация Filter : ' + filter([2, 4, 9, 6, 8, 4, 8, 7, 10, 22], n => n <= 4))

function map(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    //callback(arr[i])
    result.push(callback(arr[i], i, arr))
  }
  return result;
}

console.log('Реализаций map: ' + map([20, 24, 10, 7], (n) => n*2));

// Написали свои функции Map и Filter которые выполняют действий как их одноименные методы.
//Эти функции создают нативный Filter и Map, в эти функции мы можем добавлять не только массив,
//но и другие элементы. Например коллекции. 


// Реализация Map и Filter при помощи Call.

// var filter = function(arr, callback, thisArg) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback.call(thisArg, arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// let newarray = filter([2,4,9,6,8,4,8,7,10,22], (n) => n <= 4);

// console.log(newarray);

// var map = function(arr, callback, thisArg) {
//   var i, length = arr.length, results = [];
//   for (i = 0; i < length; i = i + 1) {
//     results.push(callback.call(thisArg, arr[i], i, arr));
//   }
//   return results;
// };

// console.log(map ([2,4,9,6,8,4,8,7,10,22], (n) => n));