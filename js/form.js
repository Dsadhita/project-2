class Form{
 constructor() {
this.input=createInput("name");
this.button=createButton("GO");
this.greeting=createElement('h3');
 }
 hide() {
     this.greeting.hide();
      this.button.hide();
      this.input.hde();
 }
 display(){
     var title = createElement('h2')
     title.html("CAR RACING GAME !");
     title.position(130,0);

     

     this.input.position(130,70);
     this.button.position(130,100);
     this.button.mousePressed(function(){
         this.input.hide();
         this.button.hide();
         var name = input.value();
         playercount+=1;
         player.update();
         player.updateCount(playercount);
         greeting.html("HELLO! "+player.name);
         greeting.position(130,170);
     });
 }


}