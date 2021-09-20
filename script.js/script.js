let happy = 0;
let energy = 0;
let name = prompt('Please enter a name for your pet.');
for (let i = 0; i < 6; i++) {
    let activity = prompt('Would you like to feed, pet, or walk your pet?');
    if (activity === "feed") {
        energy += 2;
    }
    else if (activity === "pet") {
        happy += 1;
    }
    else if (activity === "walk" && energy > 0) {
        happy += 2;
        energy -= 1;
    }
    else if (activity === "walk" && energy <=0) {
        alert(name + ' does not have enough energy to enjoy a walk.');
    }
    else {
        alert("That's not an available activity.");
    }
}
console.log(name + ' has ' + happy + ' happiness and ' + energy + ' energy.');