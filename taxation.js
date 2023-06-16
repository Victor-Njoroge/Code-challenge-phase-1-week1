function taxation(){
    var basicSalary=parseInt(prompt("Enter your Basic salary"));// prompt that allows user enter basic salary
    var  benefits=parseInt(prompt("Enter your Benefits"));// prompt that allows user to enter benefits

    var grossSalary=basicSalary+benefits; //arithmetic operations using the two varibles above
    document.writeln(`Gross Salary = ${grossSalary} <br>`);// outputs the gross salary 

    var annualGrossNet = grossSalary*12;// calculates the annual gross net
    document.writeln(`Your annual Gross salary is ${annualGrossNet} <br>`);//out puts the annual gross net

    var paye;// variable declaration
    if(grossSalary<=24000){ // if statement condition that is used to calculate PAYE
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
    if(grossSalary<=5999){//if statement used to calculate NHIF deductions
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

    var NSSF
    var Tier = parseInt(prompt("Choose your NSSF tier group\n 1:Tier 1\n 2:Tier 2"));// prompt used to allow user to choose which tier group He or she belongs
    if(Tier===1){
        NSSF=grossSalary*0.06
        if(NSSF<=360){// if statement used to calculate NSSF deductions
            document.writeln(`NSSF contributions is ${NSSF}<br>`)
        }else{
            NSSF=360
            document.writeln(`NSSF contributions is ${NSSF}<br>`);
        }
    }else if(Tier===2){
        NSSF=grossSalary*0.06
        if(NSSF<=1080){
            document.writeln(`NSSF contributions is ${NSSF} <br>`)
        }else{
            NSSF=1080
            document.writeln(`NSSF contributions is ${NSSF} <br>`)
        }
    }

    var FringeTax; 
    var loan=parseInt(prompt("Have you taken any loan\n 1:Yes\n 2:No"));// a prompt box that allows user to indicate whether he or she has taken any loans
    if(loan===1){
        var currentDate= new Date();// used to get the current date
        var currentMonth = currentDate.getMonth();// used to get current month
        if(currentMonth>=1 && currentMonth<=3){// if statement use to sort out which taxation period to be applied
            FringeTax=grossSalary*0.07;
            document.writeln(`Your Fringe tax is ${FringeTax}<br>`);
        }else if(currentMonth>3 && currentMonth<=6){
            FringeTax=grossSalary*0.07;
            document.writeln(`Your Fringe tax is ${FringeTax}<br>`);
        }else if(currentMonth>6 && currentMonth<=9){
            FringeTax=grossSalary*0.08;
            document.writeln(`Your Fringe tax is ${FringeTax}`)
        }else if(currentMonth>9 && currentMonth<=12){
            FringeTax=grossSalary*9;
            document.writeln(`Your Fringe tax is ${FringeTax}`);
        }
    }else{

    }


    var netSalary= grossSalary-paye-NHIF-NSSF-FringeTax// calculates total deductions and the remaining amount is the the Net salary
   document.writeln(`Your Net Salary is ${netSalary}`)

}
taxation();// function declaration