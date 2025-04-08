// let name="Naveed"
// let section="B"

// // If the name of key and value is same then we can write like this
// let obj={
//     name,
//     section
// }
// console.log(obj)


// let name="Naveed"
// let object={
//     // Here By writing name inside the [] we can get "Naveed"
//     [name]:"Latif"
// } 
// console.log(object)



// Easy Way to make function in object
// let obj={
//     // If the name of Function contain spaces then we write it in '' like this 'show salam'
//     show(){
//         console.log("Assalam Alaikum")
//     }
// }
// console.log(obj.show())


// It will print an object
function practice(name,section){
    return {name,section}
}
console.log(practice("Naveed","B"))