//Initializes calendar
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.datepicker');
  let options = {format: 'yyyy-mm-dd'};
  instances = M.Datepicker.init(elems, options);

}); 

// Click event to submit date and run API calls
$("#start").on("click", function(){
  //date variables to plug into API URL calls
  let chosenDate = instances.toString();
  let noDashDate = chosenDate.replaceAll("-", "")

  //NYT API call variable and function
  let NYTsearchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + noDashDate + "&end_date=" + noDashDate + "&api-key=rLqQ8GexB2ARIBGSMsR1ieuF8ElHABR2";

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
        $(".card-content-"+i).append(`<p class='abstract${i}'>${abstractNYT}</p>
        <p class='hidden weburl${i}'>${articleURL}</p>`)
      }
    }
  })//close NYT ajax response
  }//close searchNYT function

  searchNYT()

  //Currency Exchange variable and function
  let currencyURL = "https://api.exchangeratesapi.io/" + chosenDate + "?base=USD"

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
    $("#new-york-currency").html(`<p>$ ${rateNYC}</p`)
    $("#paris-currency").html(`<p>€ ${rateParis}</p`)
    $("#tokyo-currency").html(`<p>¥ ${rateTokyo}</p`)
    $("#sao-paulo-currency").html(`<p>R$ ${rateSaoPaulo}</p`)
    $("#cape-town-currency").html(`<p>R ${rateCapeTown}</p`)
  })
  }

  searchCurrency()

  // Visual Crossing Weather variable and function

  //query for all 5 locations at once:
  let queryURLforWeather = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&startDateTime=" + chosenDate + "T00%3A00%3A00&endDateTime=" + chosenDate + "T00%3A00%3A00&maxStations=-1&maxDistance=-1&contentType=json&unitGroup=us&locationMode=array&key=HFS2SKT2Y8KUVY6FAG6KJAZ6S&dataElements=default&locations=New%20York%2C%20New%20York%7CSao%20Paulo%2C%20Brazil%7CParis%2C%20France%7CTokyo%2C%20Japan%7CCape%20Town%2C%20South%20Africa"
  
  // function for weather query; spits out City Name and Temp (in Fahrenheit) for each city 
  function searchVisualCrossing () {
  $.ajax({
      url: queryURLforWeather,
      method: "GET"
  })
      .then(function(response) {
          let r = response.locations
          try {
          $("#new-york-weather").html(`<p>
          Temperature: ${r[4].values[0].temp} °F</p>
          <p>Wind Speed: ${r[4].values[0].wspd} mph </p>`)
          } catch (errny){
            $("#new-york-weather").html("<p>Sorry, but temperature and wind speed are not available for this day</p>")
          }

          try{
          $("#paris-weather").html(`<p>
          Temperature: ${r[1].values[0].temp} °F</p>
          <p>Wind Speed: ${r[1].values[0].wspd} mph</p>`)
          } catch (errparis){
            $("#paris-weather").html("<p>Sorry, but temperature and wind speed are not available for this day</p>")
          }

          try{
          $("#tokyo-weather").html(`<p>
          Temperature: ${r[0].values[0].temp} °F</p>
          <p>Wind Speed: ${r[0].values[0].wspd} mph</p>`)
          } catch (errtokyo){
            $("#tokyo-weather").html("<p>Sorry, but temperature and wind speed are not available for this day</p>")
          }

          try{
          $("#sao-paulo-weather").html(`<p>
          Temperature: ${r[3].values[0].temp} °F</p>
          <p>Wind Speed: ${r[3].values[0].wspd} mph</p>`)
          } catch (errsaopaulo){
            $("#sao-paulo-weather").html("<p>Sorry, but temperature and wind speed are not available for this day</p>")
          }

          try{
          $("#cape-town-weather").html(`<p>
          Temperature: ${r[2].values[0].temp} °F</p>
          <p>Wind Speed: ${r[2].values[0].wspd} mph</p>`)
          } catch (errcapetown){
            $("#cape-town-weather").html("<p>Sorry, but temperature and wind speed are not available for this day</p>")
          }
  })}

  searchVisualCrossing();
})

//on click, grab abstract and url

$(".save-article-0").on("click", function(){
  readlater = $(".abstract0").text()
  readlaterURL = $(".weburl0").text()
 appendArticles()
})

$(".save-article-1").on("click", function(){
  readlater = $(".abstract1").text()
  readlaterURL = $(".weburl1").text()
appendArticles()
})

$(".save-article-2").on("click", function(){
  readlater = $(".abstract2").text()
  readlaterURL = $(".weburl2").text()
appendArticles()
})

function appendArticles(){
  //grab the abstract and url and make an object
  storeReadLater = {
    abstract: readlater,
    webURL: readlaterURL
  }

  //if there is anything in localStorage, grab it; if not []
  if (localStorage.getItem("ReadLaterArticles")){
    storeReadLaterArr = [JSON.parse(localStorage.getItem("ReadLaterArticles"))]
} else {
    storeReadLaterArr = []
}

//add articles to localStorage, max 8 articles
storeReadLaterArr.push(storeReadLater)
if (storeReadLaterArr.length > 8){
  storeReadLaterArr.split(0)
}

//display read later article in read later column
  $("#read-later").append(`
  <div>
    <p>${readlater}</p>
    <p>
      <a href="${readlaterURL}" target="_blank">
        Read Article Here
    </p>
  </div>`)

//save the array with new article to local storage
localStorage.setItem("ReadLaterArticles",JSON.stringify(storeReadLater))
}

// parallax start
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  });
})(jQuery); 
// parallax end
    
//Function to add display articles if there are any in local storage
//for refresh of page
displayReadLater()

function displayReadLater(){
    if (localStorage.getItem("ReadLaterArticles")){
    let readLaterArr = [JSON.parse(localStorage.getItem("ReadLaterArticles"))]
  
    for (let j = 0; j< readLaterArr.length; j++){
      let grabReadLater = readLaterArr[j].abstract
      let grabReadLaterURL = readLaterArr[j].webURL

      $("#read-later").append(`
      <div>
        <h6>${grabReadLater}</h6>
        <p>
          <a href="${grabReadLaterURL}" target="_blank">
            Read Article Here
        </p>
      </div>`)
    }
  } 
}
