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
        (apCost > 12)
            apCost -= 12
            fungusHP -= 14
        }
    
    else if($(this).hasClass("entangle")){

    apCost -=23
    fungusHP -=9
    }
    else if ($(this).hasClass("dragon-blade")){
        apCost -= 38
        fungusHP -= 47
    }
    else if ($(this).hasClass("star-fire")){
        apCost -= 33
        fungusHP -=25
    }
    else {
        console.log("this isnt working");

    }
   
    
    render ();
}
// We create a function for the attack. So when the user selects anything with the class of the different weapon names it causes an attack.


function render (){
    $('#hp-meter').val(fungusHP)
    console.log('We want to decrease the HP damage of Fungus' , fungusHP);
    // Now we have it so when you click on an attack the Fungus HP decreases
    $('#ap-meter').val(apCost)
    console.log('We want to decrease the AP Cost Bar', apCost);
    // Now we have it so when you click on an attack the AP cost decreases as well as fungus HP
    $('.hp-text').text(fungusHP)
    console.log("when the weapon button is clicked it will decrease the Fungus HP text from 100" , fungusHP);
// Now we have it so when the weapon button is clicked then it will decrease the text above the fungus HP bar starting at 100
    $('.ap-text').text(apCost)
    console.log('When we click the weapon button it will decrease the text above the AP bar', apCost);
// Now we have it so when the weapon button is clicked then it will decrease the text above the AP bar
   if (fungusHP <= 0){
    $(".freaky-fungus.walk").removeClass("walk").addClass("dead");
   } // We have it set up so if the fungus HP reaches 0 or  lower than the Fungus falls over dead
else if (apCost <= 0 ){
    $(".freaky-fungus.walk").removeClass("walk").addClass("jump");
}  //We have it set up so if the AP Cost is less than or equal to 0 before the Fungus HP falls to 0 then fungus does a jump
}
 if (apCost === 0){
        $(".attack-btn").attr("disabled",true);
        console.log('disable attack button if APCost =0' , apCost);
    }
   if (apCost < 12) {
    $(".arcane-sceptre").attr("disabled",true);
}
else if (apCost < 38) {
    $("dragon-blade").attr("disabled",true);
}
else if (apCost < 23 ) {
    $("entangle").attr("disabled",true);
   
}
else if (apCost < 33 ){
    $("star-fire").attr("disabled",true);
}
if (fungusHP <=0) {
    $('.freaky-fungus.walk').removeClass("walk").addClass("dead");

}
else if (apCost < 12 ) {
    $('.freaky-fungus.walk').removeClass("walk").addClass("jump");

}
