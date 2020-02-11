function greetPerson(name)
{

    let greet;
    if(name==="chandler")
    {
        //functional scope we can use it in function any where
       // var greet = "hello chandler";
        greet = "hello chandler"
    }
    else
    { 
        //block scope 
        greet = " hii there";
    }
    
    console.log(greet);
}

greetPerson("chandler");

var a= 1;
var b = 2;

if(a===1)
{
    var a=10;
    let b = 20;

    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

// for (var i=1;i<=5;i++)
// {
//     //console.log(i);
//     setTimeout(() => {
//         console.log(i);
//     },1000);
// }


// From for to forEach() to for-of 
var arr1 = ['a', 'b', 'c'];
for (var i=0; i<arr1.length; i++) //Es5 
{
    var elem = arr1[i];
    console.log(elem);
}

var arr2  = ['d','e','f'];//ES5
 arr2.forEach((elem)=> {console.log(elem)});

var arr3 = ['a', 'b', 'c'];//es6
for (var elem of arr3) {
    console.log(elem);
}

// From arguments to rest parameters 

function varArgs() //es5
{
    for (var i=0; i < arguments.length; i++) 
    {
        console.log(arguments[i]);
    }
}

varArgs(1,2,3,4);

function varArgs1(...args)//es6
 {
    args.filter((x)=> {console.log(x);})
}
varArgs1(5,6,7,8);

//from concat() to spread operator

var a1 =[10,20];
var a2 = [30,40];
var a3 = [50,60];

console.log(a1.concat(a2,a3));//es5

console.log(...a1,70,...a2,80,...a3);//es6