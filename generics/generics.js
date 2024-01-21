"use strict";
class ArrayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
new ArrayOfAnything(["a", "b", "6"]);
new ArrayOfAnything([1, 2, 3, 4]);
// Generic constraints
class Cars {
    print() {
        console.log("I am a car");
    }
}
class House {
    print() {
        console.log("I am a House");
    }
}
const HouseAndCars = (collection) => {
    for (let i = 0; i < collection.length; i++) {
        console.log(collection[i].print());
    }
};
HouseAndCars([new House(), new House()]);
HouseAndCars([new Cars(), new Cars()]);
