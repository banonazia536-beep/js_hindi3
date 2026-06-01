/*
=============
6} strings
=============
=> those data which we can write in "" .

normal string */
let a="12"
console.log(a);
//addition of stringa
let b="nazia",c=" bano"
console.log(b+c);//can't follow this method
console.log(`name of user ${b}` );

// prient string and diff prototype of string and length 
const gamename = new String('nazia')// in console it represent prototype ,length ,  
console.log(gamename); 
console.log(gamename[0]);
console.log(gamename[0]);
console.log(gamename[1]);
console.log(gamename[2]);
console.log(gamename[3]);
console.log(gamename[4]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));
console.log(new String);
const anotherstring = gamename.substring(0,4)
console.log(anotherstring);
const newstring = gamename.slice(-8,4)
console.log(newstring);
console.log(anotherstring.trim());
console.log(b.replace('a','_'));
console.log(b.includes('z'))

// if we want to seen diff methods then write this quary in consol
//const gamename = new String('nazia')

