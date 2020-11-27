import { validateCharacter } from "../src/player"

describe("Function tests validateCharacter", () => {

    test("empty name attribute", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            force: 400,
            defense: 800,
          });
      
          expect(result).toBe(false);
        });

    test("zero life attribute", () => {
        const result = validateCharacter({
            name: "debe",
            life: 0,
            force: 400,
            defense: 800,
          });
          
            expect(result).toEqual(false);
        });

            //esse teste me fez descobri uma falha no meu código.
    test("zero force attribute", () => {
        const result = validateCharacter({
            name: "debe",
            life: 1500,
            force: 0,
            defense: 800,
          });
            
            expect(result).toEqual(false);
        });     

    test("zero defense attribute", () => {
         const result = validateCharacter({
             name: "debe",
             life: 1500,
             force: 800,
             defense: 0,
           });
                        
            expect(result).toEqual(false);
    });            
    
    
    test("negative defense, force attribute", () => {
        const result = validateCharacter({
            name: "debe",
            life: 1500,
            force: -800,
            defense: -500,
          });
                       
           expect(result).toEqual(false);
   });       
   
   
   test("negative defense, force attribute", () => {
       const result = validateCharacter({
           name: "debe",
           life: 1500,
           force: -800,
           defense: -500,
         });
                   
           expect(result).toEqual(false);
    });   


   test("correct function parameters", () => {
       const result = validateCharacter({
           name: "debe",
           life: 1500,
           force: 300,
           defense: 500,
          });
                   
         expect(result).toEqual(true);
});                   


})