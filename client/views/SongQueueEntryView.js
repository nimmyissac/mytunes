// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  //tagName: 'tr',

  template: _.template('<div class="row queue" ><div class = "col-sm-2"></div><div class = "col-sm-2">(<%= artist %>)</div><div class = "col-sm-5"><%= title %></div></div>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  }, 

  render: function() {
    console.log('render');
    return this.$el.html(this.template(this.model.attributes));
  }
});
