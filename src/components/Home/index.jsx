import React, { useEffect, useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState('');

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  useEffect(() => {
    console.log(`Nalezeno spojení s id ${journey.journeyId}`);
  }, [journey]);

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === '' ? null : (
        <div> Nalezeno spojení 🚅 s ID {journey.journeyId}</div>
      )}
    </main>
  );
};
