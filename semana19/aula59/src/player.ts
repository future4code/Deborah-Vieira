
interface player{
    name:string
    life: number
    defense:number
    force:number
}

export function validateCharacter(input:player):boolean{

    if(!input.name || input.life === undefined  || input.defense === undefined 
         || input.force === undefined ){
        return false
    }
    if (input.life <=0 || input.defense <=0 || input.force <=0) {
        return false;
      }

      return true

}


