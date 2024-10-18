import React from 'react';
import './App.css';
import BarGraph from './components/BarGraph';
import { NUMBER_OF_BARS } from './config';

function App() {
  return (
    <div>
    <h1>Algorithm Visualizer</h1>
    <div className="App">
      <BarGraph size={NUMBER_OF_BARS} />
    </div>
    </div>
  );
}

export default App;
