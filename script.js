let keyNYT = "rLqQ8GexB2ARIBGSMsR1ieuF8ElHABR2"
let NYTsearchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20100101&end_date=20100102&api-key=rLqQ8GexB2ARIBGSMsR1ieuF8ElHABR2";
//date yyyymmdd

let currencyURL = "https://api.exchangeratesapi.io/2010-01-12" //date YYYY-MM-DD

let NBAsearchURL = "https://free-nba.p.rapidapi.com/games/%7Bid%7D" //date YYYY-MM-DD

function searchNYT(){
$.ajax({
  url: NYTsearchURL,
  method: "GET"
})
.then (function (responseNYT) {
  console.log(responseNYT)
})
}

searchNYT()

function searchCurrency(){
$.ajax({
  url: currencyURL,
  method: "GET"
})
.then (function (responseCurrency){
  console.log(responseCurrency)
})
}

searchCurrency()

function searchBasketball(){
  $.ajax({
    url: NBAsearchURL,
    method: "GET"
  })
  .then (function(responseBasketball){
    console.log(responseBasketball)
  })
  
}

searchBasketballGiven()

function searchBasketballGiven(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://free-nba.p.rapidapi.com/games/20100201",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      "x-rapidapi-key": "7443a0383dmshd40080ac3c98240p1424a5jsn2542bbf6efd6"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

/* API key for Visual Crossing Weather
//let APIKeyVC = "HFS2SKT2Y8KUVY6FAG6KJAZ6";
//New York Query
let queryURLforNY = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&startDateTime=2020-10-22T00%3A00%3A00&endDateTime=2020-10-22T00%3A00%3A00&maxStations=-1&maxDistance=-1&contentType=json&unitGroup=us&locationMode=single&key=HFS2SKT2Y8KUVY6FAG6KJAZ6S&dataElements=default&locations=New%20York%2C%20New%20York"

$.ajax({
url: queryURLforNY,
method: "GET"
})
.then(function(response) {
    console.log(response);
});*/

bookCovers does not need personal API key
bookCoversURL = http://covers.openlibrary.org/b/$key/$value-$size.jpg
where key, value, and size must be specified
*/

function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".sample-section").offset();
    var header_height = $(".sample-header-section").outerHeight();
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
  }
  parallax_height();
  $(window).scroll(function() {
    parallax_height();
  });
  $(window).resize(function() {
    parallax_height();
  });


document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.datepicker');
  let options = {format: 'yyyy-mm-dd'};
  instances = M.Datepicker.init(elems, options);
}); 

