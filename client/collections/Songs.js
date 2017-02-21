// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.getData();
  },

  getData: function() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      method: 'GET',
      context: this,
      async: false,
      contentType: 'application/json',
      success: function (data) {
        var context = this;
        data.results.forEach(function(song) {
          context.add(song);
        });
      },
      error: function (data) {
        console.error('mytunes: Failed to get songs', data);
      }
    });
  },
});