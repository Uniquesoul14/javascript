
function swaping(a,b)
{


    
    a = a + b;
    b = a - b;
    a = a - b ;

    document.write( a , b )
}


let a = parseInt(prompt("Enter num1 a :"))
    let b = parseInt(prompt("Enter num2 b :"))

swaping(a + " " + b)