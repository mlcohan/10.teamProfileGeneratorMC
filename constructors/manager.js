const employee = require ('./employee')

class Manager extends employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office 
    }
}

module.exports = Manager
