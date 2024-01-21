class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "6"]);

new ArrayOfAnything<number>([1, 2, 3, 4]);

// Generic constraints

class Cars {
  print(): void {
    console.log("I am a car");
  }
}

class House {
  print(): void {
    console.log("I am a House");
  }
}

interface Printable {
  print(): void;
}

const HouseAndCars = <T extends Printable>(collection: T[]) => {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i].print());
  }
};

HouseAndCars<House>([new House(), new House()]);

HouseAndCars<Cars>([new Cars(), new Cars()]);
