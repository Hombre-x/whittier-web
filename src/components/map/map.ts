/**
 * The Google maps API was used to display the map of Whitier, Alaska, United States. 
 * 
 * It's interactive, you can move around the map and zoom in and out. 
 */

import { loader } from "./loader"


// Here we set the center of the map
const center: google.maps.LatLngLiteral = { 
  lat: 60.774641609018175, lng: -148.69079084852268
}

const mapLib = await loader.importLibrary("maps")

// Here we create the map object and we add it to the DOM in location.html

export const map = new mapLib.Map(document.getElementById("map") as HTMLElement, {
  center,
  zoom: 15,
  clickableIcons: true
})







