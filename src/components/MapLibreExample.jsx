import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapLibreExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    console.log(process.env.REACT_APP_BASEMAP_URL_TMS)
    mapRef.current = new maplibregl.Map({
      container: "maplibreMap",
      style: {
        version: 8,
        sources: {
          baseLayer_principal: {
            type: "raster",
            tiles: [
             process.env.REACT_APP_BASEMAP_URL_TMS,
            ],
            tileSize: 256,
            scheme: "tms",
          },
        },
        layers: [
          {
            id: "baseLayer_principal",
            type: "raster",
            source: "baseLayer_principal",
          },
        ],
      },
      zoom: 5,
      center: [-65.447303, -30.753574],
    });

    mapRef.current.on("load", () => {
      
      //vector-fill polygon
      mapRef.current.addSource("REACT_APP_WMTS_URL_POLYGON_source", {
        id: "WMTS_URL_POLYGON_layer",
        type: "vector",
        tiles: [
          process.env.REACT_APP_WMTS_URL_POLYGON,
        ],
        tileSize: 512,
      });
      mapRef.current.addLayer({
        id: "WMTS_URL_POLYGON_layer",
        source: "REACT_APP_WMTS_URL_POLYGON_source",
        "source-layer": "NAME OF THE LAYER", //complete with the name of the layer
        type: "fill", 
        paint: {
          "fill-color": [
            "step",
            ["get", "superficie"],
            "#FF0000", 
            5,
            "#008000", 
            10,
            "#0000FF",
          ],
          "fill-outline-color": "#000000", 
        },
        filter: ["!=", ["get", "prov"], "Córdoba"],
        layout: { visibility: "visible" },
      });
      //circle line
      mapRef.current.addSource(
        "REACT_APP_WMTS_URL_LINE_source",
        {
          id: "REACT_APP_WMTS_URL_LINE_layer",
          type: "vector",
          tiles: [
            process.env.REACT_APP_WMTS_URL_LINE,
          ],
          tileSize: 512,
        }
      );
      mapRef.current.addLayer({
        id: "REACT_APP_WMTS_URL_LINE_layer",
        source: "REACT_APP_WMTS_URL_LINE_source",
        "source-layer": "NAME OF THE LAYER", //complete with the name of the layer
        type: "line",
        paint: {
          "line-opacity": 0.4,
          "line-color": "#78c0ed",
          "line-width": 3,
        },
        layout: { visibility: "visible" },
      });

      //vector-points
      mapRef.current.addSource("REACT_APP_WMTS_URL_POINTS_source", {
        id: "REACT_APP_WMTS_URL_POINTS_layer",
        type: "vector",
        tiles: [
          process.env.REACT_APP_WMTS_URL_POINTS,
        ],
        tileSize: 512,
      });
      mapRef.current.addLayer({
        id: "REACT_APP_WMTS_URL_POINTS_layer",
        source: "REACT_APP_WMTS_URL_POINTS_source",
        "source-layer": "NAME OF THE LAYER", //complete with the name of the layer
        type: "circle",
        paint: {
          "circle-color": [
            "match",
            ["get", "estado"], 
            "Activa",
            "#008000",
            "#FF0000", 
          ],
          "circle-radius": 6,
          "circle-stroke-color": "#000000", 
          "circle-stroke-width": 2,
        },
        layout: { visibility: "visible" },
      });
    });

    return () => mapRef.current.remove();
  }, []);

  return (
    <div
      id="maplibreMap"
      ref={mapContainerRef}
      style={{ height: "100%" }}
    ></div>
  );
};

export default MapLibreExample;
