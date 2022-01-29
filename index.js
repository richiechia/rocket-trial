let name = process.argv[2]
console.log(`yo ${name}, what's up dude.`);

import { writeFile } from 'fs';
let name = process.argv[2];
writeFile('data.json', name, (err) => console.error('err ->', err));
