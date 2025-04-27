// We use optional chaining to avoid errors. (?.)

let student={
    name:"Naveed",
    lastName:"Latif",
    rollNo:123,
    show(){
     return this.name+" "+this.lastName;   
    }
}
// This means if you have student then go to student.class else  show error that student is not defined
// console.log(student?.class)

// This means if you have student then go to student.class and then student.class.section
// This donot give error because it will stop at class and show undefined if we donot use optional chaining then
// it shows that section is not defined
// console.log(student?.class?.section)

console.log(student.show())

// This means if student.show exists then it will call it else it will show undefined
console.log(student.show?.())

