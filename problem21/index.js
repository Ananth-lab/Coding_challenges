var myArray = [];
class Employee
{
    constructor(Name,Salary){
        this.Name = Name;
        this.Salary = Salary;
    }
    pushing(){
        myArray.push([this.Name, this.Salary])
    }
}
var person1 = new Employee("Ananth",50000)
person1.pushing()
var person2 = new Employee("Akash",60000)
person2.pushing()
var person3 = new Employee("Ananda",70000)
person3.pushing()
var person4 = new Employee("Ankit",90000)
person4.pushing()
var person5 = new Employee("Aditya",20000)
person5.pushing()
myArray.sort((a,b) => {
    if(a[1] > b[1]){
        return -1;
    }
    if(a[1] < b[1]){
        return 1;
    }
    if(a[1] == b[1]){
        return 0;
    }
});
console.log(myArray)
