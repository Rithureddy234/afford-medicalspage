import React from 'react';

function TrainDetails({ train }) {
  return (
    <div className="train-details">
      <h2>{train.trainName}</h2>
      <p>Departure Time: {train.departureTime}</p>
      <p>Sleeper Price: {train.price.sleeper}</p>
      <p>AC Price: {train.price.AC}</p>
      {/* Other details */}
    </div>
  );
}

export default TrainDetails;
