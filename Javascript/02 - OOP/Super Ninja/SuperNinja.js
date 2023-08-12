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

class Sensei extends Ninja {
  constructor(name, wisdom = 10) {
    super(name, 200, 10, 10);
    this.wisdom = wisdom;
  }

  speakWisdom = () => {
    this.drinkSake();
    console.log(
      "What one programmer can do in one month, two programmers can do in two months."
    );
  };
}

const bigSensei = new Sensei("Muath");
bigSensei.showStats();
bigSensei.speakWisdom();
bigSensei.showStats();
