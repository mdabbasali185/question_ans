// 1. Create a function that will find the factorial number of [9] using recursion.

function factorial(number) {
    if (number == 0) {
        return 1;
    }
    else {
        return number * factorial(number - 1);
    }
}



// 2. Find the maximum number in a jagged array given below array of numbers?
var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
const arr = []
for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    if (Array.isArray(element)) {
        for (let e = 0; e < element.length; e++) {
            const number = element[e];
            if (typeof (number) === 'number') {
                arr.push(number)
            } else {
                arr.push(Math.max(...number))
            }
        }
    } else {
        arr.push(element)
    }
}


// 3. Find the counts of duplicates in an array?
const array = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]
var object = {}

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (object[element] === undefined) {
        object[element] = 1
    } else {
        object[element] += 1
    }

    if (object[element] > 1) {
        // console.log(element)
    }
}

// 4. How to find unique values from an array in sorted order?
const arr3 = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]
var object2 = {}
for (let i = 0; i < arr3.length; i++) {
    const element = arr3[i];
    if (object2[element] === undefined) {
        object2[element] = 1
    } else {
        object2[element] += 1
    }
}
const unSort = []
for (let i = 0; i < arr3.length; i++) {
    const element = arr3[i];
    if (object2[element] === 1) {
        unSort.push(element)
    }
}
const sort = unSort.sort(function (a, b) { return a - b })
console.log(sort)