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
// function displaySalonInfo({})

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
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("selGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputHname=document.getElementById("txtHname");
let inputCinfo=document.getElementById("txtCinfo");



function isValid(aPet){
    //return false when the pet is not valid
    //return true if the pet is valid
    let valid=true;
    if(aPet.petName.length==0){
        //if we arrived here it means that the name is not valid
        valid=false;
        console.error("Invalid Name")
    if(aPet.serviceProvided.length==0){
        valid=false;
        console.error("Invalid Service")
    if(aPet.contactInfo.length==0){
        valid=false;
        console.error("Invalid Contact Info")
    }
    }
    }

    return valid;//it could be true or false
}

function register(){
    //create the pet
    let thePet = new Pet (inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputHname.value,inputCinfo.value);
    if(isValid(thePet)==true){
       petSalon.pets.push(thePet)
        //push the pet into the array
        displayTable();
      

        //clear the inputs
        clearInputs(); 
    }
   
    
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
let Scrappy = new Pet ("Scrappy",7,"Male", "Bulldog","nails","Alex","253-255-2555");
let Clifford = new Pet ("Clifford",12,"Male","Red","full treatment","Aldrian","786-888-5225");
let Crystal = new Pet ("Crystal",8,"Female","Pug","VIP","Ruby","206-565-2564");

petSalon.pets.push(Scrappy,Clifford,Crystal)
displayTable();
