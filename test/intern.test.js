  
const intern = require("../constructors/intern");

describe("Intern", () =>{
    it("should set the name, id, and email and school of the intern", () => {
        const test = new intern("Mary", 2, "mary.cohan@gmail.com", "UW");
        expect(test.name).toEqual("Mary");
        expect(test.id).toEqual(2);
        expect(test.email).toEqual("mary.cohan@gmail.com");
        expect(test.school).toEqual("UW")
    });

    describe("getRole", () => {
        it("should return Intern", ()=>{
            const role = "Intern";
            const test = new intern("Mary", 2, "mary.cohan@gmail.com", "UW")
            expect(test.getRole()).toBe(role);
        });
    });

});