const Employee = require("./Employee");

class Engineer extends Employee
{
    constructor(name, id, email, gitHub, icon) {
      super(name, id, email)
      this.gitHub = gitHub;
      this.icon = "gear";
    }
  
    getRole() {
      return "Engineer";
    }

    getGithub(){
      return this.gitHub;
    }

  }
  
  module.exports = Engineer;