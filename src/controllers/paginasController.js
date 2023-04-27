const path = require('path')

const paginasController = {
    showCliente: (req, res) => { 
        res.render('cliente')
    },
    showFinalizacao: (req, res) => {
        res.render('finalizacaoCompras')
    },
    showHome: (req, res) => {
        res.render('home')
    },
    showLogin: (req, res) => {
        res.render('login')
    },
    showProduto: (req, res) => {
        res.render('produto')
    },
    showResultadoBusca: (req, res) => {
        res.render('resultado_busca')
    },
    showCarrinho: (req, res) => {
        res.render('carrinho')
    }
}

module.exports = paginasController