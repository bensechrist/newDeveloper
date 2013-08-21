
/**
 * This module defines all of the dependencies that are needed for this app to run.
 * Dependencies include all necessary views, models, and services.  Each of these
 * dependencies may have their own dependencies.  
 *
 * Once everything is loaded, the callback will be called, providing each dependency.
 */
define([ 
  'jquery',
  'underscore',
  'backbone',
  'views/TodoListView',
  'views/AddItemFormView',
  'models/TodoCollection',
  'models/TodoItem',
  'services/RemoteService'
], function($, _, Backbone, ListView, AddForm, TodoCollection, TodoItem, RemoteService) {

  var fetchItems = function() {
    RemoteService.fetchItems(function(items) {
      for (var i = 0; i < items.length; i++) {
        TodoCollection.add(new TodoItem(items[i]));
      }
    });
  };
  
  return {
    initialize : function() {
      fetchItems();
    }
  };
  
});
