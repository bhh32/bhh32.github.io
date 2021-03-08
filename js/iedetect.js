// Internet Explorer 6-11
var isIE = false || !!document.documentMode;

if (isIE) {
  window.alert("This page is not supported by Internet Explorer and may not display properly.\n\n"
                + "If you'd like to view the page with all of its rich features and content "
                + "please use Mozilla Firefox, Google Chrome, Opera, or Microsoft Edge.");
}
