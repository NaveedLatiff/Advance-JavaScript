// let arr=[2,3,4,5]
// Rest will take the remaining values left in the arr and give it in an array
// let [a,b,...rest]=arr
// let [a,,...rest]=arr
// console.log(rest)

// // Same we can do for object
// let obj={
//     name:"naveed",
//     semester:"3",
//     section:"B"

// }
// Rest will take the remaining values left in the obj and give it in an obj
// let {name,...rest}=obj
// console.log(rest)


let sum=(name,...args)=>{
    console.log(args)   //Here rest(args) will create an array  
    let sum=0
    for(let i in args){
        sum=sum+args[i]
    }
    console.log(sum)
}
sum("Naveed",2,3,4)