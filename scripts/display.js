//display the pets in list items
function displayPet(){
   //creating the text
    let petsDiv= document.getElementById("pets");
    // petsDiv.innerHTML=""; c//clear field
    let tmp=""
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];//get each pet
        tmp+=`<li>${pet.petName} --- ${pet.age}</li>`//concatenation
        console.log(tmp);

        // let li = document.createElement("li");//creating the li tag
        // let text = document.createTextNode(pet.name);
        // li.appendChild(text);
        // petsDiv.appendChild(li);
    }
    document.getElementById("pets").innerHTML=tmp;
}

//display the pets in cards
function displayCards(){
    let tmp="";
    for(let i=0; i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        <div class="pet">
            <h4>${pet.petName}</h4>
            <p>Age:${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.petBreed}</p>
            <p>${pet.serviceProvided}</p>
            <p>${pet.humanName}</p>
            <p>${pet.contactInfo}</p>
            </div>
        `
    }
    document.getElementById("pets").innerHTML=tmp;
}


//display pets in table