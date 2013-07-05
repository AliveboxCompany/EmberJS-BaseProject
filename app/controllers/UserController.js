define(
    [
        'app/models/user',
        'app/store/users',
        'app/models/movie'

    ],
    function(){

        console.log('UserController loaded...');

        App.UserController = Ember.ObjectController.extend({

        });

    }
);