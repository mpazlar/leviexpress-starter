import React, { useEffect, useState } from 'react';
import { JourneyDetail } from '../JourneyDetail';
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
      {journey === '' ? null : <JourneyDetail props={journey} />}
    </main>
  );
};
