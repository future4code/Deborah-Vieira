import  { Request, Response } from 'express';
import { pokemons } from "../index";
import { Pokemon, POKE_TYPES } from "../types";

export const getAllPokemons = (req: Request, res: Response) => {
    try {
 
       if (!pokemons.length) {
          res.statusCode = 404
          throw new Error("No pokemons found")
       }
 
       res.status(200).send(pokemons)
 
    } catch (error) {
       console.log(error)
       res.send(error.message)
    }
}