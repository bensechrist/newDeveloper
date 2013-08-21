define([
  'jquery',
  'models/TodoCollection',
  'models/TodoItem'
], function($, todoCollection, TodoItem) {

  var AddItemFormView = Backbone.View.extend({
    el: "#inputForm",
    events: {
      "submit" : "handleFormSubmit"
    },
    initialize: function() {
      this.collection = todoCollection;
      this.$input = $(this.el).find("input[type='text']");
    },
    handleFormSubmit: function() {
      // Need to handle the form submit and ensure the page doesn't get refreshed
    }
  });

  return new AddItemFormView();

});
