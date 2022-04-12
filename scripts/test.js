// //Astrid info
// let studentName=`Astrid`;
// let studentLastName=`Batres`;
// let studedntAge=25;
// let studentIsActive=true;

//arrays []
//objects {}
let student1 ={
    //attr:value
    firstName:"Astrid",
    lastName:"Batres",
    age:25,
    isActive:true
}

let student2 ={
    //attr:value
    firstName:"Anthony",
    lastName:"Lane",
    age:22,
    isActive:true
}

let student3 ={
    //attr:value
    firstName:"Ben",
    lastName:"Vance",
    age:25,
    isActive:true,
    hobbies:["Listen to music", "read", "play Zelda"],
    address:{
        street:"Palm Street",
        zip:"89895",
        number:"262-k"
    }
}

// console.log(student1.firstName);
// console.log(student2["lastName"]);
// console.log(student3.hobbies[1]);//display read
// console.log(student3["address"]["zip"])//display the zip

/*challenge= create an object for a client with the attr:
firstName, latName, subscriptionType, active, credits

display info in console
*/

let client1={
    firstName: `Aldrian`,
    lastName: `Almonte`,
    subscription:{
        subscriptionType:`Gold`,
        isActive:true,
        credits:16
    }
}


let students = [
    {
        //attr:value
        firstName:"Astrid",
        lastName:"Batres",
        age:25,
        isActive:true,
    },
    {
        firstName:"Anthony",
        lastName:"Lane",
        age:22,
        isActive:true
    },
    {
        firstName:"Ben",
        lastName:"Vance",
        age:25,
        isActive:true,
        hobbies:["Listen to music", "read", "play Zelda"],
        address:{
            street:"Palm Street",
            zip:"89895",
            number:"262-k"
        }
    }];

// console.log(students)
// console.log(students[0].firstName)


function displayStudent(){
    //travel the array

    let tmp="";
    let div=document.getElementById("students");


    for(let i=0; i<students.length; i++){

    //working
    tmp +=`<li>${students[i].firstName}</li>`

    div.innerHTML=tmp;

    }
}
displayStudent();