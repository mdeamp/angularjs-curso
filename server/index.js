const express = require('express')
const app = express()
const port = 3000

var contatos = [
    {
        nome: 'PEDRO DE MORAES',
        telefone: '99998888',
        data: new Date(),
        operadora: { nome: 'Oi', codigo: 14, categoria: 'Celular' }
    },
    {
        nome: 'AnA dA sIlVA',
        telefone: '99998877',
        data: new Date(),
        operadora: { nome: 'Vivo', codigo: 15, categoria: 'Celular' }
    },
    {
        nome: 'maria alberto ribeiro',
        telefone: '99998866',
        data: new Date(),
        operadora: { nome: 'Tim', codigo: 41, categoria: 'Celular' }
    }
];

var operadoras = [
    { nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2 },
    { nome: 'Vivo', codigo: 15, categoria: 'Celular', preco: 1 },
    { nome: 'Tim', codigo: 41, categoria: 'Celular', preco: 3 },
    { nome: 'GVT', codigo: 25, categoria: 'Fixo', preco: 1 },
    { nome: 'Embratel', codigo: 21, categoria: 'Fixo', preco: 2 }
]

app.use(express.json())

app.get('/', (req, res) => res.send({ hello: 'world' }))
app.get('/contatos', (req, res) => res.send(contatos))
app.get('/operadoras', (req, res) => res.send(operadoras))

app.post('/contatos', (req, res) => {
    contatos.push(req.body)
    res.send({ message: 'Tudo certo!' })
})

app.listen(port, () => console.log(`Servidor de exemplo para o curso de AngularJS, porta ${port}!`))