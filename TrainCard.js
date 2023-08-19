import React from 'react';
import { Link } from 'react-router-dom';

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h3>{train.trainName}</h3>
      <p>Departure Time: {train.departureTime}</p>
      <p>Sleeper Price: {train.price.sleeper}</p>
      <p>AC Price: {train.price.AC}</p>
      <Link to={`/train/${train.trainNumber}`}>View Details</Link>
    </div>
  );
}

export default TrainCard;
