$(function () {

    the_game = function () {

        if (check_egg_hits_floor(easteregg1) || check_egg_hits_basket(easteregg1)) {
            set_egg_to_initial_position(easteregg1);
        } else {
            egg_down(easteregg1);
        }

        if (check_egg_hits_floor(easteregg2) || check_egg_hits_basket(easteregg2)) {
            set_egg_to_initial_position(easteregg2);
        } else {
            egg_down(easteregg2);
        }

        if (check_egg_hits_floor(easteregg3) || check_egg_hits_basket(easteregg3)) {
            set_egg_to_initial_position(easteregg3);
        } else {
            egg_down(easteregg3);
        }

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);

});