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
  let articlesNYT = responseNYT.response.docs//auto response 10 items
 
  displayArticles()
  //show three articles on the page
  function displayArticles(){
    for (let i=0; i < 3; i++){
      //grab first three articles that are returned
      let headline = articlesNYT[i].headline.main
      let abstractNYT = articlesNYT[i].abstract
      let articleURL = articlesNYT[i].web_url
      $("#articles").append(`<p>
      ${headline}
      </p>
      <p class="abstract">${abstractNYT}
      </p>
      <p class="hidden weburl">${articleURL}
      </p>`)
    }
  }
})//close NYT ajax response
}//close searchNYT function

searchNYT()

//on click, $this grab abstract and url
$(".read-later").on("click", function(){
  let readlater = $(this).find(".abstract").text
  let readlaterURL = $(this).find(".weburl").text
  let storeReadLater = {
    abstract: readlater,
    webURL: readlaterURL
  }

  if (localStorage.getItem(JSON.parse("ReadArticlesLater")) == ""){
    storeReadLaterArr = []
  } else {
    storeReadLaterArr = localStorage.getItem(JSON.parse("ReadArticlesLater"))
  }

  storeReadLaterArr.push(storeReadLater)
  if (storeReadLaterArr.length > 8){
    storeReadLaterArr.split(0)
  }

  $("#read-later").append(`
  <div>
    <h4>${readlater}</h4>
    <p>
      <a href="${readlaterURL}" target="_blank">
        Read Article Here
    </p>
  </div>`)
  localStorage.setItem(JSON.stringify("ReadLaterArticles",storeReadLater))
})


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
  let rateCapeTown = responseCurrency.rates.ZAR.toFixed(2)

  //this also could look nicer
  $("#new-york").append(`<p>$ ${rateNYC}</p`)
  $("#paris").append(`<p>€ ${rateParis}</p`)
  $("#tokyo").append(`<p>¥ ${rateTokyo}</p`)
  $("#sao-paulo").append(`<p>R$ ${rateSaoPaulo}</p`)
  $("#cape-town").append(`<p>R ${rateCapeTown}</p`)
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
        let r = response.locations
        $("#new-york").html(r[4].id + ", Temp = " + r[4].values[0].temp + " °F, Wind Speed = " + r[4].values[0].wspd + "MPH")
        $("#paris").html(r[1].id + ", Temp = " + r[1].values[0].temp + " °F, Wind Speed = " + r[4].values[0].wspd + "MPH")
        $("#tokyo").html(r[0].id + ", Temp = " + r[0].values[0].temp + " °F, Wind Speed = " + r[4].values[0].wspd + "MPH")
        $("#sao-paulo").html(r[3].id + ", Temp = " + r[3].values[0].temp + " °F, Wind Speed = " + r[4].values[0].wspd + "MPH")
        $("#cape-town").html(r[2].id + ", Temp = " + r[2].values[0].temp + " °F, Wind Speed = " + r[4].values[0].wspd + "MPH")
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
})


displayReadLater()

function displayReadLater(){
    if (localStorage.getItem("ReadArticlesLater")){
    let readLaterArr = localStorage.getItem(JSON.parse("ReadLaterArticles"))
  
    for (let j = 0; j< readLaterArr.length; j++){
      let grabReadLater = readLaterArr[j].abstract
      let grabReadLaterURL = readLaterArr[j].webURL
      $("#read-later").append(`
      <div>
        <h4>${grabReadLater}</h4>
        <p>
          <a href="${grabReadLaterURL}" target="_blank">
            Read Article Here
        </p>
      </div>`)
    }
  } else {
    $("#read-later").html(`
    <p>Too busy right now? Select some articles you'd like to read later!
    </p>`)
  }
}