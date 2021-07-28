//Lodash chunk 

var _ = require("lodash");
var arr = [1, 2, 3, 4, 5];
console.log(_.chunk(arr, 2));
//Output:[[1,2],[3,4],[5]]

//ES6
var chunk = function (arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, function (a, i) {
        return arr.slice(i * size, i * size + size);
    });
};
console.log(chunk([1, 2, 3, 4, 5], 2));
//Output: [[1,2],[3,4],[5]]

//Lodash reduce

var _ = require("lodash");
// Original array 
var array = [1, 2, 3, 4];
// Use of _.reduce() method
var gfg = _.reduce(array, function (sum, n) {
    return sum + n;
}, 0);
// Printing the output 
console.log(gfg);
//Output:10
//ES6
array = [1, 2, 3, 4];
var sum = array.reduce(function (accumulator, element) {
    return accumulator + element;
}, 0);
console.log(sum);
//Output:10


//lodash filter
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
_.filter(arr, isEven); // [2, 4, 6, 8]
function isEven(v) { return v % 2 === 0; }
//ES6 filter
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var filter = arr.filter(function (number) { return number % 2; });
console.log(filter); // [2, 4, 6, 8]


//lodash find
var _ = require('lodash');
var x = [2, 5, 7, 10, 13, 15];
var result = _.find(x, function (n) {
    if (n * n > 100) {
        return true;
    }
});
console.log(result); //13
//ES6
var x = [2, 5, 7, 10, 13, 15];
var result = x.find(function (n) { return n * n > 100; });
console.log(result); //13

//lodash sum
// Requiring the lodash library  
var _ = require("lodash");
// Use of _.sum () method 
var gfg = _.sum([1, 2, 3, 4]);
// Printing the output  
console.log(gfg); //10
//ES6
var result = [1, 2, 3, 4];
var sum = 0;
result.forEach(function (n) {
    sum = sum + n;
});
console.log(sum); //10
