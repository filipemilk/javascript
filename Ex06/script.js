function Tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length != 0) {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    } else {
        window.alert('Por favor, digite um número!')
    }
    
}