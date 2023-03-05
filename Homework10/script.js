const a = null;
let b = undefined;
let c = 0;

if (a == b) {
    console.log('first');
} else if (a === b) {
    console.log('second');
} else {
    console.log(a == c);
}