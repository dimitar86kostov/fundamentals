function palindromeIntegers(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let array = String(arr[i]);
        isPalidrome = false;

        for (let j = 0; j < array.length / 2; j++) {
            let left = array[j];
            let right = array[array.length - 1 - j];
            if (left !== right) {
                break
            } else {
                isPalidrome = true;
            }
        }
        console.log(isPalidrome ? 'true' : 'false');
    }
}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);
