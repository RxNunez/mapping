$(document).ready(function() {
  $("#groceries").submit(function(event) {
    var groceriesString = $("input#item").val().toUpperCase();
    var lists = groceriesString.split(', ');
    $(".array").text(lists.sort());
    $("#groceries").hide();
    event.preventDefault();
 });

});
