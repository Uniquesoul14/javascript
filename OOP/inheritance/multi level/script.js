// Parent class: Indian
class Indian {
    constructor(adharNo, birthPlace) {
      this.adharNo = adharNo;
      this.birthPlace = birthPlace;
    }
  
    setAadharNo(adharNo) {
      this.adharNo = adharNo;
    }
    getAadharNo() {
      return this.adharNo;
    }
    setBirthPlace(birthPlace) {
      this.birthPlace = birthPlace;
    }
    getBirthPlace() {
      return this.birthPlace;
    }
  }
  
  // Intermediate class: Person (inherits from Indian)
  class Person extends Indian {
    constructor(adharNo, birthPlace, name, age, gender) {
      super(adharNo, birthPlace);
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    setName(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    setAge(age) {
      this.age = age;
    }
    getAge() {
      return this.age;
    }
    setGender(gender) {
      this.gender = gender;
    }
    getGender() {
      return this.gender;
    }
  }
  
  // Child class: Employee (inherits from Person)
  class Employee extends Person {
    constructor(adharNo, birthPlace, name, age, gender, id, salary, role) {
      super(adharNo, birthPlace, name, age, gender);
      this.id = id;
      this.salary = salary;
      this.role = role;
    }
  
    setId(id) {
      this.id = id;
    }
    getId() {
      return this.id;
    }
    setSalary(salary) {
      this.salary = salary;
    }
    getSalary() {
      return this.salary;
    }
    setRole(role) {
      this.role = role;
    }
    getRole() {
      return this.role;
    }
  
    // Method to display all details from the multilevel inheritance chain
    getDetails() {
      return `AdharNo: ${this.getAadharNo()}, BirthPlace: ${this.getBirthPlace()}, Name: ${this.getName()}, Age: ${this.getAge()}, Gender: ${this.getGender()}, ID: ${this.getId()}, Salary: ${this.getSalary()}, Role: ${this.getRole()}`;
    }
  }
  
  // Creating an Employee object which has access to properties from Indian and Person classes
  const emp = new Employee("123456789012", "Mumbai", "Rahul", 30, "Male", "EMP001", 50000, "Developer");
  
  // Display all details
  console.log(emp.getDetails());
  