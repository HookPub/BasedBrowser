const {app, BrowserWindow} = require('electron')
const path = require('path')

function browse() {
  var query = document.getElementById("url-input").value;
  var url = "https://" + encodeURIComponent(query);
  window.open(url);
}
     function feelingBased() {
       var urls = [
         "https://www.bitchute.com/",
         ""
       ];
       var randomUrl = urls[Math.floor(Math.random() * urls.length)];
       window.open(randomUrl);
     }
     function search() {
       // Get the value of the search query input
       var query = document.getElementById("search-query").value;

       // Construct the URL for the DuckDuckGo search
       var url = "https://duckduckgo.com/?q=" + encodeURIComponent(query);

       // Redirect the user to the DuckDuckGo search results page
       window.open(url);
     }
