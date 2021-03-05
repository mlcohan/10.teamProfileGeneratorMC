const Employee = require ('./employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school; 
    }

    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school
    }
    newEmployeeCard(){
        return `<div class="card">
        <div class="card-header bg-success text-light">
            <h2>${this.name}</h2>
            <h4>Intern</h4>
        </div>
        <div class="card-body" style="background-color: #E5E8E8;">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">School: ${this.school}</li>
            </ul>
        </div>
    </div>`;
    }
}

module.exports = Intern
