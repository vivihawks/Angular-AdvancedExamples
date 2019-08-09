/*
Commands to be run
1. OPTIONAL npx -p @angular/cli@next 
2. ng new prime-numbers
3. ng generate web-worker prime-calculations
4. npm install prime-number
*/

import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';addEventListener('message', ({ data }) => {
    const arePrimeList = primeNumberList.map((prime) => {
        return isPrimeNumber(prime);
    });    postMessage(arePrimeList);
});