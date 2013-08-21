
/**
 * Defines a view that is used to handle the "add an item" form.
 */
define([
  'jquery',
  'models/TodoCollection',
  'models/TodoItem'
], function($, todoCollection, TodoItem) {

  var AddItemFormView = Backbone.View.extend({
    el: "#inputForm",  // Bind this view to the element with id="inputForm"
    
    events: {
      "submit" : "handleFormSubmit"  // When a submit occurs, call this.handleFormSubmit
    },
    
    initialize: function() {
      this.collection = todoCollection;
      this.$input = $(this.el).find("input[type='text']");
    },
    
    /**
     * Should handle the form submit by creating a TodoItem and adding it to the
     * collection.
     */
    handleFormSubmit: function() {
      var val = this.$input.val();
      if (val != "") {
        var item = new TodoItem({
          description: val,
          id: this.collection.nextId()
        });
        this.collection.add(item);
      }
      this.$input.val('');
      return false;
    }
    
  });

  return new AddItemFormView();
});
