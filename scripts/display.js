//display the pets in list items
function displayPet(){
   
    let petsDiv= document.getElementById("pets");
    for(let li=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        let li = document.createElement("li");//creating the li tag
        let text = document.createTextNode(pet.name);
        li.appendChild(text);
        petsDiv.appendChild(li);
    }

    
    li.appendChild(text);
    petsDiv.appendChild(li);
}

//display the pets in cards


//display pets in table