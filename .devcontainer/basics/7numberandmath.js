/*
====================
7} number and maths 
====================
A] NUMBER :=

=> in jss generaly we define number in cont or var but we cannot be shore that we store value is number or not 
 but if we use number keyword  then we shore stored value is number 
  */
 const a=100
 const balance = new Number(100)
 console.log(balance);
 // if we run same code in console then we get many prototype of number like string

 console.log(balance.toString());
 console.log(typeof (balance));// new 
 console.log(balance.toString().length);
 console.log(balance.toFixed(1));// in feture use multiple time 

 const b=123.86765
 console.log(b.toPrecision(3));
 console.log(b.toPrecision(4));
 
const c= 12.876543
console.log(c.toPrecision(3));

const d=1000000000
console.log(d.toLocaleString('an-IN'));

/*B]MATHS:=
=> those operation which we can apply in maths 
*/
console.log(Math);// if we run this in console then we can get multipal methods of maths 
console.log(Math.abs(-4));//convert values in +ve 
console.log(Math.round(5.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,2,7,9));
console.log(Math.max(4,2,9,7));
//mostly we use random
console.log(Math.random());// value beteen 0 & 1
console.log(Math.random()*10);//by the *10 1 disite shift 
// if we use multiple operation then we use boadmas rule 
console.log((Math.random()*10)+1);

/* to define max or min valeues . we define it for get a range  */
const max=20;
const min =10;
console.log((Math.floor(Math.random()) * (max - min + 1 )) + min);











 
 
 