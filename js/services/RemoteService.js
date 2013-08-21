
/**
 * This module defines a RemoteService that is to be used for fetching of items from
 * the "remote source."  In this case, it's just an XML file.  But, in the future, it can
 * be anything.
 */
define([
  'jquery'
], function($) {

  var RemoteService = function() {
    
    /**
     * Helper function used to parse out the xml response. The callback is provided with
     * each of the items in the xml source.
     * @param xmlResponse The xml body
     * @param callback A callback to provide the items to
     */
    function handleXmlResponse(xmlResponse, callback) {
      var items = Array();
      $(xmlResponse).find("item").each(function() {
        items.push({
          id :          parseInt( $(this).attr("id") ),
          description:  $(this).find("description").text()
        });
      });
    
      callback(items);
    };

    /**
     * Fetch all todo items that are stored in the "remote source"
     * @param callback A callback function to be called when items have been retrieved.
     */
    this.fetchItems = function(callback) {
      $.get("items.xml", function(data) { handleXmlResponse(data, callback) }, 'xml');
    };
    
  };
  
  return new RemoteService();
});
