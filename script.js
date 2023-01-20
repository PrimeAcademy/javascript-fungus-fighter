$(document).ready(onReady);

let fungusHP = 100;
let apCost = 100;



// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    $(`.attack-btn`).on('click' , attack)
console.log(`Attack when button is weapon button is clicked` , attack);
// We are seeing the event of clicking on the weapon. When you click it changes the state and causes an attack



    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
function attack (){
    if($(this).hasClass("arcane-sceptre")) {
        apCost -= 12
        fungusHP -= 14
    }
    else if($(this).hasClass("entangle")){

    apCost -=23
    fungusHP -=9
    }
    else if ($(this).hasClass("dragon blade")){
        apCost -= 38
        fungusHP -= 47
    }
    else if ($(this).hasClass("star fire")){
        apCost -= 33
        fungusHP -=25
    }
    else {
        console.log("this isnt working");

    }
    render ();
}// We create a function for the attack. So when the user selects anything with the class of the different weapon names it causes an attack.

function render (){
    $('#hp-meter').val(fungusHP)
    console.log('We want to decrease the HP damage of Fungus' , fungusHP);
    $('#ap-meter').val(apCost)
    console.log('We want to decrease the AP Cost Bar', apCost);

}


