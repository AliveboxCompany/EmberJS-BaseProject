define(
    function(){

        console.log('User Model loaded...');

        App.User = DS.Model.extend({
            id: DS.attr('string'),
            name: DS.attr('string')
        });

    }
);