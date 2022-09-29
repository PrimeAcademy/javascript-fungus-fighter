$(document).ready(onReady);
let timer;

const state = {
    hp: 100,
    ap: 100,
}

function onReady() {
    $('.arcane-sceptre').on('click', onArcaneSceptre);
    $('.entangle').on('click', onEntangle);
    $('.dragon-blade').on('click', onDragonBlade);
    $('.star-fire').on('click', onStarFire);
}

function onArcaneSceptre() {
    updateScores(-14, -12);
}

function onEntangle() {
    updateScores(-9, -23);
}

function onDragonBlade() {
    updateScores(-47, -38);
}

function onStarFire() {
    updateScores(-25, -33);
}

function updateScores(hp, ap) {
    state.hp += hp;
    state.ap += ap;

    state.hp = Math.max(state.hp, 0);
    state.ap = Math.max(state.ap, 0);

    state.hp = Math.min(state.hp, 100);
    state.ap = Math.min(state.ap, 100);

    // Regenerate!
    if (hp < 50 && !timer) {
        timer = setInterval(function() {
            updateScores(1, 0);
        }, 1000);
    }

    render();
}

function render() {
    // Render AP updates
    $('.ap-text').text(`${state.ap} AP`);
    $('#ap-meter').val(state.ap);

    // Render HP updates
    $('.hp-text').text(`${state.hp} HP`);
    $('#hp-meter').val(state.hp);

    // Check if mushroom is dead
    if (state.hp <= 0) {
        $('.freaky-fungus')
            .removeClass('walk')
            .addClass('dead')
    }

    // Check is AP is out
    if (state.ap <= 0) {
        $('.freaky-fungus')
            .removeClass('walk')
            .addClass('jump');

        $('.attacks button').prop('disabled', true);
    }
}