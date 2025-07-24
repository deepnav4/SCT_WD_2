const Controls = ({ isRunning, onStartStop, onLapReset }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center gap-10">
        {/* Start/Stop Button */}
        <div className="flex flex-col items-center">
          <button
            onClick={onStartStop}
            className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold shadow-lg transition-all hover:scale-105 ${
              isRunning ? 'bg-gray-800 hover:bg-gray-700 border-2 border-amber-500' : 'bg-gray-800 hover:bg-gray-700 border-2 border-green-500'
            }`}
          >
            {isRunning ? 'STOP' : 'START'}
          </button>
          <span className="mt-2 text-gray-400 text-sm font-medium">
            {isRunning ? 'Stop Timer' : 'Start Timer'}
          </span>
        </div>

        {/* Lap/Reset Button */}
        <div className="flex flex-col items-center">
          <button
            onClick={onLapReset}
            className="w-20 h-20 rounded-full bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 flex items-center justify-center text-white font-semibold shadow-lg transition-all hover:scale-105"
          >
            {isRunning ? 'LAP' : 'RESET'}
          </button>
          <span className="mt-2 text-gray-400 text-sm font-medium">
            {isRunning ? 'Record Lap' : 'Reset Timer'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Controls; 