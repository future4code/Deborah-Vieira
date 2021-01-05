/*Entendimento sobre a questão:
1-Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
2-Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
3-Passando pelos ifs acima, significa que as duas têm o mesmo tamanho
 Nesse caso, varremos as strings contando quantas letras diferentes tem
4-Retorna true se a diferença é 1, false caso contrário

**Entradas/Saidas**
amora/amor = true
cebola/cebolinha = false
tomar/pomar = true
fruta/frutare = false
pamonha/pamonhas = true



*/
const isOneEdit = (strA, strB) => {
    if (Math.abs(strB.length - strA.length) > 1)
        return false;
    if (strA.length > strB.length)
        return strA.includes(strB);
    if (strB.length > strA.length)
        return strB.includes(strA);
    // Passando pelos ifs acima, significa que as duas têm o mesmo tamanho
    // Nesse caso, varremos as strings contando quantas letras diferentes tem
    let charsDiffCount = 0;
    for (let i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i])
            charsDiffCount++;
    }
    // Retorna true se a diferença é 1, false caso contrário
    return charsDiffCount === 1;
};
console.log("OneEdit é ", isOneEdit("pamonha", "pamonhas"));
