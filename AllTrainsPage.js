import React, { useState, useEffect } from 'react';
import TrainList from '../components/TrainList';
import { getAllTrains } from '../api'; // Implement API function
import './AllTrainsPage.css';

function AllTrainsPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const trainsData = await getAllTrains(); // Implement API call to get all trains
        setTrains(trainsData);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div className="all-trains-page">
      <h1>All Trains Schedule</h1>
      <TrainList trains={trains} />
    </div>
  );
}

export default AllTrainsPage;
