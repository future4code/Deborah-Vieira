function mod(a: number, b: number): number {
    if (b <= a) {
      return -1;
    }
    let div = a / b;
    return a - div * b;
  }


  //Complexidade O(1). Quando não há loops que dependam da entrada