import React from 'react';
import './style.css';

import { BusStop } from '../BusStop';

export const JourneyDetail = (props) => {
  console.log(props.props.stops);

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {props.props.stops.map((x) => (
          <BusStop
            key={x.code}
            name={x.name}
            station={x.station}
            time={x.time}
          />
        ))}
      </div>
    </div>
  );
};
