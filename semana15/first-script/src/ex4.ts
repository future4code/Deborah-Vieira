/*a) Como você faria, já com a extensão instalada,
 para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo? */
 /*R: Executaria o comando tsc e o nome do arquivo */

 /* b) E se este arquivo estivesse dentro de uma pasta chamada `src`. 
 O processo seria diferente? Se sim, descreva as diferenças. */
 /* R: Precisaria navegar até essa pasta, para dar o comando tsc com o nome do 
 arquivo. Essa pasta já deve estar configurada em tsconfig*/

 /* c) Existe alguma maneira de **transpilar**
  múltilplos arquivos de uma vez só? Caso conheça, explique como fazer. */
  /*R: Sim. Basta rodar o comando tsc dentro da pasta que contem todos esses arquivos */

  /* d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? 
  O que mudou em comparação com o arquivo criado pelos slides? */
  /* R: Ele não está configurado como nas aulas e não há a propriedade
  "skipLibCheck": true,  nesse arquivo.  */