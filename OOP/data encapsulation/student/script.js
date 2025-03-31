class Student {
    // Private fields declared in the global scope of the class
    #roll_no;
    #name;
    #age;
    #std;
    #percentage;
  
    constructor(roll_no, name, age, std, percentage) {
      this.#roll_no = roll_no;
      this.#name = name;
      this.#age = age;
      this.#std = std;
      this.#percentage = percentage;
    }
  
    // Method to get all student details
    getDetails() {
      return `Roll No: ${this.#roll_no}, Name: ${this.#name}, Age: ${this.#age}, Standard: ${this.#std}, Percentage: ${this.#percentage}%`;
    }
  }
  
  // Creating three student objects
  const student1 = new Student(1, "Alice", 16, "10th", 89);
  const student2 = new Student(2, "Bob", 15, "9th", 92);
  const student3 = new Student(3, "Charlie", 17, "11th", 95);
  
  // Output student details
  document.writeln(student1.getDetails() + "<br>");
  document.writeln(student2.getDetails() + "<br>");
  document.writeln(student3.getDetails() + "<br>");
  