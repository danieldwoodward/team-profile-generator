const Employee = require("./Employee");

class Intern extends Employee
{
    constructor(name, id, email, school, icon) {
      super(name, id, email)
      this.school = school;
      this.icon = "book";
    }
  
    getRole() {
      return "Intern";
    }

    getSchool(){
      return this.school;
    }

  }
  
  module.exports = Intern;