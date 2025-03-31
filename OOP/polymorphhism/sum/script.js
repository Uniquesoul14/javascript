function sum(...args) {
    // Check the number of arguments provided
    if (args.length < 2 || args.length > 4) {
      throw new Error("Function expects 2 to 4 arguments.");
    }
    
    // Calculate the sum of all provided arguments
    return args.reduce((total, current) => total + current, 0);
  }
  
  // Testing the function with 2, 3, and 4 arguments
  console.log(sum(10, 20));         
  console.log(sum(10, 20, 30));      
  console.log(sum(10, 20, 30, 40));   
  