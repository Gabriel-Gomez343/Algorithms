export const quickSort = async (arr, start, end, setArray) => {
    if (start >= end) return;
  
    const index = await partition(arr, start, end, setArray);
    await quickSort(arr, start, index - 1, setArray);
    await quickSort(arr, index + 1, end, setArray);
  };
  
  const partition = async (arr, start, end, setArray) => {
    const pivotValue = arr[end];
    let pivotIndex = start;
  
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 200)); // Adjust delay as needed
  
    return pivotIndex;
  };
  