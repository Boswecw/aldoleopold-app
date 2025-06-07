// ReportForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ReportForm = () => {
  const dispatch = useDispatch();
  const [species, setSpecies] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!species || !location) return;

    const newSighting = {
      species,
      location,
      time: Date.now()
    };

    dispatch({ type: 'ADD_SIGHTING', payload: newSighting });

    // Clear form
    setSpecies('');
    setLocation('');
  };

  return (
    <div className="container my-5">
      <h5>Submit a New Observation</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Species (e.g., Eastern Bluebird)"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Location (e.g., Berea Forest Trail)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Observation</button>
      </form>
    </div>
  );
};

export default ReportForm;
