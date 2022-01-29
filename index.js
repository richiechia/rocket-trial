let name = process.argv[2]
console.log(`hello ${name.toUpperCase()}! How are you?`);


import { writeFile } from 'fs';
let name = process.argv[2];
writeFile('data.json', name, (err) => console.error('err ->', err));
