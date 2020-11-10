import * as bcrypt from "bcryptjs";

//daqui sairá o nosso hash(função de hash)
export  const  hash = async(plainTex: string): Promise<string> => {
     //segurança do algoritmo
    const rounds = Number(process.env.BCRYPT_COST);
    //string aleatoria adicionada a segurança
    const salt = await bcrypt.genSalt(rounds);
    //recebe a força, a string aleatoria e a senha "hasheada"
    const result = await bcrypt.hash(plainTex, salt);
    return result;
  }

  /* função de compare
  compara a igualdade das strings, ele recebe a senha e o que foi hasheada
  porque para a mesma entrada, ele gera o mesmo hash. */
  export  const compare = async(plainTex: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(plainTex, hash);
  }
