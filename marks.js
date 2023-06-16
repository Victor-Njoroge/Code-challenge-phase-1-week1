function inputMarks(){
    var studentsMarks=parseInt(prompt("Enter student Marks"));// prompt that allows user to enter marks and turns the in put data to interger

    if(studentsMarks>=0 && studentsMarks<= 100){// coditional statement of if
        if(studentsMarks >79 && studentsMarks <=100){
            document.writeln("Grade A"); // grading
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
inputMarks(); // Declaring a function



