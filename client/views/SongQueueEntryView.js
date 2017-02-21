// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

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
