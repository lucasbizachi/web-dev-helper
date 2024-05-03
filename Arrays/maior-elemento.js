let array = [10, 3, 7, 21, 15];
let maior = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
        maior = array[i];
    }
}

console.log("O maior elemento do array é:", maior);
