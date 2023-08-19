import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrainDetails from '../components/TrainDetails';
import { getTrainDetails } from '../api'; // Implement API function
import './SingleTrainPage.css';

function SingleTrainPage() {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const trainData = await getTrainDetails(trainId); // Implement API call to get single train details
        setTrain(trainData);
      } catch (error) {
        console.error('Error fetching train details:', error);
      }
    };

    fetchTrain();
  }, [trainId]);

  return (
    <div className="single-train-page">
      <h1>Train Details</h1>
      {train ? <TrainDetails train={train} /> : <p>Loading...</p>}
    </div>
  );
}

export default SingleTrainPage;
