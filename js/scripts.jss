$(document).ready(function() {
  $("form#word").submit(function(event) {
    event.preventDefault();
    var sentenceArray = ["word"];
    alert (sentenceArray);

  });
});