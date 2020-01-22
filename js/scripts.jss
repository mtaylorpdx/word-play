$(document).ready(function() {
  $("form").submit(function(event) {

    var sentence = $("input#words").val();
    var words = sentence.split(" ");
    var selectWords = words.filter(word => word.length > 3);
    selectWords.reverse();
    selectWords.join();

    alert(selectWords);



    event.preventDefault();
  });
});