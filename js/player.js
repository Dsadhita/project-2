class Player{
    constructor(){
 this.index=null;
 this.distance=0;
 this.name=null;
    }
    getCount(){
        var playercountRef = database.ref('playercount');
        playercountRef.on("value",function(data){
            playercount = data.val();
        })
    }
    updateCount(count) {
database.ref('/').update({
    playercount:count

    });
}
update(name){
    var playerindex = "players/player"+ this.index;
    database.ref(playerindex).set({
        name:this.name,
        this:this.distance
    });
}
static getplayerinfo() {
    var playerinforef = database.ref('players');
    playerinforef.on("value",(data)=>{
        allplayers = data.val();
    })
}
} 