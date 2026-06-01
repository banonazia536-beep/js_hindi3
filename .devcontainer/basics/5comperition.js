/* 
================
5} comperition 
================
=>for comperition datatype of comperetive element must be same 
*/
// if we compair same datatype
console.log("same datatype") 
let a=4,b=9
console.log(a>b)
console.log(a<b)
console.log(a<=b)
console.log(a>=b)
console.log(a==b)
console.log("a">"b")
//if we compair diffrent datatype
console.log("diff datatype") 
console.log("a"+b)
console.log(a+"b")
//in null
console.log("null")
console.log(null>0)
console.log(null>=0)
console.log(null==0)
console.log(null<=0)
console.log(null<0)
//in undefine 
console.log("undefined")
console.log(undefined>0)
console.log(undefined>=0)
console.log(undefined==0)
console.log(undefined<=0)
console.log(undefined<0)
// mostley avoid this type of convertion 
console.log("")
console.log("b"===b)