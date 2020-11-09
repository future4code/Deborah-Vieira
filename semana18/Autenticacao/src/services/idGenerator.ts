import {v4} from 'uuid'

//função que gera id aleatoriamente
export const idGenerator = ():string =>{
    return v4()
}