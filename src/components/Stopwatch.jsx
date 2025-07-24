import { useState, useEffect, useRef } from 'react';
import Display from './Display';
import Controls from './Controls';
import Laps from './Laps';

const Stopwatch = () => {
  // State for tracking time, running status, and laps
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  
  // Ref to store interval ID
  const intervalRef = useRef(null);
  
  // Setup and cleanup timer interval
  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - time;
      
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); // Update every 10ms for smooth display
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, time]);
  
  // Start or stop the timer
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };
  
  // Add lap or reset the timer
  const handleLapReset = () => {
    if (isRunning) {
      // Add current time to laps
      setLaps([time, ...laps]);
    } else {
      // Reset timer and clear laps
      setTime(0);
      setLaps([]);
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <Display time={time} />
      <Controls 
        isRunning={isRunning} 
        onStartStop={handleStartStop} 
        onLapReset={handleLapReset} 
      />
      <Laps laps={laps} />
    </div>
  );
};

export default Stopwatch; 