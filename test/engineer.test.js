  
const Engineer = require("../constructors/engineer");

describe("Engineer", () =>{
    it("should set the name, id, email and github of the engineer", () => {
        const test = new Engineer("Mary", 2, "mary.cohan@gmail.com", "mlcohan");
        expect(test.name).toEqual("Mary");
        expect(test.id).toEqual(2);
        expect(test.email).toEqual("mary.cohan@gmail.com");
        expect(test.gitHub).toEqual("mlcohan")
    });

    describe("getRole", () => {
        it("should return Engineer", ()=>{
            const role = "Engineer";
            const test = new Engineer("Mary", 2, "mary.cohan@gmail.com", "mlcohan")
            expect(test.getRole()).toBe(role);
        });
    });
    
});