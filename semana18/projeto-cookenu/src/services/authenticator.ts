import * as jwt from "jsonwebtoken"

//criando um tipo
export type AuthenticationData = {
   id: string
}

//parametro payload é do tipo auth
export function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      //chave da criptografia
      process.env.JWT_KEY as string,
      {
         expiresIn: "24min"
      }
   )
}

//devolve, espelho da outra função
export function getTokenData(
   token: string
): AuthenticationData {
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as AuthenticationData
}