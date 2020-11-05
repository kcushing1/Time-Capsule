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
  let articlesNYT = responseNYT.response.docs//auto response 10 items
 
  displayArticles()
  //show three articles on the page
  function displayArticles(){
    for (let i=0; i < 3; i++){
      //grab first three articles that are returned
      let headline = articlesNYT[i].headline.main
      let abstractNYT = articlesNYT[i].abstract
      let articleURL = articlesNYT[i].web_url
      $("#article-title-"+i).html(headline)
      $(".card-content-"+i).append(`
      <p class="abstract${i}">${abstractNYT}
      </p>
      <p class="hidden weburl${i}">${articleURL}
      </p>`)
    }
  }
})//close NYT ajax response
}//close searchNYT function

searchNYT()

//on click, $this grab abstract and url
$(".save-article-0").on("click", function(){
  console.log("article onclick connected")
  readlater = $(".abstract0").text()
  readlaterURL = $(".weburl0").text()
  storeReadLater = {
    abstract: readlater,
    webURL: readlaterURL
  }
appendArticles()
})

$(".save-article-1").on("click", function(){
  console.log("article onclick connected")
  readlater = $(".abstract1").text()
  readlaterURL = $(".weburl1").text()
  storeReadLater = {
    abstract: readlater,
    webURL: readlaterURL
  }
appendArticles()
})

$(".save-article-2").on("click", function(){
  console.log("article onclick connected")
  readlater = $(".abstract2").text()
  readlaterURL = $(".weburl2").text()
  storeReadLater = {
    abstract: readlater,
    webURL: readlaterURL
  }
appendArticles()
})

function appendArticles(){
  if (localStorage.getItem("ReadArticlesLater")){
    storeReadLaterArr = JSON.parse(localStorage.getItem("ReadArticlesLater"))
} else {
    storeReadLaterArr = []
}

storeReadLaterArr.push(storeReadLater)
if (storeReadLaterArr.length > 8){
  storeReadLaterArr.split(0)
}

$("#read-later").append(`
<div>
  <p>${readlater}</p>
  <p>
    <a href="${readlaterURL}" target="_blank">
      Read Article Here
  </p>
</div>`)

localStorage.setItem("ReadLaterArticles",JSON.stringify(storeReadLater))
}

function searchCurrency(){
$.ajax({
  url: currencyURL,
  method: "GET"
})
.then (function (responseCurrency){
  let rateNYC = responseCurrency.rates.USD
  //note that .toFixed(2) converts to a string; USD is 1
  let rateParis = responseCurrency.rates.EUR.toFixed(2)
  let rateTokyo = responseCurrency.rates.JPY.toFixed(2)
  let rateSaoPaulo = responseCurrency.rates.BRL.toFixed(2)
  let rateCapeTown = responseCurrency.rates.ZAR.toFixed(2)

  //this also could look nicer
  $("#new-york-currency").html(`$ ${rateNYC}`)
  $("#paris-currency").html(`€ ${rateParis}`)
  $("#tokyo-currency").html(`¥ ${rateTokyo}`)
  $("#sao-paulo-currency").html(`R$ ${rateSaoPaulo}`)
  $("#cape-town-currency").html(`R ${rateCapeTown}`)
})
}

searchCurrency()

// API key for Visual Crossing:
//let APIKeyVC = "HFS2SKT2Y8KUVY6FAG6KJAZ6";

// plug in user specified date as the value into varible below. It will need to be in this format (YYYY-MM-DD) and a string i.e. may need to use .toString()
let date = "2020-10-22" 

//query for all 5 locations at once:
let queryURLforWeather = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&startDateTime=" + date + "T00%3A00%3A00&endDateTime=" + date + "T00%3A00%3A00&maxStations=-1&maxDistance=-1&contentType=json&unitGroup=us&locationMode=array&key=HFS2SKT2Y8KUVY6FAG6KJAZ6S&dataElements=default&locations=New%20York%2C%20New%20York%7CSao%20Paulo%2C%20Brazil%7CParis%2C%20France%7CTokyo%2C%20Japan%7CCape%20Town%2C%20South%20Africa"


// function for weather query; spits out City Name and Temp (in Fahrenheit) for each city 
function searchVisualCrossing () {
$.ajax({
    url: queryURLforWeather,
    method: "GET"
})
    .then(function(response) {
      console.log(response)
        let r = response.locations
        $("#new-york-weather").html(r[4].id + ", Temperature: " + r[4].values[0].temp + " °F, Wind Speed: " + r[4].values[0].wspd + "MPH")
        $("#paris-weather").html(r[1].id + ", Temperature: " + r[1].values[0].temp + " °F, Wind Speed: " + r[1].values[0].wspd + "MPH")
        $("#tokyo-weather").html(r[0].id + ", Temperature: " + r[0].values[0].temp + " °F, Wind Speed: " + r[0].values[0].wspd + "MPH")
        $("#sao-paulo-weather").html(r[3].id + ", Temperature: " + r[3].values[0].temp + " °F, Wind Speed: " + r[3].values[0].wspd + "MPH")
        $("#cape-town-weather").html(r[2].id + ", Temperature: " + r[2].values[0].temp + " °F, Wind Speed: " + r[2].values[0].wspd + "MPH")
})}

searchVisualCrossing();

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

// Allows us to utilize the chosen date
$("#start").on("click", function(){
  let chosenDate = instances.toString();
})

displayReadLater()

function displayReadLater(){
    if (localStorage.getItem("ReadArticlesLater")){
    let readLaterArr = localStorage.getItem(JSON.parse("ReadLaterArticles"))

    console.log(readLaterArr)
  
    for (let j = 0; j< readLaterArr.length; j++){
      let grabReadLater = readLaterArr[j].abstract
      let grabReadLaterURL = readLaterArr[j].webURL

      console.log(grabReadLater + " is abstract")
      console.log(grabReadLaterURL +"is URL")

      $("#read-later").append(`
      <div>
        <h6>${grabReadLater}</h6>
        <p>
          <a href="${grabReadLaterURL}" target="_blank">
            Read Article Here
        </p>
      </div>`)
    }
    $("#welcome-to-read-later").addClass("hidden")
  } else {
    console.log("local storage says "+ localStorage.getItem("ReadArticlesLater"))
    console.log("nothing in readLaterArr")
  }
}
