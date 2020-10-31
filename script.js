//var for year
//var for month
//var for day

//let NYTDate = selectYear + selectMonth + selectDay
let NYTsearchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20100101&end_date=20100102&api-key=rLqQ8GexB2ARIBGSMsR1ieuF8ElHABR2";

//let currencyDate = selectYear + "-" + selectMonth + "-" + selectDay
let currencyURL = "https://api.exchangeratesapi.io/2010-01-12?base=USD"

function searchNYT(){
$.ajax({
  url: NYTsearchURL,
  method: "GET"
})
.then (function (responseNYT) {
  console.log(responseNYT)
  let articles = responseNYT.response.docs//auto response 10 items
  /*
  displayArticles()
  //show three articles on the page
  function displayArticles(){
    for (let i=0; i < 2; i++){
      //grab first three articles that are returned
      let headline + i = articles[i].headline.main
      $(".healine" + i +"-here").append(`<h2>
      ${headline + i}
      </h2>
      <h4 class="display-abstract abstract${i}>
      </h4>`)
  }
  //I know, I know, this is sloppy but I haven't figured out how to make it neater
  //when clicked, the abstract for that article displays
  $(".abstract0").on("click", function(){
    $(".abstract0").text(articles[0].abstract)
  })
  $(".abstract1").on("click", function(){
    $(".abstract1").text(articles[1].abstract)
  })
  $(".abstract2").on("click", function(){
    $(".abstract2").text(articles[2].abstract)
  })
}

  */
})//close NYT ajax response
}//close searchNYT function

searchNYT()

function searchCurrency(){
$.ajax({
  url: currencyURL,
  method: "GET"
})
.then (function (responseCurrency){
  console.log(responseCurrency)
  let rateNYC = responseCurrency.rates.USD
  //note that .toFixed(2) converts to a string; USD is 1
  let rateParis = responseCurrency.rates.EUR.toFixed(2)
  let rateTokyo = responseCurrency.rates.JPY.toFixed(2)
  let rateSaoPaulo = responseCurrency.rates.BRL.toFixed(2)
  let ratesCapeTown = responseCurrency.rates.ZAR.toFixed(2)
  console.log(rateNYC,rateParis,rateSaoPaulo,rateTokyo,ratesCapeTown)
})
}

searchCurrency()

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

