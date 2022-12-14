// TASK: Aprogram that calculates an individual’s Net Salary by getting the inputs of basic salary and benefits.
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.


//created a function called netSalaryCalculator where all conditions will be set
function netSalaryCalculator () {

    //if basic salary is equal or less than 24000,  paye is 10 percent
    if (basicSalary <= 24000) {
        paye = basicSalary / 10;
    } 
    //if basic salary is greater than 24000 and less than or equal to 32333, paye is 25 percent
    else if (basicSalary >= 24001 && basicSalary <= 32333) {
        paye = (basicSalary * 0.25);
    } 
    //if basic salary is greater than 32333,  paye is 30 percent
    else if ((basicSalary > 32, 333)) {
        //30% PAYE for above 32,333
        paye = (basicSalary * 3) / 10;
    }
    console.log(`Paye:${paye}`);

    //nssf deductions is equal to 6 percent of basic salary (0.06)
    let nssf = (basicSalary * 0.06);
    console.log(`NSSF:${nssf}`);

    //nhif deductions 
    //if basic salary (BS) is equal or less than 5999, 150 is deducted
    if (basicSalary <= 5999) {
        nhif = 150;
    } 
    //if BS is equal or greater than 6000 and less than or equal to 7999, 300 is deducted
    else if (basicSalary >= 6000 && basicSalary <= 7999) {
        nhif = 300;
    } 
    //if BS is equal or greater than 8000 and less than or equal to 11999, 400 is deducted
    else if (basicSalary >= 8000 && basicSalary <= 11999) {
        nhif = 400;
    } 
    //if BS is equal or greater than 12000 and less than or equal to 14999, 500 is deducted  
    else if (basicSalary >= 12000 && basicSalary <= 14999) {
        nhif = 500;
    } 
    //if BS is equal or greater than 15000 and less than or equal to 19999, 600 is deducted  
    else if (basicSalary >= 15000 && basicSalary <= 19999) {
        nhif = 600;
    }
    //if BS is equal or greater than 20000 and less than or equal to 24999, 750 is deducted  
    else if (basicSalary >= 20000 && basicSalary <= 24999) {
        nhif = 750;
    } 
    //if BS is equal or greater than 25000 and less than or equal to 29999, 850 is deducted  
    else if (basicSalary >= 25000 && basicSalary <= 29999) {
        nhif = 850;
    } 
    //if BS is equal or greater than 30000 and less than or equal to 34999, 300 is deducted  
    else if (basicSalary >= 30000 && basicSalary <= 34999) {
        nhif = 900;
    }
    //if BS is equal or greater than 35000 and less than or equal to 39999, 950 is deducted   
    else if (basicSalary >= 35000 && basicSalary <= 39999) {
        nhif = 950;
    }
    //if BS is equal or greater than 40000 and less than or equal to 44999, 1000 is deducted  
    else if (basicSalary >= 40000 && basicSalary <= 44999) {
        nhif = 1000;
    }
    //if BS is equal or greater than 45000 and less than or equal to 49999, 1100 is deducted  
    else if (basicSalary >= 45000 && basicSalary <= 49999) {
        nhif = 1100;
    }
    //if BS is equal or greater than 50000 and less than or equal to 59999, 1200 is deducted  
    else if (basicSalary >= 50000 && basicSalary <= 59999) {
        nhif = 1200;
    } 
    //if BS is equal or greater than 60000 and less than or equal to 69999, 1300 is deducted  
    else if (basicSalary >= 60000 && basicSalary <= 69999) {
        nhif = 1300;
    } 
    //if BS is equal or greater than 70000 and less than or equal to 79999, 1400 is deducted  
    else if (basicSalary >= 70000 && basicSalary <= 79999) {
        nhif = 1400;
    } 
    //if BS is equal or greater than 80000 and less than or equal to 89999, 1500 is deducted  
    else if (basicSalary >= 80000 && basicSalary <= 89999) {
        nhif = 1500;
    } 
    //if BS is equal or greater than 90000 and less than or equal to 99999, 1600 is deducted  
    else if (basicSalary >= 90000 && basicSalary <= 99999) {
        nhif = 1600;
    } 
    //if BS is equal or greater than 100000, 1700 is deducted  
    else if (basicSalary >= 100000) {
        nhif = 1700;
    }
    console.log(`NHIF:${nhif}`);

    //formula for calculating net salary
    let netSalary = (basicSalary - (paye + nhif + nssf));
    console.log(`Net Salary:${netSalary}`);

}

//Declared basic salary variable and parsed it to an integer
let basicSalary = parseInt(prompt("Enter your basic salary in numbers: "));

//called the net salary calculator function with the basic salary as it's argument
netSalaryCalculator(basicSalary);
