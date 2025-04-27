// We write * with function name
function *generator(){
    yield "Naveed"   //Yield works as a pause(means nothing will print after this 
    // we have to call the function again using .next())
    //  and it will return an object with value and done keys  
    console.log("Learning")
    console.log("Generators")
    yield "Sarim"
    yield;    // If the yield is empty it will give undefined value 
}

let res=generator()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())


// we can print it using for of loop
// for(let val of res){
//     console.log(val)
// }

// We can create unlimited yield using loop
function *generateIt(){
    let num=20;
    while(true){
        yield(num++);
    }
}
let result=generateIt()
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())

// We can also print it using for of loop but we have to set the condition because if we not set the condition
// the loop will never stop
// for(let val of result){
//     if(val >30) return
//     console.log(val)
// }




// function *gen(){
    // let result=yield
    // We can also perform operation
    // let result=(yield)*2
    // console.log(result)
// }

// let x=gen()
// x.next()
// // We can pass the value to yield like this
// x.next(400)






// function *gen(){
//     let result=[yield,yield,yield]
//     console.log(result)
// }

// let x=gen()
// x.next()
// // if we want to pass many values to yield then we can make an array
// x.next(400)
// x.next(300)
// x.next(200)


function *gen(){
    // It will print an entrie array
    yield ["Naveed","Sarim"]
    // If we want to print the values of array one by one then add * with yield
    yield* ["Banana","Orange","Mango"]
}

let x=gen()
console.log(x.next())
console.log(x.next())
// After calling return function the next values will not print and the done become true
console.log(x.return("The End"))   //Also pass value to return function 
console.log(x.next())


