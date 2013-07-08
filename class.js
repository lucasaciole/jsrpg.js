JSRPG.Class = (function() {
  function Class (name,attributes) {
    this.name = name;
    this.attributes = attributes;
  }

  return Class
})()

KNIGHT = new JSRPG.Class(
  "Knight", // Class Name
  {str:20, dex:15, int:10} // Class Starting Attributes
)

RANGER = new JSRPG.Class(
  "Ranger", // Class Name
  {str:15, dex:20, int:10} // Class Starting Attributes
)

DOG = new JSRPG.Class(
  "Viking Valhound",
  {str:9001,dex:4000,int:9001}
)

WIZARD = new JSRPG.Class(
  "Wizard", // Class Name
  {str:10, dex:15, int:20} // Class Starting Attributes
)