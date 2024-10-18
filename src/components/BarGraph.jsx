import React, { useState, useEffect } from 'react';
import './BarGraph.css';
import { NUMBER_OF_BARS } from '../config';
import { bubbleSort } from '../sortingAlgorithms/BubbleSort';
import { quickSort } from '../sortingAlgorithms/QuickSort';
import { selectionSort } from '../sortingAlgorithms/SelectionSort';
import { heapSort } from '../sortingAlgorithms/HeapSort';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const BarGraph = ({ size = NUMBER_OF_BARS }) => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [algorithmName, setAlgorithmName] = useState('');
  const [algorithmTimeComplexity, setAlgorithmTimeComplexity] = useState('');
  const [barCount, setBarCount] = useState(size);

  const CustomSlider = styled(Slider)({
    color: '#ECDFCC',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#ECDFCC',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
    }
  });
  
  // Function to generate a new array with random values
  const generateNewArray = (size) => {
    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setAlgorithmName('');
    setAlgorithmTimeComplexity('');
  };

  const startBubbleSort = async () => {
    setIsSorting(true);
    setAlgorithmName('Bubble Sort');
    setAlgorithmTimeComplexity('O(n^2)');
    await bubbleSort([...array], setArray);
    setIsSorting(false);
  };

  const startQuickSort = async () => {
    setIsSorting(true);
    setAlgorithmName('Quick Sort');
    setAlgorithmTimeComplexity('O(nlog(n))');
    await quickSort([...array], 0, array.length - 1, setArray);
    setIsSorting(false);

  };
  const startSelectionSort = async () => {
    setIsSorting(true);
    setAlgorithmName('Selection Sort');
    setAlgorithmTimeComplexity('O(n^2)');
    await selectionSort([...array], setArray);
    setIsSorting(false);
  }

  const startHeapSort = async () => {
    setIsSorting(true);
    setAlgorithmName('Heap Sort');
    setAlgorithmTimeComplexity('O(nlog(n))');
    await heapSort([...array], setArray);
    setIsSorting(false);
  }

  // Generate the array on component mount
  useEffect(() => {
    generateNewArray(barCount);
  }, [barCount]);

  const handleBarCountChange = (event, newValue) => {
    setBarCount(newValue);
  }

  return (
    <div>
      <div className="bar-graph">
        <Box sx={{ width: 300 }}>
          <CustomSlider
            aria-label="Default"
            min={10}
            max={80}
            value={barCount}
            valueLabelDisplay="auto"
            onChange = {handleBarCountChange}
            disabled={isSorting}
            />
        </Box>
        <div className="container">
          {array.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${value * 3}px` }}
            ></div>
          ))}
        </div>
        <div className="controls">
          <button onClick={generateNewArray} disabled={isSorting}>Generate New Values</button>
          <button onClick={startBubbleSort} disabled={isSorting}>Bubble Sort</button>
          <button onClick={startQuickSort} disabled={isSorting}>Quick Sort</button>
          <button onClick={startSelectionSort} disabled={isSorting}>Selection Sort</button>
          <button onClick={startHeapSort} disabled={isSorting}>Heap Sort</button>
        </div>
      </div>
      <div className="algorithm-details">
        <div className='algorithm-name'>{algorithmName && <p>Running: {algorithmName}</p>}</div>
        <div className='algorithm-time-complexity'>{algorithmTimeComplexity && <p>Time Complexity: {algorithmTimeComplexity}</p>}</div>
      </div>
    </div>
  );
};

export default BarGraph;
