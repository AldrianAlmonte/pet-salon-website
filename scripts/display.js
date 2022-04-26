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
            <div class="pet-header">
                <h4>${pet.petName} </h4>
                <button>🗑️</button>
            </div>
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
    let tr="";
    for (let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tr+=`

        <tr id="${pet.id}" class="pet">
            <th>Pet Name</th>
            <td><button onclick="deletePet(${pet.id});">🗑️</button> ${pet.petName}</td>
            <td><b>Age: </b>${pet.age}</td>
            <td><b>Gender: </b>${pet.gender}</td>
            <td><b>Breed: </b>${pet.petBreed}</td>
            <td><b>Service: </b>${pet.serviceProvided}</td>
            <td><b>Human: </b>${pet.humanName}</td>
            <td><b>Phone: </b>${pet.contactInfo}</td>
        </tr>
        `;
        }
        document.getElementById("table").innerHTML=tr;
    }
