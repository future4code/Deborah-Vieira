import { useState } from "react";
/* Um hook, que recebe um estado inicial e contem a função de
alteração nos campos de input, e ao final os retorna
 */

const useForm = (inicialState) => {
  const [form, setForm] = useState(inicialState);

  //usando desistruturação para função de alterar valores no input
  const handleInput = (event) => {
    /* desestruturação de variaveis recebendo o evento */
    const { value, name } = event.target;
    /* copia o estado do form, e altera apenas a propriedade name do input
    por isso coloco o name em cada input 
    o que foi digitado, o name recebe e passa para o email ou password*/
    setForm({ ...form, [name]: value });
  };

  return [form, handleInput];
};

export default useForm;
