var sitename = "yr.no weatherapp https://github.com/northchong/yrno-weatherapi"
var url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.26&lon=24.45"

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("h").innerHTML = JSON.stringify(data, undefined, 4);
  });

// tallinn on lat 59, lon 24- https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.26&lon=24.45