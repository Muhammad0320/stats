class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "6"]);

new ArrayOfAnything<number>([1, 2, 3, 4]);
