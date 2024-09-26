# Vector Tile Map Example with Maplibre GL and Mapbox GL
<img src="./public/header.png" alt="Texto alternativo" width="100%">

This project is a basic example of how to visualize vector tile layers of **lines**, **points**, and **polygons** using **Maplibre GL** and **Mapbox GL**. It demonstrates different styles applied to the layers based on certain filters, such as color changes according to properties like `superficie` (surface) or `estado` (state).

## Project Features

1. **Lines**: Vector line layers are used, where colors and borders are applied to represent different data properties.
2. **Points**: The points are styled with a center color and a stroke, changing color based on a property (`estado`). If the state is `"activa"`, the point is green, otherwise, it is red.
3. **Polygons**: Polygons (layer type `"fill"`) change their fill color based on the value of `superficie`:
   - Red for `superficie` less than 5.
   - Green for `superficie` between 5 and 10.
   - Blue for `superficie` greater than 10.
   All polygons have a black border.

### Prerequisites

- **Node.js** and **npm** installed on your machine.


## Environment Variables Setup

In order to properly run this project and load the map data, you need to fill in the following environment variables in your `.env` file. This file contains configuration settings such as API tokens and URLs for the vector tile services (WMTS) and the base map (TMS).

### 1. `REACT_APP_MAPBOX_TOKEN`

- **Description**: This is your Mapbox Access Token. You need to sign up at [Mapbox](https://www.mapbox.com/) to get an API token.

- **Example**:

   ```bash
   REACT_APP_MAPBOX_TOKEN=YOUR_MAPBOX_TOKEN
   ```
### 2.  `REACT_APP_WMTS_URL_POINTS`

- **Description**: This URL points to the WMTS service that provides the points layer. It's a URL for accessing tiles in a vector tile format.

- **Example**:
   ```
   REACT_APP_WMTS_URL_POINTS=https://example.com/geoserver/gwc/service/wmts?   REQUEST=GetTile&SERVICE=WMTS&LAYER=your_layer_points&...
    ```
### 3.  `REACT_APP_WMTS_URL_LINE`

- **Description**:  This URL points to the WMTS service for the lines layer. The vector tiles will be used to display line features on the map.

- **Example**:
   ```
   REACT_APP_WMTS_URL_LINE=https://example.com/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&LAYER=your_layer_lines&...
    ```
### 4.  `REACT_APP_WMTS_URL_POLYGON`

- **Description**: This URL points to the WMTS service for the polygons layer. The vector tiles will render polygon features on the map.

- **Example**:
   ```
   REACT_APP_WMTS_URL_POLYGON=https://example.com/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&LAYER=your_layer_polygons&...
    ```
### 5.  `REACT_APP_BASEMAP_URL_TMS`

- **Description**: This is the URL for the base map layer, usually in TMS (Tile Map Service) format. It provides the underlying map tiles over 
   which your vector tiles will be rendered.

- **Example**:
   ```
   REACT_APP_BASEMAP_URL_TMS=https://example.com/geoserver/gwc/service/tms/1.0.0/your_basemap_layer@EPSG:3857@png/{z}/{x}/{y}.png
    ```


### Installation

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/Kan-T-IT/mapbox-vtiles-sample
   ```
2. Install the project dependencies with npm:
   ```
   npm install
   ```
3. Create the ```npm``` file in the root directory and place your Mapbox     token inside:
    ```
    REACT_APP_MAPBOX_TOKEN=YOUR_MAPBOX_TOKEN
    ```
### Running the Project

To run the project in development mode, use the following command:
   ```
   npm start
   ```
This will start the development server at ```http://localhost:3000/```. Open your browser and visit that URL to see the map with vector tile layers.
## Project Structure

- **Lines**: Displayed using the `line` layer type, with specific colors and widths.
- **Points**: Rendered with the `circle` layer type, with different colors depending on the `estado` property.
- **Polygons**: Displayed with the `fill` layer type, and the fill color changes based on the value of `superficie`, with a black border.

## Customization

- You can modify the `MapboxExample.js` and `MaplibreExample.js` file to add or change the layers, styles, or filters.
- If you want to change the colors or add new style rules, you can do so within the `paint` property of the layers.

## Dependencies

- **React**: Main library for building the user interface.
- **Maplibre GL JS**: Library for working with interactive maps.
- **Mapbox GL JS**: Library for working with interactive maps.


## Notes

- This project is configured to use Mapbox. Make sure you have a valid Mapbox token in the `.env` file.
