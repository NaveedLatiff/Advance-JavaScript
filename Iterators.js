// We can use iterators for arrays , strings and objects
// Iteratos give us an object which contain two keys value and done
// The  done is False but when the values  of array/str/obj finished it becomes true

// let x=[10,20,30]
// let y=x[Symbol.iterator]()
// console.log(y.next())   //10 
// y.next()
// console.log(y.next())  //30 

// let result=y.next()
// The loop will run until the done becomes true
// while(!result.done){
//     console.log(result.value)
//     result=y.next()
// }



// We can make our own Iterator
let Iterator=(arr)=>{
    let indx=0
    return{
        next(){
            if(indx<arr.length){
                return{
                    value:arr[indx++],
                    done:false
                }
            }
            else{
                return {
                    value:undefined,
                    done:true
                }
            }
        }
    }
}
let arr=[10,20,30]
let num=Iterator(arr)
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())

