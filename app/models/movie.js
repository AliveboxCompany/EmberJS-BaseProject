define(
    function(){

        console.log('Movie Model loaded...');

        App.Movie = Ember.Object.extend();

        App.Movie.reopenClass({

            loadLinks: function() {
                var that = this;
                return Ember.Deferred.promise(function (p) {
                    p.resolve($.ajax({
                        type: "GET",
                        dataType: "jsonp",
                        url: "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?limit=10&country=ca&apikey=jv7ktqjfbzj9rxe2gkx5fvk5"
                    }).then(that.onLoadLinksResult));
                });
            },

            onLoadLinksResult: function(response) {
                var movies = [];
                response.movies.forEach( function (movie) {
                    movies.push( App.Movie.create(movie) );
                });
                return movies;
            },

            all: function() {
                return this.loadLinks().then(function(movies){
                    return movies;
                });
            }

        });

    }
);