import React, { useEffect, useState } from 'react';

function TimeRemaining() {

  const eventDate = new Date('2023-10-05T00:00:00');

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeDifference = eventDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, );

  return (
    <div className= " mt-10 mb-2 text-center bg-black  rounded-lg text-cyan-300">
      <h2 className="text-4xl  font-semibold">Time Remaining:</h2>
      <div className="text-4xl mt-8 ">
        {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
      </div>
    </div>
  );
}

export default TimeRemaining;
