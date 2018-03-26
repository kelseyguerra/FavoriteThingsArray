$(document).ready(function() {
  $("#fav").submit(function(event) {

    var items = ["favorite-stuff1", "favorite-stuff2", "favorite-stuff3", "favorite-stuff4"];

    items.forEach(function(item) {
    
      var userInput = $("input#" + item).val()
      $("h2#output").append(userInput);



      //$("." + item).text(userInput);
      //$("h2#output").show();
      event.preventDefault();
    });
  });
});
