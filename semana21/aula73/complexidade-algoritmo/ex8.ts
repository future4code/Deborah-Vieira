//Quando tivermos um loop dentro do outro, nesse caso a appendToNew esta sendo chamada aqui O(n2)
function copyArray(array: number[]): number[] {
    let copy: number[] = [];

    for (const value of array) {
      copy = appendToNew(copy, value);
    }
    return copy;
  }

//Determinado pela entrada input que pode ser qualquer valor, O(n) sua complexidade
  
  function appendToNew(array: number[], value: number) {      
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
    newArray.push(value);
    return newArray;
  }

  

  