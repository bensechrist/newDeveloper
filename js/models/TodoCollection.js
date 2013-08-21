
/**
 * Defines the collection that should be used to store all of the TodoItems.
 *
 * Note that, unlike the TodoItem definition, this file returns an actual instance of
 * the TodoCollection.  Since an actual instance is returned, all modules that depend
 * on this module will get the same collection.
 */
define([
  'backbone',
  'lib/backbone.localstorage.min',
  'models/TodoItem'  // Has a dependency on the TodoItem, as it's what it stores
], function(Backbone, LocalStorage, TodoItem) {

  var TodoCollection = Backbone.Collection.extend({
    model : TodoItem,  // This collection stores TodoItem model objects
    localStorage: new Backbone.LocalStorage('todos-backbone'),

    nextId: function () {
      if (!this.length) {
        return 1;
      }
      return this.last().get('id') + 1;
    }
  });
  
  return new TodoCollection();
});
