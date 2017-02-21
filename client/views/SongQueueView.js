// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  collection: SongQueue,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.collection.map(function(song) {
      var mySong = new SongQueueEntryView({ model: song });
      mySong.render();
    });
    return this.$el;
  }

});
