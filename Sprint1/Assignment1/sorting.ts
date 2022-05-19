//PART I
type User={
    id:number,
    name:string,
    age:number,
    salary?:number
}

const Data:User[]=[
    {
        id:1,
        name:"Peter",
        age:24,
        salary:64080,
    },
    {
        id:2,
        name:"Mohan",
        age:23,
        salary:24080,
    },
    {
        id:3,
        name:"Rajat",
        age:25,
        salary:49880,
    }
]

// PART II
enum Subject{Chemistry, Physics, Maths}
type Teachers={
    id:number,
    name:string,
    subject: Subject,  
    numberofstudents:number
}
const Data2:Teachers[]=[
    {
        id:1,
        name:"Ankush",
        subject:Subject.Maths,
        numberofstudents:25
    },
    {
        id:2,
        name:"Ankur",
        subject:Subject.Chemistry,
        numberofstudents:20
    },
    {
        id:3,
        name:"Akshay",
        subject:Subject.Physics,
        numberofstudents:27
    },
]



function  SORT1(arr:User[]|Teachers[],by:keyof User|keyof Teachers) {
    arr.sort((a:any,b:any) =>(a[by]-b[by]))
    
    return arr;
}


var Output1=SORT1(Data,"id");
console.log("Sort By ID:",Output1);
var Output2=SORT1(Data,"salary");
console.log("Sort By Salary:",Output2);
var output3=SORT1(Data2,"numberofstudents");
console.log("Sort By Subject in Teacher Type:",output3);

