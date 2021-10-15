// declaring an array of any datatype
const manufacturers: any[] = [
    { id: 'Samsung', checked: false },
    { id: 'Motorola', checked: false },
    { id: 'Apple', checked: false },
    { id: 'Sony', checked: false }
];

console.log('Available Products are: ');

// logic to populate the above declared array's id value
for (const item of manufacturers) {
    item.id == 'Apple' ? console.log(item.checked) : null;
    //console.log(item.id);
}
