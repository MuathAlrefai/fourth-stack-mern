class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack = target => {
    if (target instanceof Unit) {
      target.res += 3;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

class Effect extends Card {
  constructor(name, cost, magnitude) {
    super(name, cost);
    this.magnitude = magnitude;
  }
  attack = target => {
    if (target instanceof Unit) {
      target.res += this.magnitude;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}
// Effect Cards
const hardAlgorithm = new Effect("increase target's resilience by 3", 2, 3);
const rejection = new Effect("Unhandled Promise Rejection", 1, -2);
const pairProgramming = new Effect("Pair Programming", 3, 2);

// Red Belt Unit
const redBelt = new Unit("Red Belt Ninja", 3, 3, 4);
console.log("Red Belt Ninja Has Arrived: \n" + "Power: " + redBelt.power + "\n" + "Resiliense: " + redBelt.res + "\n" );

hardAlgorithm.attack(redBelt)
console.log("Red Belt Ninja solved a Hard Algorithm and gained +3 Res");
console.log("Current Res: " + redBelt.res + "\n");

// Black Belt Unit
const blackBelt = new Unit("Black Belt Ninja", 4, 5, 4);
console.log("Black Belt Ninja Has Arrived: \n" + "Power: " + blackBelt.power + "\n" + "Resiliense: " + blackBelt.res + "\n" );

rejection.attack(redBelt);
console.log("Red Belt Ninja got hit by an Unhandled Promise Rejection and lost -2 Res"); 
console.log("Current Res: " + redBelt.res + "\n");

pairProgramming.attack(redBelt);
console.log("Red Belt Ninja used Pair Programming and gained +2 Res");
console.log("Current Res: " + redBelt.res + "\n");

blackBelt.attack(redBelt);
console.log("Black Belt Ninja Attacked Red Belt Ninja! ughh it must've hurt!!");