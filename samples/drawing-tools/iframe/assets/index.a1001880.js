const l=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};l();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function s(){const t=new google.maps.Map(document.getElementById("map"),{center:{lat:-34.397,lng:150.644},zoom:8});new google.maps.drawing.DrawingManager({drawingMode:google.maps.drawing.OverlayType.MARKER,drawingControl:!0,drawingControlOptions:{position:google.maps.ControlPosition.TOP_CENTER,drawingModes:[google.maps.drawing.OverlayType.MARKER,google.maps.drawing.OverlayType.CIRCLE,google.maps.drawing.OverlayType.POLYGON,google.maps.drawing.OverlayType.POLYLINE,google.maps.drawing.OverlayType.RECTANGLE]},markerOptions:{icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"},circleOptions:{fillColor:"#ffff00",fillOpacity:1,strokeWeight:5,clickable:!1,editable:!0,zIndex:1}}).setMap(t)}window.initMap=s;