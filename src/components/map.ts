/**
 * Se hizo uso de la API de Google maps para mostrar el 
 * mapa de Whitier, Alaska, Estados Unidos.
 * 
 * Es interactivo, puedes moverte por el mapa y hacer zoom.
 */

let map: google.maps.Map
let marker: google.maps.Marker



const center: google.maps.LatLngLiteral = { 
  lat: 60.773721556829805,
  lng: -148.67895428440548
}

const begichTowers: google.maps.LatLngLiteral = {
  lat: 60.77227844922316,
  lng: -148.68579853714562
}

function initMap() {
  
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 15,
    clickableIcons: true,
  })

  marker = new google.maps.Marker({
    position: begichTowers,
    map: map,
    title: "Begich Towers",
  })
}


(window as any).initMap = initMap;


