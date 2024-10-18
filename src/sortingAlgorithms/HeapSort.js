export const heapSort = async (arr, setArray) => {
    let len = arr.length;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        await heapify(arr, len, i, setArray);
    }

    for (let i = len - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 50));
        await heapify(arr, i, 0, setArray);
    }
}

const heapify = async (arr, len, i, setArray) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        setArray([...arr]); 
        await new Promise((resolve) => setTimeout(resolve, 50));
        await heapify(arr, len, largest, setArray);
    }
}
