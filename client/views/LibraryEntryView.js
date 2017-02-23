// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',
  className: 'song-card',

  template: _.template('<img class="play-btn" src="./img/play.svg" /><div class="song-info"><span class="song-artist"><%= artist %></span><span class="song-title"><%= title %></span></div>'),

  events: {
    'click': function() {
      this.model.enqueue();
      // this.model.play();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
