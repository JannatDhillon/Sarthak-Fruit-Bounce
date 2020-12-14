class Subform{
    constructor(){
        this.title = createElement("h1");
        this.play = createButton("let's GO!");
        this.watermark = createElement("h1");
        
     }
     display(){
         this.title.html("LEVEL "+level);
         this.title.position(150,100);
         this.play.position(400,500);
         this.watermark.html("complete the levels to unlock the next level ");
         this.watermark.position(100,350);
     }
}