function Fruit(){
    this.x;
    this.y;

    this.pickLocation = function(){
        this.x=(Math.floor(Math.random()* rows-1)+1)*scale;
        this.y=(Math.floor(Math.random()* columns-1)+1)*scale;
    }

    this.draw= function(){
        ctx.fillStyle="	#BDB76B";
        ctx.fillRect(this.x,this.y,scale,scale)
    }
}