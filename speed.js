function speedLimit(){
    var speed=parseInt(prompt("Enter speed of vehicle"))// a prompt that allows user to enter speed of car the input is converted to interger
    if(speed >70){// a conditional statement that use the if narrative
        var demeritPoint=0.2;
        var maxSpeed=70;
        var points=(speed-maxSpeed)*demeritPoint;//arithmetic conditions
        document.writeln(`Your demerit points are ${points} <br>`);

        if(points > 12){
            document.writeln("License suspended");
        }
    }else{
        document.writeln("OK");
    }
}
speedLimit();// calling a function