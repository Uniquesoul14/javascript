// Create a BankAccount class with a private #balance property.
// Implement deposit(amount) and withdraw(amount) methods.
// Add a getBalance() method to return the balance.


class BankAccount {
    #balance;
    
    constructor(initialBalance = 0) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        document.writeln(`Deposited: $${amount}`);
      } else {
        document.writeln("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawn: $${amount}`);
      } else {
        console.log("Invalid withdrawal amount.");
      }
    }
  
    getBalance() {
     return this.#balance ;
    }
  }
  
  // Example Usage:
  const myAccount = new BankAccount(100);
  myAccount.deposit(50);
  myAccount.withdraw(30);
document.writeln("Current Balance:", myAccount.getBalance());
  