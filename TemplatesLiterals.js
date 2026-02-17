// const x = 19;
// const data = `My age is ${x}`; //  
// console.log(data) 
// console.log("---------")
// const obj = {
//     fname : "Ritik",
//     lname : "kumar",
//     age : 19,
//     isActive : true,
// }

// for(let i in obj){
//     console.log(typeof(i))
// }
// const arr =[1,2,3,4,5,6,7];
// for(let i in arr){
//     console.log(typeof(i))
// }

console.log("-------")
const obj = {
    fname: "Ritik",
    lname: "kumar",
    age: 19,
    isActive: true,
    hello: function fullName(){
        c = (`${this.fname} ${this.lname}`)
        return c;
    },
    address:{
        address_line_1:"Coding Thinker, Kasturba Nagar",
        address_line_1:"Chetak Bridge",
        City:"Bhopal",
        State : "MP",
        pincode:462023,
    },
    arr:[1,2,3,4,5],
    data:[1,2,3,4,5],
}

for(let i in obj){
    if(!Array.isArray(obj[i])){
        console.log(i)
    }
}
    
