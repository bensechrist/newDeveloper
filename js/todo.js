
$(function() {

  /**
   * Helper function that generates the HTML for a single list item
   * @param string elementText The text to be displayed
   * @return string The HTML for the list item.
   */
  function getListElement(elementText) {
    // Remove all HTML tags
    var cleanedText = elementText.replace(/<\/?[^>]+(>|$)/g, ""); 
    return "<li><span>[X]</span> " + cleanedText + "</li>";
  };

  /**
   * Function that serves as the callback for the AJAX GET request for the XML data.
   * @param string xmlResponse The XML data provided in the AJAX HTTP response.
   */
  function handleXmlData(xmlResponse) {
    var $xml = $(xmlResponse);

    // Build out HTML for each todo item
    var items = "";
    $xml.find("item").each(function() {
      items += getListElement( $(this).find("description").text() );
    });

    // Put the html in the todo list
    $("#todoList").html(items);
  };

  // Fire off the AJAX GET for the xml data
  $.get('items.xml', handleXmlData, 'xml');

  // Bind event handler for clicking the span [X] elements
  $("#todoList").on('click', 'li span', function() {
    // Slide up the element. When it's done animating, remove it
    $(this).parent().slideUp().promise().done(function() {
      $(this).remove();
    });
  });

  // Add submit handler to the form to display the todo item
  $("form").submit(function() {
    var $item = $("#newItem");
    if ($item.val() == "")
      return;
    $("#todoList").append( getListElement($item.val()) );
    $item.val('');
    return false;  // Prevent the browser from submitting the form
  });
  
});
