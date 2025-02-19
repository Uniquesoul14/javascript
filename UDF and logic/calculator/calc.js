
function addition(num1,num2)
{
    document.write("Sum of num1  and num2  is  :- " + (num1+num2) + "<br><hr>");
}

function substraction(num1,num2)
{
    document.write("Sub of num1 and num2   :- " + (num1-num2) + "<br><hr>");
}

function multiplication(num1,num2)
{
    document.write("Mult of num1 and num2 is  :- " + (num1*num2) + "<br><hr>   ");
}

function division(num1,num2)
{
    document.write("Division of num1 and num2 is :- " + (num1/num2) + "<br><hr>");
}

function module(num1,num2)
{
    document.write("Module of num1 and num2 is :- " + (num1%num2) + "<br><hr>");
}

 
{
    let num1 = parseInt(prompt("Enter first Number :- "))
    let num2 = parseInt(prompt("Enter second Number :- "))
   

    let choice = prompt("Enter a sign among  (- , * , / , + , % ) :- ");

    switch(choice)
    {
        case "+" : 
        document.write = addition(num1,num2)
        break;

        case "-" : 
        document.write = substraction(num1,num2)
        break;

        case "*" : 
        document.write = multiplication(num1,num2)
        break;

        case "/" : 
        document.write = division(num1,num2)
        break;

        case "%" : 
        document.write = module(num1,num2)
        break;

        default : document.write("Enter valid sign !")
    }

}