function product(a: number, b: number): number {
    let sum = 0;
    for (let i = 0; i < b; i++) {
      sum += a;
    }
    return sum
  }

  /*Complexidade de O(b), porque a condicional do i deve ser menor que b,
  e no momento não sabemos o valor de b.
  */
  