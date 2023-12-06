// State variables
let characterAP = 100; // The character's attack points
let fungusHP = 100;    // The fungus's health points

// Attacks array containing objects with attack details
const attacks = [
    { name: 'arcaneScepter', apCost: 12, hpDamage: 14 },
    { name: 'entangle', apCost: 23, hpDamage: 9 },
    { name: 'dragonBlade', apCost: 38, hpDamage: 47 },
    { name: 'starFire', apCost: 33, hpDamage: 25 }
];

// Log ready state when the page is loaded
function onReady() {
    console.log("Ready to go!");
}

// Handle attacks when a button is clicked
function makeAttack(event, attackName) {
    console.log("Using", attackName);

    // Find the attack object from the attacks array based on the attackName
    const attack = attacks.find(attack => attack.name === attackName);

    const apCost = attack.apCost;      // Attack cost in attack points
    const hpDamage = attack.hpDamage;  // Damage dealt to fungus health points

    // Subtract the damage from the fungus HP. Fungus HP below zero becomes zero
    fungusHP = Math.max(fungusHP - hpDamage, 0);

    // Adjust character AP. If character AP is going to fall below zero, set it to zero.
    characterAP = Math.max(characterAP - apCost, 0);

    console.log("Character AP:", characterAP);
    console.log("Fungus HP:", fungusHP);

    // Render changes to the HTML
    render();
}

// Mushroom regenerates HP over time
function regen() {
    // Regenerate fungus HP if it's below 50 and still alive
    if (fungusHP < 50 && fungusHP > 0) {
        fungusHP++;
    }

    // Render changes to the HTML
    render();
}

// Render changes to the HTML
function render() {
    // Update the Attack Points (AP) display in the DOM
    const apMeter = document.getElementById('ap-meter');
    const apText = document.getElementById('ap-text');
    apMeter.value = characterAP;
    apText.innerHTML = `${characterAP} AP`;

    // Update the Health Points (HP) display in the DOM
    const hpMeter = document.getElementById('hp-meter');
    const hpText = document.getElementById('hp-text');
    hpMeter.value = fungusHP;
    hpText.innerHTML = `${fungusHP} HP`;

    // Update win state display based on fungus and character AP
    const fungus = document.getElementById('freaky-fungus');
    const buttons = document.querySelectorAll('.attack-btn');

    if (fungusHP === 0) {
        // Fungus dies - change class to 'dead'
        fungus.classList.replace('walk', 'dead');
    } else if (characterAP === 0) {
        // Fungus wins - change class to 'jump' and disable attack buttons
        fungus.classList.replace('walk', 'jump');
        buttons.forEach(button => button.setAttribute('disabled', true));
    }
}

// Initialization when the page is ready
onReady();

// Set up a timer to periodically regenerate fungus HP
setInterval(regen, 1000);

// Event listeners for attack buttons
document.querySelector('.attack-btn.arcane-scepter').addEventListener('click', () => makeAttack('arcaneScepter'));
document.querySelector('.attack-btn.entangle').addEventListener('click', () => makeAttack('entangle'));
document.querySelector('.attack-btn.dragon-blade').addEventListener('click', () => makeAttack('dragonBlade'));
document.querySelector('.attack-btn.star-fire').addEventListener('click', () => makeAttack('starFire'));
