function num(i,n) {
  

    if (n <= i) {
      document.write(n + " ");
      n++;
    }
  
    num(i,n);
  }
  
  let i=parseInt(prompt("Enter the value of n:"));
  num(i,1);