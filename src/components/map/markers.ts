import { loader } from "./loader"
import { map } from "./map"


// Import the paths to the images:
import begichTowersImg from "../../../images/Info - BegichTowers.jpg"
import antonTunnelImg from "../../../images/Info - Tunnel.jpg"
import harborImg from "../../../images/Info - Harbor.jpg"
import schoolImg from "../../../images/Info - School.jpg"



// Create the Marker object to create numerours markers
const markerLib = await loader.importLibrary("marker")

// Create the InfoWindow object to create numerous info windows
const infoWindowLib = await loader.importLibrary("maps")


/* Begich Towers */

// Logation on the map
const begichTowers: google.maps.LatLngLiteral = {
  lat: 60.77227844922316,
  lng: -148.68579853714562
}

// DOM for the info window
const begichTowersDOM = `
  <div class ="maps-info-window" id="begichtowers-info-window">
    <div class="info-text-container">
      <h1>Begich Towers</h1>
      <p>Aquí quedan las Begich Towers!</p>
    </div>
    <div class="info-img-container">
      <img src="${begichTowersImg}" alt="Begich Towers">
    </div>
  </div>
`

// Create the info window
const begichTowersInfoWindow = new infoWindowLib.InfoWindow({

  ariaLabel: "Begich Towers",
  content: begichTowersDOM
})

// Create the marker
const begichTowersMarker = new markerLib.Marker({
    position: begichTowers,
    map: map,
    title: "Begich Towers",
})

// Add the event listener to the marker to open the info window
begichTowersMarker.addListener("click", () => {
  begichTowersInfoWindow.open(map, begichTowersMarker)
})


/* Portage Road */

const antonTunnel: google.maps.LatLngLiteral = {
  lat: 60.777004683620966, 
  lng: -148.73057502088002
}

const antonTunnelDOM = `
  <div class ="maps-info-window" id="begichtowers-info-window">
    <div class="info-text-container">
    <h1>Anton Anderson Memorial Tunnel</h1>
      <p>Si deseas visitar Whittier desde carro, tendrás que esperar media hora a que el túnel cambie de sentido para poder entrar o salir.</p>
    </div>
    <div class="info-img-container">
      <img src="${antonTunnelImg}" alt="Tunel Image">
    </div>
  </div>
`

const antonTunnelInfoWindow = new infoWindowLib.InfoWindow({
  ariaLabel: "Anton Anderson Memorial Tunnel",
  content: antonTunnelDOM
})

const antonTunnelMarker = new markerLib.Marker({
  position: antonTunnel,
  map: map,
  title: "Anton Anderson Memorial Tunnel",
})

antonTunnelMarker.addListener("click", () => {
  antonTunnelInfoWindow.open(map, antonTunnelMarker)
})


/* Whittier Harbor */

const harbor: google.maps.LatLngLiteral = {
  lat: 60.777632748043345, lng: -148.68931759900732
}

const harborDOM = `
  <div class ="maps-info-window" id="begichtowers-info-window">
    <div class="info-text-container">
      <h1>Harbor</h1>
      <p>El puerto de Whittier es el único puerto de aguas profundas de Alaska.</p>
    </div>
    <div class="info-img-container">
      <img src="${harborImg}" alt="Begich Towers">
    </div>
  </div>
`

const harborInfoWindow = new infoWindowLib.InfoWindow({
  ariaLabel: "Harbor",
  content: harborDOM
})

const harborMarker = new markerLib.Marker({
  position: harbor,
  map: map,
  title: "Harbor",
})

harborMarker.addListener("click", () => {
  harborInfoWindow.open(map, harborMarker)
})


/* Whittier Comunity School */

const school: google.maps.LatLngLiteral = {
  lat: 60.77173880997951, lng: -148.68632950984838
}

const schoolDOM = `
  <div class ="maps-info-window" id="begichtowers-info-window">
    <div class="info-text-container">
      <h1>Escuela Comunitaria</h1>
      <p>La escuela de Whittier es una de las más pequeñas de Alaska y el lugar donde la gente va a aprender cada día.</p>
    </div>
    <div class="info-img-container">
      <img src="${schoolImg}" alt="Begich Towers">
    </div>
  </div>
`

const schoolInfoWindow = new infoWindowLib.InfoWindow({
  ariaLabel: "Escuela Comunitaria",
  content: schoolDOM
})

const schoolMarker = new markerLib.Marker({
  position: school,
  map: map,
  title: "Escuela Comunitaria",
})

schoolMarker.addListener("click", () => {
  schoolInfoWindow.open(map, schoolMarker)
})


