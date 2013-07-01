define(
    function(){

        console.log('Users Store loaded...');

        App.Store = DS.Store.extend({
            revision: 12,
            url:'http://localhost:8000/main/'
        });

    }
);