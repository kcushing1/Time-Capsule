/*API keys for future reference
let keyNYT = FDa4Sil51Sz6BlQAjD6vGlH9WypDRJug

let key bookPenguinPub = v2uy7a4bb8m4eazgwg9qm3np
//need to do more research on using penguin house api

bookCovers does not need personal API key
bookCoversURL = http://covers.openlibrary.org/b/$key/$value-$size.jpg
where key, value, and size must be specified
*/

/*api key for Open Movie Database:
let keyOMD = 3e7d0c9b

api key for LastFM:
let keyLastFM = eabf51c045a9b6cc69cda73e4364ab9d*/

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