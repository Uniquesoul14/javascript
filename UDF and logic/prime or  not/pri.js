
function prime_check(n)
{
    let i;
  
    for(i=2; i<=n; i++)
        {
            if(n%i==0) 
                {
                    document.write(`${n} is prime number`);
                }
            else
                {
                    document.write(`${n} is not prime number`);
                }
        }

        document.write("<br>")
  
}
  
  let n =parseInt(prompt("Enter the value of N to check wether its is prime or not:"));
  
 
  prime_check(n);