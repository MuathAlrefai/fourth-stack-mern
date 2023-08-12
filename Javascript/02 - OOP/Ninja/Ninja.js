class Ninja {
  constructor(name, health = 90, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName = () => console.log(this.name);

  showStats = () =>
    console.log(this.name, this.health, this.speed, this.strength);

  drinkSake = () => {
    this.health += 10;
    console.log("You Drank Sake and your Health has increased by 10");
  };
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();