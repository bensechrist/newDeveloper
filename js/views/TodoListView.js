/**
 * A module that defines a view that can be thought of as the "list" for the todo items.
 * The view holds the collection and binds to various events on the collection. It adds,
 * removes, or resets the list visible on the DOM based on these events from the 
 * collection.
 */
define([
  'jquery',
  'backbone',
  'underscore',
  'models/TodoCollection', //'todoCollection',
  'views/TodoListItemView'
], function($, Backbone, _, todoCollection, TodoItemView) {

  var TodoListView = Backbone.View.extend({
    el: "#todoList",
  
    /**
     * Function called automatically (like an init) that binds to the collection when 
     * various events occur
     */
    initialize: function() {
      this.collection = todoCollection;
      this.listenTo(this.collection, "reset", this.redraw);  // When the collection resets/empties
      this.listenTo(this.collection, "remove", this.remove); // When an element is removed
      this.listenTo(this.collection, "add", this.addItem);   // When an element is added
      this.redraw();
    },
  
    /**
     * Add a todo item to the view. Creates the new view for it and displays it.
     * @param TodoItem item The item to be added
     */
    addItem: function(item) {
      var view = this.createItemView(item);
      $(this.el).append(view.render().el);
    },
  
    /**
     * Removes a todo item from the list.
     * @param TodoItem item The TodoItem to be removed
     */
    remove: function(item) {
      item.destroy();
    },
  
    /**
     * Redraw the list from scratch.
     */
    redraw: function(eventName) {
      var $el = $(this.el).clone();
      $el.html('');
      _.each(this.collection.models, function(item) {
        $el.append( this.createItemView(item).render().el);
      }, this);
      $(this.el).html($el);
      return this;
    },
  
    /**
     * Helper method to created and manage a new ListItemView
     * @param TodoItem item The new TodoItem
     * @return A TodoItem_ListItemView for the TodoItem
     */
    createItemView: function(item) {
      var view = new TodoItemView({model: item});
      return view;
    }
  
  });

  return new TodoListView();
});
