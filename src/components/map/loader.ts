import { Loader } from "@googlemaps/js-api-loader"

/**
 * Loader for the Google Maps API
 * 
 * Here we can set the API key, version, and libraries
 */

export const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
  
  version: "weekly",
  libraries: ["marker"],
})