let num = [5,8,2,9]
console.log(`Nosso vetor é [${num}]`)

num[4] = 1
num.push(3)
console.log(`Nosso vetor é [${num}] e tem ${num.length} elementos!`)

console.log(`O vetor ordenado é [${num}]!`)
//Só ordena o primeiro decimal [300, 10, 40] --> [10, 300, 40]

for (var c = 0; c < num.length; c++) {
    console.log(num[c])
}
console.log('')
num.sort()

for (var c in num) {
    console.log(num[c])
} 

console.log(`O valor 5 está na posição ${num.indexOf(5)}!`)