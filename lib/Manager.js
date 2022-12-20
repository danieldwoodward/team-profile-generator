const Employee = require("./Employee");

class Manager extends Employee
{
    constructor(name, id, email, officeNum, teamName, icon) {
      super(name, id, email)
      this.officeNum = officeNum;
      this.teamName = teamName;
      this.icon = "mug-hot"
    }
  
    getRole() {
      return "Manager";
    }

    teamName(){
      this.teamName;
    }

  }
  
  module.exports = Manager;