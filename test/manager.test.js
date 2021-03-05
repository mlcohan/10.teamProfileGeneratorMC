  
const manager = require("../constructors/manager");

describe("Manager", () =>{
    it("should set the name, id, and email and office number of the manager", () => {
        const test = new manager("Mary", 2, "mary.cohan@gmail.com", 320);
        expect(test.name).toEqual("Mary");
        expect(test.id).toEqual(2);
        expect(test.email).toEqual("mary.cohan@gmail.com");
        expect(test.office).toEqual(320)
    });

    describe("getRole", () => {
        it("should return Manager", ()=>{
            const role = "Manager";
            const test = new manager("Mary", 2, "mary.cohan@gmail.com", 320)
            expect(test.getRole()).toBe(role);
        });
    });
   
});