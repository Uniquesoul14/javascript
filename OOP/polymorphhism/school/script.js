// Base class: School
class School {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  
    display() {
      console.log(`School Name: ${this.name}, Established Year: ${this.year}`);
    }
  }
  
  // Derived class: Student extends School
  class Student extends School {
    constructor(studentName, std, schoolName, schoolYear) {
      // Call parent constructor to set school details
      super(schoolName, schoolYear);
      this.studentName = studentName;
      this.std = std;
    }
  
    // Override display() method to include student details
    display() {
      console.log(`Student Name: ${this.studentName}, Standard: ${this.std}, School Name: ${this.name}, Established Year: ${this.year}`);
    }
  }
  
  // Creating a Student object and displaying its details
  const student1 = new Student("Alice", "10th", "Greenwood High", 1995);
  student1.display();
  