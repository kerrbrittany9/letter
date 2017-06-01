$(document).ready(function() {
$("#form").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    $(".name").append(nameInput);

    $("#letter").show();
  });
});
