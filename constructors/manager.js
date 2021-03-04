const employee = require ('./employee')

class Manager extends employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office 
    }

    getRole () {
        return "Manager"
    }

    getOffice () {

        return this.office
    }
}

module.exports = Manager
