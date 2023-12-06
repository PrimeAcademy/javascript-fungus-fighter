// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let playerAP = 100
let monsterHP = 100

// make array for attacks, will 
// eventually be accessed by buttons in HTML

let attacks = [
    {
        name: 'arcaneScepter',
        apCost: 12,
        hpDamage: 14
    },
    {
        name: 'entangle',
        apCost: 23,
        hpDamage: 9
    },
    {
        name: 'dragonBlade',
        apCost: 38,
        hpDamage: 47
    },
    {
        name: 'starFire',
        apCost: 33,
        hpDamage: 25
    }
];

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()