console.log("Print odd numbers in an array")
console.log("using anonymous function") 
 var array=[1,2,3,4,5,6,7,8,9]

 var odd=function(){
 	for(var i=0;i<array.length;i++)
 		if(array[i]%2!==0)
 		 console.log(array[i])
 }

 odd()

console.log("using IIFE function") 
 var odd= (function() {
 	for(var i=0;i<array.length;i++)
 		if(array[i]%2!==0)
 		 console.log(array[i])
 })();


 console.log("Convert all the strings to title caps in a string array")
 console.log("using anonymous function") 

var a=['suraj','ram','sham','tam']

var titlecaps=function() {
	for(i=0;i<a.length;i++){
		b=[i][0].toUpperCase()
		c=a[i].slice(-(a[i].length-1))
		console.log(b.concat(c))
	}
}titlecaps()

console.log("using IIFE function") 
var titlecaps=(function() {
	for(i=0;i<a.length;i++){
		b=[i][0].toUpperCase()
		c=a[i].slice(-(a[i].length-1))
		console.log(b.concat(c))
	}
})()


console.log("Sum of all numbers in an array")
console.log("using anonymous function")
var arr=[10,12,13,14,5]

var S=function() {
var sum=0;
for(i=0;i<arr.length;i++) {
	sum=sum+arr[i]
}
console.log(sum)
} S()

console.log("using IIFE function") 
var S=(function() {
var sum=0;
for(i=0;i<arr.length;i++) {
	sum=sum+arr[i]
}
console.log(sum)
})()

console.log("Remove duplicates from an array")
console.log("using anonymous function")

var arr=[1,'sam','ram',1,2,'1','sam','1']
var removeDuplicate=function(){
	console.log(...new Set(arr))
} removeDuplicate()

console.log("using IIFE function") 
var removeDuplicate=(function(){
	console.log(...new Set(arr))
})()

console.log("Return median of two sorted arrays of same size")
console.log("using anonymous function")
var arr1=[1,20,23,24,25]
var arr2=[6,27,28,29,30]

var median=function(){
	var joinearray=arr1.concat(arr2);
	if(joinearray.length%2===0){
		console.log((joinearray[joinearray.length/2]+joinearray[joinearray.length/2-1])/2)
	}
	else {
		console.log(joinearray[Math.floor(joinearray.length/2)])
	}
} median()

console.log("using IIFE function")
var median=(function(){
	var joinearray=arr1.concat(arr2);
	if(joinearray.length%2===0){
		console.log((joinearray[joinearray.length/2]+joinearray[joinearray.length/2-1])/2)
	}
	else {
		console.log(joinearray[Math.floor(joinearray.length/2)])
	}
})()

console.log("Return all the prime numbers in an array ")
console.log("using anonymous function")
var a=[1,2,3,4,5,6,78,7,8,9,11,31,15,43]
var Prime=function(){
var b=[]
for(i=0;i<a.length;i++){
    for(j=2;j<=a[i];j++){
        if(a[i]%j===0){
           break;
        }
        
    }
    if(a[i]===j){
        b.push(a[i])
    }
}
console.log(b)
} Prime()

console.log("using IIFE function")
var Prime=(function(){
var b=[]
for(i=0;i<a.length;i++){
    for(j=2;j<=a[i];j++){
        if(a[i]%j===0){
           break;
        }
        
    }
    if(a[i]===j){
        b.push(a[i])
    }
}
console.log(b)
}) ()

console.log("Rotate an array by k times and return the rotated array")
console.log("using anonymous function")
var a=[1,2,3,4,5,6,78,7,8,9,11,31,15,43]
var k=1
var Rotatedarray=function(){

for(j=1;j<=k;j++){
    temp=a[0]
    for(i=0;i<a.length-1;i++){
        a[i]=a[i+1]
        
    }
   a[i]=temp
}
console.log(a)
} Rotatedarray()

console.log("using IIFE function")
var Rotatedarray=(function(){

for(j=1;j<=k;j++){
    temp=a[0]
    for(i=0;i<a.length-1;i++){
        a[i]=a[i+1]
        
    }
   a[i]=temp
}
console.log(a)
})()

console.log("Return all the palindromes in an array")
console.log("using anonymous function")
var array=['abc','aabbaa','111']
var b=[]

var palindrome=function() {
 	for(var i=0;i<array.length;i++){
 	    var count=0
    for(var j=0;j<array[i].length;j++){
 		if(array[i][j]!==array[i][(array[i].length-1)-j]) {
 		   break;
 		}
 		 count++
    }
   if(count===array[i].length){
       b.push(array[i])
   }
    
 	}
 	
 	console.log(b)
   
 } palindrome();

 console.log("using IIFE function")
 var palindrome=(function() {
 	for(var i=0;i<array.length;i++){
 	    var count=0
    for(var j=0;j<array[i].length;j++){
 		if(array[i][j]!==array[i][(array[i].length-1)-j]) {
 		   break;
 		}
 		 count++
    }
   if(count===array[i].length){
       b.push(array[i])
   }
    
 	}
 	
 	console.log(b)
   
 })();
