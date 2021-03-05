  
const Employee = require("../constructors/employee");

describe("Employee", () =>{
    it("should set the name, id, and email of the employee", () => {
        const test = new Employee("Mary", 2, "mary.cohan@gmail.com");
        expect(test.name).toEqual("Mary");
        expect(test.id).toEqual(2);
        expect(test.email).toEqual("mary.cohan@gmail.com");
    });

});