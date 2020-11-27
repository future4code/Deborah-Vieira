import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/ex2";


describe('Entries by Brazilians and foreigners to establishments', () => {
    
    test('Brazilian user who can enter an establishment in Brazil',() => {

        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
          };
      
          const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL,
          };
      
          const result = verifyAge(casino, [brazilian]);
          expect(result.brazilians.allowed).toEqual(["Astrodev"]);
    })


    test('American user who can enter an establishment in Brazil',() => {

        const brazilian: User = {
            name: "Deborah",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
          };
      
          const casino: Casino = {
            name: "Balada Favorita",
            location: LOCATION.BRAZIL,
          };
      
          const result = verifyAge(casino, [brazilian]);
          expect(result.americans.allowed).toEqual(["Deborah"]);
    })

  
    test("No one allowed", () => {
            const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
            };

            const american: User = {
            name: "Astrodev EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
            };

            const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
            };

            const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
                 ]);

            expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
            expect(result.americans.unallowed).toEqual([
            "Astrodev EUA",
            "Astrodev EUA",
            ]);
        });


        test("allowed", () => {
            const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
            };

            const american: User = {
            name: "Astrodev EUA",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
            };

            const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
            };

            const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
                 ]);

            expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
            expect(result.americans.allowed).toEqual([
            "Astrodev EUA",
            "Astrodev EUA",
            ]);
        });



        test(" brazilian allowed", () => {
            const brazilian: User = {
              name: "Astrodev",
              age: 19,
              nacionality: NACIONALITY.BRAZILIAN,
            };
        
            const casino: Casino = {
              name: "Balada",
              location: LOCATION.BRAZIL,
            };
        
            const result = verifyAge(casino, [brazilian]);
            expect(result.brazilians.allowed.length).toBeGreaterThan(0);
            expect(result.brazilians.allowed.length).toBeLessThan(2);
          });



          test(" american allowed", () => {
            const brazilian: User = {
              name: "Astrodev",
              age: 19,
              nacionality: NACIONALITY.AMERICAN,
            };
        
            const casino: Casino = {
              name: "Balada Estelar",
              location: LOCATION.BRAZIL,
            };
        
            const result = verifyAge(casino, [brazilian]);
            expect(result.americans.unallowed.length).toEqual(0);
          });




          test("allowed 02", () => {
            const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
            };

            const american: User = {
            name: "Astrodev EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
            };

            const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
            };

            const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
                 ]);

            
             expect(result.brazilians.unallowed).toContain("Astrodev BR");
             expect(result.americans.unallowed).toContain("Astrodev EUA");
        });


        test("2 american allowed and 2 brazilians unallowed", () => {
            const brazilian: User = {
              name: "Astrodev BR",
              age: 19,
              nacionality: NACIONALITY.BRAZILIAN,
            };
        
            const american: User = {
              name: "Astrodev EUA",
              age: 21,
              nacionality: NACIONALITY.AMERICAN,
            };
        
            const casino: Casino = {
              name: "Balada Estelar",
              location: LOCATION.EUA,
            };
        
            const result = verifyAge(casino, [
              brazilian,
              brazilian,
              american,
              american,
            ]);
            expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
            expect(result.americans.unallowed.length).toBeLessThan(1);
            expect(result.americans.allowed.length).toBe(2);
          });


})