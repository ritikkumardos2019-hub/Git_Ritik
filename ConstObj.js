// const arr = ["Ritik","kumar",19,"true"]
// const obj = {fname:"Ritik",lname:"kumar",age:19,isActive:"true"}
// obj.age = 20
// obj.hello = "hii"
// console.log(obj)
// console.log(obj.fname)
// console.log(arr)

// const obj = {
//     fname: "Ritik",
//     lname: "kumar",
//     age: 19,
//     isActive: true,
//     hello: function sayHello(){
//         console.log(`Hii, How are you ${this.fname}`)
//     }
// }
// obj.hello()
// for(i in obj){
//     if(typeof(obj[i]) !==  'function' && typeof(obj[i]) !== 'boolean'){
//         console.log(i)
//         // console.log(typeof(obj[i]))
//     }
    
// }
// console.log("-------")
// for(i in obj){
    
//     console.log(obj[i])
// }
const obj = {
    fname: "Ritik",
    lname: "kumar",
    age: 19,
    isActive: true,
    hello: function fullName(){
        c = (`${this.fname} ${this.lname}`)
        return c;
    }
}
const keys = Object.keys(obj)
console.log(keys)
console.log("--------")
const length = Object.keys(obj).length
console.log(length)
console.log("--------")
const value = Object.values(obj)
console.log(value)
console.log("---------")
const entries = Object.entries(obj)
console.log(entries)

// console.log(obj.hello())
// console.log("---------")
// for(let i in obj){
//     console.log(i)
// }
// console.log("--------")
// for(let i in obj){
//     console.log(obj[i])
// }
// console.log("---------")
// for(let i in obj){
//     console.log(typeof(i))
// }
// console.log("---------")
// for(let i in obj){
//     console.log(typeof(obj[i]))
// }
// console.log("----------")
// for(let i in obj){
//     if(typeof(obj[i]) !== "function" && typeof(obj[i]) !== 'boolean'){
//         console.log(i)
//     }
// }
// console.log("--------- ")
// for(let i in obj){
//     console.log(typeof(typeof(obj[i])))
// }
