JSRPG.Monster = (function(){
  function Monster (name, entclass) {
    if (entclass instanceof JSRPG.Class) {
      this.name = name
      this.class = entclass
      for (key in entclass.attributes) {
        this[key] = entclass.attributes[key];
      }
    }
  }

  Monster.prototype = new JSRPG.Entity()
  Monster.prototype.constructor = Monster

  return Monster
})()