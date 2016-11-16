// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  // tagName: 'tr',

  // template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  //tagName: 'div',

  template: _.template('<div class="row" ><div class = "col-sm-2"></div><div class = "col-sm-2">(<%= artist %>)</div><div class = "col-sm-5"><%= title %></div></div>'),

  events: {
    'click': function() {
     this.model.enqueue();
    }
  },

  render: function() {
    // console.log('attributes', this.model.attributes);
    return this.$el.html(this.template(this.model.attributes));
  }

});
