export const selectionSort = async (arr, setArray) => {
    var i, j, min_idx;
    let len = arr.length;
    for (i = 0; i < len - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < len; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        swap(arr, min_idx, i);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 200));
    }
}

function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}