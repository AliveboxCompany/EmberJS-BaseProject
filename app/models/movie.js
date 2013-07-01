define(
    function(){

        console.log('Movie Model loaded...');

        App.Movie = DS.Model.extend({
            id: DS.attr('string'),
            tittle: DS.attr('string')
        });

    }
);