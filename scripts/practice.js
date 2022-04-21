// //Astrid info
// let studentName=`Astrid`;
// let studentLastName=`Batres`;
// let studedntAge=25;
// let studentIsActive=true;

//arrays []
//objects {}
// let student1 ={
//     //attr:value
//     firstName:"Astrid",
//     lastName:"Batres",
//     age:25,
//     isActive:true
// }

// let student2 ={
//     //attr:value
//     firstName:"Anthony",
//     lastName:"Lane",
//     age:22,
//     isActive:true
// }

// let student3 ={
//     //attr:value
//     firstName:"Ben",
//     lastName:"Vance",
//     age:25,
//     isActive:true,
//     hobbies:["Listen to music", "read", "play Zelda"],
//     address:{
//         street:"Palm Street",
//         zip:"89895",
//         number:"262-k"
//     }
// }

// console.log(student1.firstName);
// console.log(student2["lastName"]);
// console.log(student3.hobbies[1]);//display read
// console.log(student3["address"]["zip"])//display the zip

/*challenge= create an object for a client with the attr:
firstName, latName, subscriptionType, active, credits

display info in console
*/

// let client1={
//     firstName: `Aldrian`,
//     lastName: `Almonte`,
//     subscription:{
//         subscriptionType:`Gold`,
//         isActive:true,
//         credits:16
//     }
// }


// let students = [
//     {
//         //attr:value
//         firstName:"Astrid",
//         lastName:"Batres",
//         age:25,
//         isActive:true,
//     },
//     {
//         firstName:"Anthony",
//         lastName:"Lane",
//         age:22,
//         isActive:true
//     },
//     {
//         firstName:"Ben",
//         lastName:"Vance",
//         age:25,
//         isActive:true,
//         hobbies:["Listen to music", "read", "play Zelda"],
//         address:{
//             street:"Palm Street",
//             zip:"89895",
//             number:"262-k"
//         }
//     }];

// console.log(students)
// console.log(students[0].firstName)




// function displayStudent(){
//     //travel the array

//     let tmp="";
//     let div=document.getElementById("students");


//     for(let i=0; i<students.length; i++){

//     //working
//     tmp +=`<li>${students[i].firstName}</li>`

//     div.innerHTML=tmp;

//     }
// }

//object constructor

//These are local vars <------------------->
//     function Students(fname,lname,age,isActive){
//         this.firstName=fname;
//         this.lastName=lname;
//         this.age=age;
//         this.isActive=isActive;
//     }

// let student1 = new Students("Astrid","Batres",25,true);
// let student2 = new Students("Alexis","Aldrete",25,true);

// console.log(student1,student2);


//Exercise:
//Create an object constructor function and two objects

//     function Motorcycle(make,model,year,lserviced){
//         this.mmake = make;
//         this.mmodel = model;
//         this.year = year;
//         this.lserviced = dateLastServiced
//     }

//     let user0 = new Motorcycle("Harley-Davidson","Road Glide","2015",03/05/2022);
//     let user1 = new Motorcycle("Harley-Davidson","Lowrrider","2020",04/12/2022);





// console.log(students[0].firstName)

// function displayStudent(){


// }

// displayStudent();


function Pet(pname,age,gender,pbreed,service,hname,cinfo){
    this.pname = petName;
    this.age = age;
    this.pbreed = petBreed;
    this.service = serviceProvided;
    this.hname = humanName;
    this.cinfo = contactInfo;

}

let pet1 = new Pet ("Scrappy",7,"Bulldog","nails","Alex","253-255-2555")
let pet2 = new Pet ("Clifford",12,"Red","full treatment","Aldrian","786-888-5225")
let pet3 = new Pet ("Crystal",8,"Pug","VIP","Ruby","206-565-2564")

console.log(Scrappy,Clifford,Crystal)