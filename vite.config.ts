import { defineConfig } from "vite"

export default defineConfig( () => {
  return {
    build: {
      rollupOptions: {
        input: {
          main:       "./index.html",
          about:      "/pages/about.html",
          activities: "/pages/activities.html",
          history:    "/pages/history.html",
          location:   "/pages/location.html",
          map:        "/pages/map.html",
          people:     "/pages/people.html",
        },

        external: [
          "https://maps.googleapis.com/maps/api/js"
        ],
      },

      target: "esnext",
    }
  }
})