"use strict"

function init() {
    const price = document.querySelector('div.ui-pdp-price__second-line > span:nth-child(1) > span > span.andes-money-amount__fraction')?.innerText.replace('.', '') || '0'

    const cents = document.querySelector('div.ui-pdp-price__second-line > span:nth-child(1) > span > span.andes-money-amount__cents')?.innerText || '0'

    const sold = Number(document.querySelector('.ui-pdp-header__subtitle > span')?.innerText.split(' ')[4].replace('mil', '000') || '0')

    const container = document.querySelector('.ui-pdp-header__title-container')

    const total = Number(price + '.' + cents) * sold
    
    

    setTimeout(() => {
        container.insertAdjacentHTML('beforebegin',
    `
        <ul class="mlext-container">
            <li>Receita bruta: <span>${formatMoney(total)}</span></li>
        </ul>
    `)
    }, 1000)
}

function formatMoney(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}
    
init()