const Display = ({ time }) => {
  // Format time to MM:SS:ms
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      milliseconds: milliseconds.toString().padStart(2, '0')
    };
  };

  const { minutes, seconds, milliseconds } = formatTime(time);

  return (
    <div className="w-full max-w-sm p-4 sm:p-6 md:p-8">
      <div className="text-center mb-2">
        <span className="text-gray-400 font-semibold uppercase tracking-wider text-xs sm:text-sm md:text-base">Elapsed Time</span>
      </div>
      <div className="flex justify-center items-baseline text-white font-['Poppins']">
        <span className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[200px] tabular-nums">{minutes}</span>
        <span className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[200px] mx-1">:</span>
        <span className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[200px] tabular-nums">{seconds}</span>
        <span className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[200px] mx-1">:</span>
        <span className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[200px] tabular-nums opacity-90">{milliseconds}</span>
      </div>
      <div className="flex justify-between mt-3 text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-500">
        <span>MINUTES</span>
        <span>SECONDS</span>
        <span>MILLISEC</span>
      </div>
    </div>
  );
};

export default Display; 