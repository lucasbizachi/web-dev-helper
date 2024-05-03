let array = [1, 2, 2, 3, 4, 4, 5, 5];
let arraySemDuplicatas = [];

for (let i = 0; i < array.length; i++) {
    if (arraySemDuplicatas.indexOf(array[i]) === -1) {
        arraySemDuplicatas.push(array[i]);
    }
}

console.log("Array sem elementos duplicados:", arraySemDuplicatas);
