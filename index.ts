// Import stylesheets
import "./style.css";

$(document).ready(function() {
  $("#theme_switch").on("click", function() {
    toggleTheme();
  });

  function toggleTheme() {
    //switch between light and dark mode

    //if ($('#theme_switch').prop('checked')) {
    //    console.log('switch on');
    //  }
    //  else {
    //    console.log('switch off');
    //  }

    $("body").toggleClass("dark-background");
    $("#sub-title").toggleClass("dark-sub-title");
    $("#input-field").toggleClass("dark-input-field");
    $("#dark-switch-text").toggleClass("dark-switch-text");

    $("body").toggleClass("light-background");
    $("#sub-title").toggleClass("light-sub-title");
    $("#input-field").toggleClass("light-input-field");
    $("#light-switch-text").toggleClass("light-switch-text");
  }
});
