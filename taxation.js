function taxation(){
    var basicSalary=parseInt(prompt("Enter your Basic salary"));
    var  benefits=parseInt(prompt("Enter your Benefits"));

    var grossSalary=basicSalary+benefits;
    document.writeln(`Gross Salary = ${grossSalary} <br>`);

    var annualGrossNet = grossSalary*12;
    document.writeln(`Your annual Gross salary is ${annualGrossNet} <br>`);

    var paye;
    if(grossSalary<=24000){
        paye = grossSalary*0.1
        document.writeln(`Tax paid is ${paye} <br>`);
    }else if(grossSalary>24000 && grossSalary<=32333){
        paye=grossSalary*0.25
        document.writeln(`Tax paid is ${paye} <br>`)
    }else{
        paye=grossSalary*0.30
        document.writeln(`Tax paid is ${paye} <br>`);
    }

    var NHIF
    if(grossSalary<=5999){
        NHIF=150;
        document.writeln(`NHIF deduction is ${NHIF} <br>`);
    }else if(grossSalary>=6000 && grossSalary <= 7999){
        NHIF=300;
        document.writeln(`NHIF deduction is ${NHIF} <br>`);
    }else if(grossSalary >= 8000 && grossSalary<=11999){
        NHIF=400;
        document.writeln(`NHIF deduction is ${NHIF} <br>`);
    }else if(grossSalary >= 12000 && grossSalary <= 14999){
        NHIF=500;
        document.writeln(`NHIF deduction is ${NHIF} <br>`);
    }else if(grossSalary >= 15000 && grossSalary<= 19999){
        NHIF=600;
        document.writeln(`NHIF deduction is ${NHIF} <br>`);
    }else if(grossSalary >= 20000 && grossSalary <= 24999){
        NHIF=750;
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >=25000 && grossSalary<= 29999){
        NHIF=850;
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >= 30000 && grossSalary <= 34999){
        NHIF=900
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >= 35000 && grossSalary <= 39999){
        NHIF=950
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >= 40000 && grossSalary <= 44999){
        NHIF=1000
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >=45000 && grossSalary <= 49999){
        NHIF=1100
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >=50000 && grossSalary<=59999){
        NHIF=1200
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >= 60000 && grossSalary<= 69999){
        NHIF=1300
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >=70000 && grossSalary <=79999){
        NHIF=1400
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >= 80000 && grossSalary <= 89999){
        NHIF=1500
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >= 90000 && grossSalary <= 99999){
        NHIF=1600
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }else if(grossSalary >=100000){
        NHIF=1700
        document.writeln(`NHIF deduction is ${NHIF}<br>`);
    }




    var netSalary= grossSalary-paye-NHIF
   document.writeln(`Your netSalary is ${netSalary}`)

}
taxation();