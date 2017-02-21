// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  // collection: SongQueue,

  initialize: function() {
    this.render();
  },

  render: function() {
    // this.collection.map(function(song) {
    //   var mySong = new SongQueueEntryView({ model: song });
    //   mySong.render();
    // });
    // return this.$el;

    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );

    return this.$el;
  }

});
