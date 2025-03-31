class Restaurant {
    constructor(name, cuisineType, rating) {
      this.name = name;
      this.cuisineType = cuisineType;
      this.rating = rating;
    }
  
    getDetails() {
      return `${this.name} serves ${this.cuisineType} cuisine and has a rating of ${this.rating}/5.`;
    }
  }
  
  // Creating restaurant instances
  const restaurant1 = new Restaurant("La Bella", "Italian", 4.5 + "<br>");
  const restaurant2 = new Restaurant("Sakura Sushi", "Japanese", 4.8 + "<br>");
  const restaurant3 = new Restaurant("Spice Hub", "Indian", 4.3 + "<br>");
  
  // Example Usage:
 document.writeln(restaurant1.getDetails());
 document.writeln(restaurant2.getDetails());
 document.writeln(restaurant3.getDetails());
  