require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "streets-night-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-89.4, 43.07] // longitude, latitude
        });
      });
