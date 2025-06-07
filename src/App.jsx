// App.jsx
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './leopold-colors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLeaf,
  faMapMarkerAlt,
  faSearch,
  faCamera,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';

import ReportForm from './ReportForm';
import SightingsMap from './SightingsMap';
import { BrowserRouter } from "react-router-dom";


function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'report':
        return <ReportForm />;
      case 'map':
        return <SightingsMap />;
      default:
        return null;
    }
  };

   return (
    <BrowserRouter basename="/aldoleopold-app">
      <Provider store={store}>
        <div className="container-fluid leopold-bg text-dark">
          <header className="text-center py-4">
            <h1 className="leopold-title">
              <FontAwesomeIcon icon={faLeaf} /> Leopold
            </h1>
            <p className="lead">See it. Hear it. Share it. Protect it.</p>
          </header>

          <div className="row justify-content-center mb-4">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search plants, animals, or sounds..."
              />
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <button
                className="btn btn-primary w-100"
                onClick={() => setActiveComponent('report')}
              >
                <FontAwesomeIcon icon={faCamera} /> Report Observation
              </button>
            </div>
            <div className="col-md-3 mb-4">
              <button className="btn btn-success w-100">
                <FontAwesomeIcon icon={faSearch} /> Identify Species
              </button>
            </div>
            <div className="col-md-3 mb-4">
              <button
                className="btn btn-info w-100"
                onClick={() => setActiveComponent('map')}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} /> View Sightings Map
              </button>
            </div>
            <div className="col-md-3 mb-4">
              <button className="btn btn-warning w-100">
                <FontAwesomeIcon icon={faWaveSquare} /> Identify by Sound
              </button>
            </div>
          </div>

          <div className="mt-4">{renderComponent()}</div>

          <footer className="text-center py-3 mt-5 border-top">
            <small>&copy; 2025 Leopold Project — Built for Nature</small>
          </footer>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
