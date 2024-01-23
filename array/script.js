function mergeAndRemoveDuplicates() {
    // Get input values
    var inputArray1 = document.getElementById('array1').value.split(',').map(item => item.trim());
    var inputArray2 = document.getElementById('array2').value.split(',').map(item => item.trim());

    // Merge arrays and remove duplicates
    var mergedArray = [...new Set([...inputArray1, ...inputArray2])];

    // Display result
    document.getElementById('result').innerText = 'Merged and Deduplicated Array is  : ' + mergedArray.join(', ');
}