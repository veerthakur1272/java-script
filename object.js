
// let text="this is string"; //string
// let arr1=["veer",19,"bhopal"]  //array

// //Object
// //key:value;

// let student={
//     name :"Veer",
//     age:19,
//     city:"Bhopal",
//     welcome:function(){
//         console.log(`Welcomre to ${this.name} Home`);
//     },
//     fruits:["Apple","Mango","Banana","Avacodo"]
//     //name: "ansh"
// }
// console.log(student.fruits[2]);

// console.log(student.age); //acces 19

// student.email="veer@gmail.com";  //new added data

// student.age =20; //update

// // delete student.name;  //delete

// student.welcome()

// // console.log(student)




             //Destructure

// let student={
//     Name:"veer",
//     Age:19,
//     city:"Bhopal"
// }
// let{Name,age,city}=student;  //Destructring
// console.log(city)


             //Spread

// let student1={
//     Name:"Veer",
//     Age:19,
// }

// let student2={
//     City:"Bhopal",
//     Mobile:12345
// }

// let newobj={...student1,...student2}
// console.log(newobj);

let array1=[1,2,3]
let newarry=[0,...array1,4,5,6]
console.log(newarry);