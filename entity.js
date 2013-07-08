JSRPG = {}
JSRPG.Entity = (function() {
  // Entity constructor... sets attributes
  function Entity (name,attributes) {
    this.name = name;
    for (key in attributes) {
      if (isNaN(attributes[key])) {
        throw "Invalid attributes. Please verify your classes for invalid attributes."
      }
      else {
        this[key] = attributes[key];
      }
    }

    this.health = calculateHealt()
    this.mana = calculateMana()
  }

  // Entity functions/methods/actions/whatever...
  Entity.prototype.attack = function attack(target) {
    if (target && target instanceof JSRPG.Entity) {
      console.log(this.name+" attacks "+target.name)
    }
    else {
      console.log(this.name+" attacks thin air!")
    }
  }

  Entity.prototype.damageOn = function(target){
  }

  return Entity
})()