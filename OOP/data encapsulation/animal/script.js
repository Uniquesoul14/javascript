class Animal {
    // Private fields for name, type, gender, and age
    #name;
    #type;
    #gender;
    #age;
  
    constructor(name, type, gender, age) {
      this.#name = name;
      this.#type = type;
      this.#gender = gender;
      this.#age = age;
    }
  
    // Method to get all animal details
    getDetails() {
      return `Name: ${this.#name}, Type: ${this.#type}, Gender: ${this.#gender}, Age: ${this.#age}`;
    }
  
    // Optional setters if you want to modify attributes later
    setName(name) { this.#name = name; }
    setType(type) { this.#type = type; }
    setGender(gender) { this.#gender = gender; }
    setAge(age) { this.#age = age; }
  }
  
  // Creating three animal objects
  const animal1 = new Animal("Leo", "Lion", "Male", 5);
  const animal2 = new Animal("Molly", "Cat", "Female", 3);
  const animal3 = new Animal("Max", "Dog", "Male", 4);
  
  // Output animal details
  document.writeln(animal1.getDetails() + "<br>");
  document.writeln(animal2.getDetails() + "<br>");
  document.writeln(animal3.getDetails() + "<br>");
  