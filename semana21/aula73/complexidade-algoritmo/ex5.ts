/*Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade*/

/* Ordenados por melhor eficiência */

/* Ex03 */
export const replaceMatrixValue = ( matrix: number[][],rowIndex: number, columnIndex: number, value: number
    ): void => {
  
      if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
      ) {
        throw new Error("Fora do intervalo da matriz");
      }
    
      matrix[rowIndex][columnIndex] = value;
    };
/* Ex01 */
    const findFirstRecurringCharacter = (input: string): string | null => {
        const charHashMap: { [index: string]: boolean } = {};

        for (const char of input) {
        if (charHashMap[char] === true) {
            return char;
        }
        charHashMap[char] = true;
        }
        return null;
    };

/* Ex02 */
    export const func = (source: string, comparison: string): boolean => {
        if (
        comparison.length > source.length + 1 ||
        comparison.length < source.length - 1
        ) {
        return false;
        }
        let commonCharQuantity = 0;
    
        for (const char of comparison) {
        if (source !== comparison) {
            commonCharQuantity++;
        }
        }
        return (
        commonCharQuantity <= source.length + 1 &&
        commonCharQuantity >= source.length - 1
        );
    };

/* Ex04 */
    function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
        for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
            return true;
        }
        }
        return false;
    }
