mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxiZXJ0MjI0IiwiYSI6ImNsMjR4Zng4MjI0aDkzamxwcDF0OTh5YmgifQ.fJ5P-d5W9Z-Q4Jv_2K6KFg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(`${position}`);
  setUpMap([position.coords.longitude, position.coords.latitude]);
}
function setUpMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );
}

function errorLocation() {
  setUpMap([]);
}
