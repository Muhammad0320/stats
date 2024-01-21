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
