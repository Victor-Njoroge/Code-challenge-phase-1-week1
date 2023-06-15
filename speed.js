function speedLimit(){
    var speed=parseInt(prompt("Enter speed of vehicle"))
    if(speed >70){
        var demeritPoint=0.2;
        var maxSpeed=70;
        var points=(speed-maxSpeed)*demeritPoint;
        document.writeln(`Your demerit points are ${points} <br>`);

        if(points > 12){
            document.writeln("License suspended");
        }
    }else{
        document.writeln("OK");
    }
}
//speedLimit();