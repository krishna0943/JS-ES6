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

for (var i=1;i<=5;i++)
{
    //console.log(i);
    setTimeout(() => {
        console.log(i);
    },1000);
}


