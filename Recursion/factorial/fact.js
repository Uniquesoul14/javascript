function factorial(n){


    if (n>1)
    {
        return n * factorial(n-1);
    }
    else
    {
        return 1;
    }
        
    
    
    }
    
    let n = parseInt(prompt("Enter the value :"));
    
    let ans = factorial(n);
    document.write(`The factorial of ${n} is ${ans}`);