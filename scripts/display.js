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
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.petBreed}</p>
            <p>Service: ${pet.serviceProvided}</p>
            <p>Human: ${pet.humanName}</p>
            <p>Phone:${pet.contactInfo}</p>
            </div>
        `
    }
    document.getElementById("pets").innerHTML=tmp;
}


//display pets in table
function displayTable(){
    let tmp="";
    for (let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        <div class="pets">
        <table>
            <tr>
            <th>${pet.petName}</th>
            </tr>
            <tr>
            <tr>
            <td>Age:${pet.age}</td>
            </tr>
            <tr>
            <td>Gender: ${pet.gender}</td>
            </tr>
            <tr>
            <td>Breed: ${pet.petBreed}</td>
            </tr>
            <tr>
            <td>Service: ${pet.serviceProvided}</td>
            </tr>
            <tr>
            <td>Human: ${pet.humanName}</td>
            </tr>
            <tr>
            <td>Phone:${pet.contactInfo}</td>
            </tr>
           
        </div>
        </table>
        </div>
        `;
    document.getElementById("pets").innerHTML=tmp;
    }
}