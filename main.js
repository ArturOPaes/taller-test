function pushZerosToEnd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[count++] = arr[i];
        }
    }
    for (let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr
}

function compressText(data) {
    let result = '';
    if (data.length > 0) {
        let count = 1;
        let value = data[0];
        for (let i = 1; i < data.length; ++i) {
			let entry = data[i];
            if (count == 9) {
                result += count + '' + value;
              	count = 1;
				value = entry;
            } else if (entry == value) {
                count += 1;
            } else {
              	result += count + '' + value;
              	count = 1;
				value = entry;
            }
        }
      	result += count + '' + entry;
    }
    return result;
} 
