const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')

//Indica onde está os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

//Rota de teste
app.post('/test', async (req, res) => {
    //Aqui vai o script desta rota
    const app_id = "5295873722472032"
    const client_secret = "fxhJIHKnC9kp7yQdekSIJmYRJphxdgk1"
    const code = "TG-684ca22c667dbc0001b64ac5-154458559"
    const redirect_uri = "https://google.com.br"

    //URL principal da PI do Mercado Livre - para obter o Acess Token
    const url_principal = "https://api.mercadolibre.com/oauth/token"

    //Informações que vão ser enviadas junto da URL principal da requisição/chamada
    const headers = {
        "accept": "application/json",
        "content-type": "application/x-www-form-urlencoded"
    }

    const dados = `grant_type=authorization_code&client_id=${app_id}&client_secret=${client_secret}&code=${code}&redirect_uri=${redirect_uri}`

    const resposta = await fetch(url_principal, {
        method: 'POST',
        headers: headers,
        body: dados
    })

    const resposta_json  = await resposta.json()

    console.log(resposta_json)

    res.send("OK")
})

app.post('/getAccessToken', async (req, res) => {

    //Variáveis que vamo precisar enviar à API do Mercado Livre
    const app_id = "5295873722472032"
    const client_secret = "fxhJIHKnC9kp7yQdekSIJmYRJphxdgk1"
    const refresh_token = "TG-68504b781fb77d000131c4ae-154458559"

    const url_principal = "https://api.mercadolibre.com/oauth/token"

    const headers = {
        "accept": "application/json",
        "content-type": "application/x-www-form-urlencoded"
    }

    const dados = `grant_type=refresh_token&client_id=${app_id}&client_secret=${client_secret}&refresh_token=${refresh_token}`

    const resposta = await fetch(url_principal, {
        method: 'POST',
        headers: headers,
        body: dados
    })

    const resposta_json = await resposta.json()

    console.log(resposta_json)

    res.send("OK")

})

app.get('/getInfoVenda', async (req, res) => {

    const access_token = 'APP_USR-5295873722472032-061612-2141fc3ded387663336f3b758c019a0d-154458559'

    const id_venda = "MLB3725034107"

    const headers = {
        Authorization: `Bearer ${access_token}`
    }

    const url = `https://api.mercadolibre.com/items?ids=${id_venda}`

    const resposta = await fetch(url, {
        method: 'GET',
        headers: headers,
    })

    const resposta_json = await resposta.json()

    console.log(resposta_json)

    res.send(resposta_json)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT} - http://localhost:${PORT}`)
})