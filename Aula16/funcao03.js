function fatorial (n) {
    var c = n
    console.log(`${n}! = `)
    while (c > 1) {
        c--
        n *= c
    }
    return n
}

console.log(fatorial(5))