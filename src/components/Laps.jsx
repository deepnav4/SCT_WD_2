const Laps = ({ laps }) => {
  // Format time to MM:SS:ms
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  // If no laps, don't render anything
  if (!laps.length) return null;

  return (
    <div className="w-full max-w-sm mt-10">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-gray-300 text-lg font-semibold">Recorded Laps</h3>
        <span className="text-gray-500 text-sm">{laps.length} total</span>
      </div>
      <div className="max-h-60 overflow-y-auto rounded-lg bg-black border border-gray-800">
        {laps.map((lap, index) => (
          <div 
            key={index}
            className="flex justify-between items-center py-4 px-5 border-b border-gray-800 text-gray-300"
          >
            <span className="font-medium text-gray-400">Lap {laps.length - index}</span>
            <span className="font-mono text-lg">{formatTime(lap)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laps; 