const Employee = require ('./employee')

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office 
    }

    getRole () {
        return "Manager"
    }

    getOffice () {``

        return this.office
    }
    newEmployeeCard(){
        return `<div class="card">
        <div class="card-header bg-primary text-light">
            <h2>${this.name}</h2>
            <h4>Manager</h4>
        </div>
        <div class="card-body" style="background-color: #E5E8E8;">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office Number: ${this.office}</li>
            </ul>
        </div>
    </div>`;
    }
}

module.exports = Manager
