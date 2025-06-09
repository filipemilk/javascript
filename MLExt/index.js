"use strict"

async function init() {
    const price = document.querySelector('div.ui-pdp-price__second-line > span:nth-child(1) > span > span.andes-money-amount__fraction')?.innerText.replace('.', '') || '0'

    const cents = document.querySelector('div.ui-pdp-price__second-line > span:nth-child(1) > span > span.andes-money-amount__cents')?.innerText || '0'

    const sold = Number(document.querySelector('.ui-pdp-header__subtitle')?.innerText.split(' ')[4].replace('mil', '000') || '0')

    const container = document.querySelector('.ui-pdp-header__title-container')

    const adId = document.querySelector('meta[name="twitter:app:url:iphone"]')?.content.split('id=')[1]

    const mlResponse = await handleMlApi(`https://api.mercadolibre.com/items?ids=${adId}`)
    console.log('RESPOSTA ML', mlResponse)

    const total = Number(price + '.' + cents) * sold
    
    setTimeout(() => {
        container?.insertAdjacentHTML('beforebegin',
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

async function handleMlApi(url) {
    try {
        const config = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(url, config)
        const finalRes = await response.json()
        return finalRes

    } catch(err) {
        console.log("Erro na requisição:", err)
    }
}
    
init()