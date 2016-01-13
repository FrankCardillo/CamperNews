$(document).ready(function() {

  $("img").addClass("authorImages");
  $("a").addClass("linkClass");
  $(".col-xs-1").addClass("newsFormatting");
  $("p").addClass("paragraphs");

  var links = document.getElementsByClassName("linkClass");
  var images = document.getElementsByClassName("authorImages");
  var paras = document.getElementsByClassName("paragraphs");
  var apiURL = "http://www.freecodecamp.com/news/hot";

  $.get(apiURL, function(data) {

    for (var i = 0; i < links.length; i++) {
      
      links[i].text = data[i].headline;
      links[i].href = data[i].link;
      images[i].src = data[i].author.picture;
      paras[i].innerHTML = "By: " + data[i].author.username;
      if (data[i].author.username === undefined) {
        paras[i].text = "By: unknown";
      }
    }
  });

});