import React from 'react';
import TrainCard from './TrainCard';

function TrainList({ trains }) {
  return (
    <div className="train-list">
      {trains.map((train) => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
}

export default TrainList;
