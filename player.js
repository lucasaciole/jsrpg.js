JSRPG.Player = (function(){
  function Player (name, entclass) {
    if (entclass instanceof JSRPG.Class) {
      JSRPG.Entity.call(this, name, entclass.attributes)
      this.class = entclass
    }
  }

  Player.prototype = new JSRPG.Entity()
  Player.prototype.constructor = Player

  return Player
})()

luckrox = new JSRPG.Player("Luckrox, the Valiant", KNIGHT)
monidog = new JSRPG.Player("Monidog, the Beast", DOG)