// Create a base class Payment with a pay(amount) method.
// Extend it into CreditCard and PayPal, overriding pay() to print different messages.
// Implement method overloading by adding a pay() method that either:
// Takes only an amount, or
// Takes an amount and currency (e.g., pay(100, "USD")).




class Payment {
    pay(amount, currency = "USD") {
      document.writeln(`Paid ${amount} ${currency}.`);
    }
  }
  
  class CreditCard extends Payment {
    pay(amount, currency = "USD") {
        document.writeln(`Paid ${amount} ${currency} using Credit Card.`);
    }
  }
  
  class PayPal extends Payment {
    pay(amount, currency = "USD") {
        document.writeln(`Paid ${amount} ${currency} using PayPal.`);
    }
  }
  
  const payment1 = new CreditCard();
  payment1.pay(100);
  payment1.pay(150, "EUR");
  
  const payment2 = new PayPal();
  payment2.pay(200);
  payment2.pay(250, "GBP");
  