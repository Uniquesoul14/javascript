
function prime(n)
{

    
    for(i=1;i<n;i++)
    {
        if(n%i == 0)
        {
            document.write(n + "is not prime number")
        }
        else{
            document.write(n + " is  a prime number ")
        }
    }
     
}

 let n=parseInt(prompt("enter n :"))

prime(n);