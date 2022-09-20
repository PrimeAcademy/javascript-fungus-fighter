$(document).ready(onReady);

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
    state.hp -= 14;
    state.ap -= 12;

    state.hp = Math.max(state.hp, 0);
    state.ap = Math.max(state.ap, 0);

    render();
}

function onEntangle() {
    state.hp -= 9;
    state.ap -= 23;

    state.hp = Math.max(state.hp, 0);
    state.ap = Math.max(state.ap, 0);

    render();
}

function onDragonBlade() {
    state.hp -= 47;
    state.ap -= 38;

    state.hp = Math.max(state.hp, 0);
    state.ap = Math.max(state.ap, 0);

    render();
}

function onStarFire() {
    state.hp -= 25;
    state.ap -= 33;

    state.hp = Math.max(state.hp, 0);
    state.ap = Math.max(state.ap, 0);

    render();
}

function render() {
    // Render AP updates
    $('.ap-text').text(`${state.ap} AP`);
    $('#ap-meter').val(state.ap);

    // Render HP updates
    $('.hp-text').text(`${state.hp} AP`);
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