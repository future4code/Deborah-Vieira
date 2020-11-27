import { validateCharacter } from "./player";

interface player{
    name:string
    life: number
    defense:number
    force:number
}

export function performAttack(attacker: player, defender:player){

    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character");
      }
      if (attacker.force > defender.defense) {
        defender.life -= attacker.force - defender.defense;
      }

}