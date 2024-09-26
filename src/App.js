import "./App.css";
import MapLibreExample from "./components/MapLibreExample";
import MapboxExample from "./components/MapBoxExample";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navBar">
          <Link to="/maplibre-example">
            <button className="buttonToMap">
              Ejemplo de Vector Tile en MapLibre
            </button>
          </Link>
          <Link to="/mapbox-example">
            <button className="buttonToMap">
              Ejemplo de Vector Tile en Mapbox
            </button>
          </Link>
        </nav>

        {/* Configuración de las rutas */}
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/maplibre-example" replace />}
          />
          <Route path="/maplibre-example" element={<MapLibreExample />} />
          <Route path="/mapbox-example" element={<MapboxExample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
