function taxation(){
    var basicSalary=parseInt(prompt("Enter your Basic salary"));
    var  benefits=parseInt(prompt("Enter your Benefits"));

    var netSalary=basicSalary+benefits;
    document.writeln(`Net Salary = ${netSalary}`);
}
taxation();