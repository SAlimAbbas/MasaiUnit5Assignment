const tax_cal=(salary)=>{
    if(salary<0){
        return 
    }
    if(salary<=250000){
        return 0
    }
    if(salary>250000 && salary<=500000){
        var tax=salary-250000
        return (tax* (10/100))
    }

    if(salary>500000  && salary <=10000000){
        var tax=salary-500000
        return (tax* (20/100))
    }

    if(salary>10000000){
        var tax=salary-10000000
        return (tax* (20/100))
    }
}

module.exports=tax_cal