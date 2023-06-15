function inputMarks(){
    var studentsMarks=parseInt(prompt("Enter student Marks"));
    if(studentsMarks>=0 && studentsMarks<= 100){
        if(studentsMarks >79 && studentsMarks <=100){
            document.writeln("Grade A");
        }else if(studentsMarks >=60 && studentsMarks<=79){
            document.writeln("Grade B");
        }else if(studentsMarks >49 && studentsMarks<=59){
            document.writeln("Grade C");
        }
        else if(studentsMarks >=40 && studentsMarks<=49){
            document.writeln("Grade D");
        }else{
            document.writeln('Grade E');
        }
    }else{
        return
    }
}
//inputMarks();



