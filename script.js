var sitename = "yr.no weatherapp https://github.com/northchong/yrno-weatherapi"
var url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.26&lon=24.45"
// var units = data.properties.meta.units

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //currentTime = data.properties.timeseries.time;
    //currentTemp = data.properties.timeseries.data.instant.details.air_temperature;

    for (let i = 0; i < data.properties.timeseries.length; i++) {
        console.log(JSON.stringify(data.properties.timeseries[i].time));
        console.log(JSON.stringify(data.properties.timeseries[i].data.instant.details.air_temperature));
      }
  });

    
  
// tallinn on lat 59, lon 24- https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.26&lon=24.45