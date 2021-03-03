const employee = require ('./employee')

class Engineer extends employee {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub 
    }
}

module.exports = Engineer
