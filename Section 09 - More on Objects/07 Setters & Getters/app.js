const person = {
  name: "Hazem",
  set(age) {
    this._age = age;
  },
  get age() {
    return this._age;
  },
};

person.set(37);
console.log(person.age); // 37
