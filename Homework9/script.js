function sum() {
  let total = 0;
  return function add(num) {
    total += num;
    console.log(`Sum: ${total}`);
    return add;
  }
}

const s = sum();

s(8)
s(10)