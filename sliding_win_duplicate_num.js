function hasDup(arr, winSize) {
	let set = new Set();

	// winsize is the absolute diff
	// 1st win
	// why i <= winSize
	// not i < winSize
	for(let i=0; i<arr.length && i<=winSize; i++){

		let item = arr[i];
        if(set.has(item)){

			console.log('-- dup item --');
        	console.log(set);
			return true; 
        } else {
			set.add(item);

			console.log('-- add --');
			console.log(set);
		}
    }

	// next window
	// winSize+1, start
	for(let i=winSize+1; i<arr.length; i++){
		// e.g. [1, 2, 3, 1], window is [1, 2, 3], 1st element is 1, then 0+winSize(2)+1 = 3,
		// 3rd element is 1 again
        // index = k + 1 - k - 1

		let firstElementInWin = i-winSize-1;
        set.delete(arr[firstElementInWin]);

		console.log('--');
		console.log(set);
        
        // i = k+1
		let item = arr[i];
        if(set.has(item)){
			console.log('-- 2nd win found --');
			console.log(set);
        	return true;
        } else {
			set.add(item);
		}
    }
    return false;	
} 

function main() {
	let arr = [1, 2, 3, 1, 3];
	let winSize = 2;
	hasDup(arr, winSize);
}

main();
