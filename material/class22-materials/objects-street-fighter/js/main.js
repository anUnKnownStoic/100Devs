//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighterCharacter(name, clan, specialAbility, weakness) {
  this.name = name;
  this.clan = clan;
  this.specialAbility = specialAbility;
  this.weakness = weakness;
  this.kick =  _=> {
    console.log('KICCCCk');
  }
  this.punch= _ =>{
    console.log('puNNNNch');
  }
  this.taunt =_ =>{
    console.log('Taunt');
  }
}

const neon = new StreetFighterCharacter('Neon', 'Namikaze', 'Iron Tail', 'Girls');

console.log(neon);
