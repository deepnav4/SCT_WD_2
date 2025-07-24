import './App.css';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-white text-4xl font-bold text-center mb-6">STOPWATCH</h1>
        <p className="text-gray-500 text-center mb-10">Track your time with precision</p>
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
