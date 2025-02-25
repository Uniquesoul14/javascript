function sum(n){


    if (n>=1)
    {
        return n + sum(n-1);
    }
    else
    {
        return 0;
    }
        
    
    
    }
    
    
    let n = parseInt(prompt("Enter the value :"));
    
    let ans = sum(n);
    document.write(`The Sum of ${n} is ${ans}`);