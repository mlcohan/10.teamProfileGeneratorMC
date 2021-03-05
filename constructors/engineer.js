const Employee = require ('./employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub 
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.gitHub
    }
    newEmployeeCard(){
        return `<div class="card">
        <div class="card-header bg-info text-light">
            <h2>${this.name}</h2>
            <h4>Engineer</h4>
        </div>
        <div class="card-body" style="background-color: #E5E8E8;">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${this.gitHub}">${this.gitHub}</li>
            </ul>
        </div>
    </div>`;
    }

}

module.exports = Engineer
