(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function a(){const s=new google.maps.Map(document.getElementById("map"),{center:{lat:37.39094933041195,lng:-122.02503913145092},zoom:14,mapId:"4504f8b37365c3d0"}),o=new google.maps.InfoWindow,r=new google.maps.marker.AdvancedMarkerView({map:s,position:{lat:37.39094933041195,lng:-122.02503913145092},draggable:!0,title:"This marker is draggable."});r.addListener("dragend",n=>{const e=r.position;o.close(),o.setContent(`Pin dropped at: ${e.lat()}, ${e.lng()}`),o.open(r.map,r)})}window.initMap=a;