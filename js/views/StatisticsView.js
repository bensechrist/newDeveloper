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
      this.listenTo(this.collection, "add", this.render);
      this.listenTo(this.collection, "remove", this.render);
    },
    render: function() {
      var data = { numItems: this.collection.models.length };
      $(this.el).html( this.template(data) );
    }
  });

  return new StatisticsView();
});