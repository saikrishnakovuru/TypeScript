class ShorthandInitialization {
  constructor(private id: number, private name: string) {}

  public getNameAndId() {
    console.log(` name is ${this.name} and is ${this.id}`);
  }
}

const shorthandInitialization = new ShorthandInitialization(1, "sai");
shorthandInitialization.getNameAndId();

/*  What we did here is, instead of declaring the instance(or)global variables and initializing them in the constructor
we rightaway wrote them in the constructor itself which is equvalent to writing global variables and initializing them in the costructor */
