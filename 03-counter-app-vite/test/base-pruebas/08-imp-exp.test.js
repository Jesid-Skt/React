import { describe, test, expect } from "@jest/globals";
import { getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp.js";

describe("prueba en 08-imp-exp", () => {
   test('get heroe debe retornar el heroe por el id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
         console.log(heroe);

    });
    test('get heroe debe retornar undefined si no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();

        console.log(heroe);
    });

  test("getheroebyowner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);

    expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));

    console.log(heroes.length);
    console.log(heroes);
  });

    test("getheroebyowner debe retornar un arreglo con los heroes de Marvel", () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);
    
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    
        console.log(heroes.length);
        console.log(heroes);
    });

});
