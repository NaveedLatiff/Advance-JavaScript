// let arr=[1,2,4,5]
// let copy=arr
// copy.push(6)
// // Here the changes will also add on original arr because the copy variable don't copy its value it will copy its address
// Refrence Copy
// console.log(arr)

// let name="Naveed"
// let copy=name
// copy="sarim"
// // Here the original value will not change because the copy variable copy its value not address
// console.log(name)

// let arr=[1,2,4,5]
// // By Destructuring
// let copy=[...arr]
// // Another Method
// // let copy=Object.assign([],arr)
// copy.push(6)
// // Here the changes will not add on original
// // This is Shallow Copy
// console.log(arr)


let arr=[1,2,3,[0,4,5]]
// Deep Copy
let copy=JSON.parse(JSON.stringify(arr))
copy[3][0]=10
console.log(arr)
// Remember
// In Deep copy if we have aa function in object then it will not copy in the copy variable 
// We can use  lodash library for that problem