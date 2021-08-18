var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var t = JSON.parse(this.response);
  console.log(t);
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();
