// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function() {
      this.remove(this.at(0));
      if ( this.length !== 0 ) {
        this.playFirst();
      }
    }, this);
    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);
    this.on('enqueue', function(song) {
      this.add(song);
      console.log('what is this', this, 'length', this.length);
      // if (this.length === 1) {
      //   this.playFirst();
      // }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

});