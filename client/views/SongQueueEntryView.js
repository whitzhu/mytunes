// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function() {
    this.render();
  },

  render: function() {
    var html = `<div>${ this.model.get('title') } - ${ this.model.get('artist')}</div>`;
    return this.$el.html(html);
  }
});
