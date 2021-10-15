function sortValue<T>(data: T[]) {
    return data.sort();
}

let numberData: number[] = [1, 4, 2, 9, 3];
let stringData: string[] = ['A', 'K', 'B', 'L'];

console.log(sortValue(numberData));
console.log(sortValue(stringData));