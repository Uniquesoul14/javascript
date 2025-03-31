// Create a Vehicle class with properties brand and year.
// Create a Car class that extends Vehicle and adds a fuelType property.
// Create a Bike class that extends Vehicle and adds a hasGear property.
// Add another class ElectricCar that extends Car and adds a batteryCapacity property.
// Implement a getDetails() method in Vehicle and override it in different subclasses.


class Vehicle {
    constructor(brand, year) {
      this.brand = brand;
      this.year = year;
    }
  
    getDetails() {
      return `Brand: ${this.brand}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, year, fuelType) {
      super(brand, year);
      this.fuelType = fuelType;
    }
  
    getDetails() {
      return `${super.getDetails()}, Fuel Type: ${this.fuelType}`;
    }
  }
  
  class Bike extends Vehicle {
    constructor(brand, year, hasGear) {
      super(brand, year);
      this.hasGear = hasGear;
    }
  
    getDetails() {
      return `${super.getDetails()}, Has Gear: ${this.hasGear ? "Yes" : "No"}`;
    }
  }
  
  class ElectricCar extends Car {
    constructor(brand, year, fuelType, batteryCapacity) {
      super(brand, year, fuelType);
      this.batteryCapacity = batteryCapacity;
    }
  
    getDetails() {
      return `${super.getDetails()}, Battery Capacity: ${this.batteryCapacity} kWh`;
    }
  }
  
 
  const myCar = new Car("Toyota", 2020, "Petrol"  + "<br>");
  document.writeln(myCar.getDetails());
  
  const myBike = new Bike("Yamaha", 2021, true + "<br>");
  document.writeln(myBike.getDetails());
  
  const myElectricCar = new ElectricCar("Tesla", 2023, "Electric", 75 + "<br>");
  document.writeln(myElectricCar.getDetails());
  