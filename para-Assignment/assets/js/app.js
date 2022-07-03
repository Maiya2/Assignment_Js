function findMyText(needle, replacement) {
    haystackText = document.getElementById("cont").innerHTML;
      
      var match = new RegExp(needle, "ig");     
      var replaced = "";
      if (replacement.length > 0) {
        replaced = haystackText.replace(match, replacement);
      }
  else{
    var boldText = "<div style=\"background-color: yellow; display: inline; font-weight: bold;\">" + needle + "</div>";
    replaced = haystackText.replace(match, boldText);
      }
      document.getElementById("cont").innerHTML = replaced;
  }