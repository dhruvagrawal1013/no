class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
thatCount(){
  var playerCountRef=database.ref=("playeCount");
  playerCountRef.on("value",data=>{playeCount=data.val();});
 
}
updateCount(count)
 { database.ref("/").update({ playerCount: count }); }}
 }
 

