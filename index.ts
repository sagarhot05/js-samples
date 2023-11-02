/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: {
        lat: 18.4545818,
        lng: 73.9197943,
      },
      zoom: 16,
      heading: 320,
      tilt: 47.5,
      mapId: "90f87356969d889c",
    }
  );

  map.data.loadGeoJson('assets/json/Test_NE_Map-_Untitled_layer.geojson');

  map.data.setStyle({
    fillColor: 'green',
    strokeWeight: 1
  });

  var infowindow = new google.maps.InfoWindow();
            
  map.data.addListener('click', function(event) {
    let state = event.feature.getProperty("name");
    let html = state; // combine state name with a label
    infowindow.setContent(html); // show the html variable in the infowindow
    infowindow.setPosition(event.latLng); // anchor the infowindow at the marker
    infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)}); // move the infowindow up slightly to the top of the marker icon
    infowindow.open(map);
  });

  const buttons: [string, string, number, google.maps.ControlPosition][] = [
    ["Rotate Left", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
    ["Rotate Right", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
    ["Tilt Down", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
    ["Tilt Up", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
  ];

  buttons.forEach(([text, mode, amount, position]) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("button");

    controlUI.classList.add("ui-button");
    controlUI.innerText = `${text}`;
    controlUI.addEventListener("click", () => {
      adjustMap(mode, amount);
    });
    controlDiv.appendChild(controlUI);
    map.controls[position].push(controlDiv);
  });

  const adjustMap = function (mode: string, amount: number) {
    switch (mode) {
      case "tilt":
        map.setTilt(map.getTilt()! + amount);
        break;
      case "rotate":
        map.setHeading(map.getHeading()! + amount);
        break;
      default:
        break;
    }
  };

  document.getElementById('view')?.addEventListener('change', function(event) {
    const target = event.target as HTMLSelectElement;
    if (target.value == "pv") {
      map.setZoom(18);
    } else if (target.value == "tv") {
      map.setZoom(20);
    } else {
      map.setZoom(16);
      console.log(target.value);
    }
  })

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

