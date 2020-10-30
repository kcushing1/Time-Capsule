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