import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(format(new Date(), 'HH:mm:ss'));

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(format(new Date(), 'HH:mm:ss'));
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>{currentTime}</h2>
    </div>
  );
};

export default CurrentTime;
