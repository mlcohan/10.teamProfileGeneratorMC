const employee = require ('./employee')

class Intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school; 
    }
}

module.exports = Intern
