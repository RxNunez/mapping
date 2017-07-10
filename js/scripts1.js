$(document).ready(function() {
  $("#words").submit(function(event) {
    var wordString = $("input#item").val();
    var lists = wordString.split(' ');
    var newArray = [];
    for (var i = 0; i < lists.length; i++) {
      lists[i] = lists[i][0].toUpperCase()+lists[i].substring(1);
      if (lists[i].length >= 3){
        newArray.push(lists[i]);

      }
    }
    newArray.reverse();
    newArray = newArray.join(' ');
    alert(newArray);

    // $(".array").text(lists.sort());
    $("#words").hide();

    event.preventDefault();
 });

});
