import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Clock = () => {
  const [currentHour, setCurrentHour] = useState(12);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [isAM, setIsAM] = useState(true);



  const incrementHour = () => {
    setCurrentHour((prevHour) => (prevHour === 12 ? 1 : prevHour + 1));
  };

  const decrementHour = () => {
    setCurrentHour((prevHour) => (prevHour === 1 ? 12 : prevHour - 1));
  };

  const incrementMinute = () => {
    setCurrentMinute((prevMinute) => (prevMinute === 59 ? 0 : prevMinute + 1));
  };

  const decrementMinute = () => {
    setCurrentMinute((prevMinute) => (prevMinute === 0 ? 59 : prevMinute - 1));
  };

  const toggleAMPM = () => {
    setIsAM((prevIsAM) => !prevIsAM);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">

    <div className="flex flex-row justify-center items-center border rounded-md shadow-lg  m-4 p-2">
      <div className="flex flex-col items-center space-y-4 p-4">
        <button className="text-2xl" onClick={incrementHour}><IoIosArrowUp /></button>
        <div className="text-2xl">{currentHour.toString().padStart(2, '0')}</div>
        <button className="text-2xl" onClick={decrementHour}><IoIosArrowDown /></button>
      </div>
      <div className="flex flex-col items-center space-y-4 p-4">
        <div className="text-2xl">:</div>
      </div>
      <div className="flex flex-col items-center space-y-4 p-4">
        <button className="text-2xl" onClick={incrementMinute}><IoIosArrowUp /></button>
        <div className="text-2xl">{currentMinute.toString().padStart(2, '0')}</div>
        <button className="text-2xl" onClick={decrementMinute}><IoIosArrowDown /></button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <button className="text-2xl" onClick={toggleAMPM}>{isAM ? 'AM' : 'PM'}</button>
      </div>
    </div>
    </div>
  );
};

export default Clock;






