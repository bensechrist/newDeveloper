
/**
 * Defines the basic TodoItem model.  The model has a basic set of defaults, which may be
 * overridden when a new instance is created.
 *
 * To create a new instance, one could run:
 * 
 *     var item = new TodoItem({
 *       description : "Some description"
 *     });
 *
 * This item will then have a description of "Some description" with the other properties
 * of the model defaulting to the defaults.
 */
define([
  'backbone'
], function(Backbone) {

  var TodoItem = Backbone.Model.extend({
    defaults: {
      description : "",
      created : new Date(),
      completed: false
    }
  });
  
  return TodoItem;
});
