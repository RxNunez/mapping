$(document).ready(function() {
  $("#groceries").submit(function(event) {
    var groceriesString = $("input#item").val();
    var lists = groceriesString.split(', ');
    for (var i = 0; i < lists.length; i++) {
      lists[i] = lists[i][0].toUpperCase()+lists[i].substring(1);
    }
    $(".array").text(lists.sort());
    $("#groceries").hide();
    event.preventDefault();
 });

});
