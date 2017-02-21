// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  // collection: SongQueue,

  initialize: function() {
    this.render();
    this.collection.on('enqueue', this.render, this);
    this.collection.on('dequeue', this.render, this);
    this.collection.on('ended', this.render, this);
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        if ( song.get('artist') !== undefined ) {
          return new SongQueueEntryView({model: song}).render();
        }
      })
    );

    return this.$el;
  }

});
