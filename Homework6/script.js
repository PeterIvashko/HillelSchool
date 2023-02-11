function one () {
    let str = ' ';
    for (let i = 20; i <= 30; i = i + 0.5) {
        str = str + i
        if (i < 30) {
            str = str + ' '
        }
    }
    console.log(str)
}

function two () {
    for (let i = 10; i <= 100; i = i + 10) {
        console.log(i * 27)
    }
}

function three() {
    let n = +prompt("Введіть число n:", '')

    for (let i = 1; i <= 100; i++) {
        if (i ** 2 < n) {
            console.log(i)
        }
    }
}

function four() {
    let x = +prompt("Введіть число:", '')

    for (let i = 2; i <= x; i++) {
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue
      }
      console.log(i); 
    }
}

function five() {
    let x = +prompt("Введіть число:", '')

    while (x % 3 === 0) {
        console.log(x)
        break
    }
}