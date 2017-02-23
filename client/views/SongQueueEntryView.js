// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'div',
  className: 'song-card song-queue-card',

  template: _.template('<div class="song-info song-queue-info"><span class="song-artist"><%= artist %></span><span class="song-title"><%= title %></span></div>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  initialize: function() {
    this.render();
    this.model.on('enqueue', this.render, this);
  },

  render: function() {
    // var html = `<div>${ this.model.get('title') } - ${ this.model.get('artist')}</div>`;
    // return this.$el.html(html);
    return this.$el.html(this.template(this.model.attributes));
  }
});
