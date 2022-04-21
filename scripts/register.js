let petSalon={
    name:"The Fashion Pet Salon",
    address:{
        street:"Ave University",
        number:"787",
        zip:"23456"
    },
    hours:{
        open:"9.00 a.m.",
        close:"8.00 p.m."
    },
    pets:[] 
}
// console.log(petSalon)
// function displaySalonInfo({
    
// })

function Pet(pname,age,gender,pbreed,service,hname,cinfo){
    this.petName=pname;
    this.age=age;
    this.gender=gender;
    this.petBreed=pbreed;
    this.serviceProvided=service;
    this.humanName=hname;
    this.contactInfo=cinfo;

}

//get the info from the inputs and store the info
let inputName=document.getElementById("txtName");
let inputAge=document.getAnimations("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputHname=document.getElementById("txtHname");
let inputCinfo=document.getElementById("txtCinfo");

function register(){
    //create the pet
    let thePet = new Pet (inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputHname.value,inputCinfo.value);
    console.log(thePet);

    //push the pet into the array

    //clear the inputs
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputHname.value="";
    inputCinfo.value="";
}

//Pets
let Scrappy = new Pet ("Scrappy",7,"Bulldog","nails","Alex","253-255-2555");
let Clifford = new Pet ("Clifford",12,"Red","full treatment","Aldrian","786-888-5225");
let Crystal = new Pet ("Crystal",8,"Pug","VIP","Ruby","206-565-2564");


// console.log(pet1,pet2,pet3)