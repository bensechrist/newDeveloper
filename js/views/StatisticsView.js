define([
  'backbone',
  'jquery',
  'underscore',
  'text!templates/statistics.html',  // Load the template text
  'models/TodoCollection'
], function(Backbone, $, _, template, todoCollection) {

  var StatisticsView = Backbone.View.extend({
    el : "#statistics",  // Bind to the element with id "statistics" that's already on the page
    template: null,
    initialize: function() {
      this.collection = todoCollection;
      this.template = _.template( template );
      this.collection.bind("add", this.render, this);
      this.collection.bind("remove", this.render, this);
    },
    render: function() {
      var data = { numItems: this.collection.models.length };
      $(this.el).html( this.template(data) );
    }
  });

  return new StatisticsView();
});