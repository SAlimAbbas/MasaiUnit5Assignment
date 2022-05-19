var Data = [
    {
        id: 1,
        name: "Peter",
        age: 24,
        salary: 64080
    },
    {
        id: 2,
        name: "Mohan",
        age: 23,
        salary: 24080
    },
    {
        id: 3,
        name: "Rajat",
        age: 25,
        salary: 49880
    }
];
// PART II
var Subject;
(function (Subject) {
    Subject[Subject["Chemistry"] = 0] = "Chemistry";
    Subject[Subject["Physics"] = 1] = "Physics";
    Subject[Subject["Maths"] = 2] = "Maths";
})(Subject || (Subject = {}));
var Data2 = [
    {
        id: 1,
        name: "Ankush",
        subject: Subject.Maths,
        numberofstudents: 25
    },
    {
        id: 2,
        name: "Ankur",
        subject: Subject.Chemistry,
        numberofstudents: 20
    },
    {
        id: 3,
        name: "Akshay",
        subject: Subject.Physics,
        numberofstudents: 27
    },
];
function SORT1(arr, by) {
    arr.sort(function (a, b) { return (a[by] - b[by]); });
    return arr;
}
var Output1 = SORT1(Data, "id");
console.log("Sort By ID:", Output1);
var Output2 = SORT1(Data, "salary");
console.log("Sort By Salary:", Output2);
var output3 = SORT1(Data2, "numberofstudents");
console.log("Sort By Subject in Teacher Type:", output3);
