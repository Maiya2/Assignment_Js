// var _name = "sumaya";
// _name= "abdul majeed"
// console.log(_name)


// let _name = "sumaiya"
// _name= "abdul majeed"
// console.log(_name);

// const _name = "sumaiya"
// fname = "abdul majeed"
// console.log(_name);

//functions..................................
// function greet(name){
// return "hello " + "" + name;
// }
// console.log(greet("sumaiya"));

//functions-2..................................
// let greet = (name) => {
//     return "hello " + "" + name;
// };
// console.log(greet("sumaiya"));

//tempalte-literals.......................
// let greet = (name,age,gender) => {
// return`Hello ${name} Your ${age} yeras old and your cute ${gender}` 
// }
// document.write(greet(`sumaiya`, `24`,`female`));

// object destructuring....................................
// let contacts ={
//     name: "sumaiya",
// lastname: "shaikh",
//     phone:03102558,
//     age:24,
// };
// let {name,lastname,phone,age} = contacts;
// document.write(`my name is ${name} ,${lastname} my phone number${phone} and ,y age${age}`)

//Arrays  destructuring....................................
// let myprog = [`js`,`php`, `c`, `java`,`phyton`]
// let [top1,top2,top3,top4,top5] = myprog
// console.log(`myfrvt language is ${top5}`)

//Arrays  destructuring simple..................................
// let myprog = [`js`,`php`, `c`, `java`,`phyton`]
// let [top1,,top3,,top5] = myprog
// console.log(`my frvt language is ${top3}`)

//promiss............................................
// const mypromise = new Promise((resolved, rejected) => {
//     const a = 5,  b = 7;
//     const c = a + b ;
//      if (c=== 4 ){
//         resolved(`yes!, ${a} + ${b}= 4`);
//      }else{
//         rejected(`no!,${a}+${b}!= 4`); 
//         }
// });

// mypromise.then((m) => {
//     console.log(m);
// }).catch((err) => {
//     console.log(err);
// });


//spread operator....................
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[7,8,9];
// arr1=[...arr1,4,5, ...arr2, ...arr3, 11,12,13]
// document.write(arr1)

//rest operator....................
// fun (`jimin`,`jk `,`Rm `,`suga`,`v`,`jin`,`sumaiya `);

// function fun (a,b,...c){ 
// console.log(`bts song ${a} and ${b}`)
// console.log(c);
// console.log(c [0]);
// console.log(c.lenght);
// console.log(c.indexOf(Rm))
// }