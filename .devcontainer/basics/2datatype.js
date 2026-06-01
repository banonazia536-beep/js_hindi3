/* 
============
2} datatype  
============
 in jss we can have two type of datatype 
 A] primitive
 B] non-primitive 
 
 A] primitive datatype :- primitive datatype can store a single value and are not object.  they are immutable
    ,whitch means their values cannot be change directly .
    => stack memory use
 
 type of primitive datatype :-
 1.number:= store numerucal values.
 2.string:= store text or chaeactors.
 3.boolean:= store logical values .
 4.undefined:= a variable that has been declared but not assigned a values . 
 5.null:= represent an intention absence of values .
 6.biglnt:= stores vary large integer.
 7.symbol:= stroes unique and integers . if we pass same value in symbol then both
  variable are diff .

 B]non-primitive datatype :- nonprimitive datatype are data type that can store multiple values or complex data .
    they are also called reference data types becouse they are stored by reference.
   =>heap memory use

    type of non-primitive datatype :-
    1. object:= stroes data in key-values pairs. those code which is written in{}. 
    2. array:= stores multiple values in a single variable .
    3. function:= a block  of code designed to perform a task.

    */
   console.log("datatype ")
   console.log("primitive datatype ")
   let  a ="nazia",b=2,c,d= Symbol('id'),e=232323224,f=null ,g=Symbol('id'),h=13243n
   
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(f))
console.log(typeof(e))
console.log(typeof(d))
console.log(typeof(g))
console.log(d==g)
console.log(typeof(h));


console.log(" non primitive datatype ")
let student = {name : "ali", age:20} 
console.log(typeof student)
let number = [12,34,54]
console.log(typeof number)
function show()
{
  console.log("hello")
}
console.log(typeof show)

//memory 
// stack memory := copy data in another veriable 
let newa=a
newa="parteek"
console.log(a)
console.log(newa)

// heap memory:= take areference for data 
 let student2=student
student.name="ram"
console.log(student.name)
console.log(student2.name)