const express = require('express')
const path = require('path')
const paginasController = require('./controllers/paginasController')
const checkout = require('./controllers/checkoutsController')
const administracao = require('./controllers/administracaoController')


const router = express.Router()

router.get('/checkout-endereco', checkout.showEndereco)
router.get('/checkout-pagamento', checkout.showPagamento)
router.get('/cliente', paginasController.showCliente)
router.get('/finalizacao', paginasController.showFinalizacao)
router.get('/home', paginasController.showHome)
router.get('/login', paginasController.showLogin)
router.get('/produto', paginasController.showProduto)
router.get('/resultado-busca', paginasController.showResultadoBusca)
router.get('/login-adm', administracao.showLoginAdm)
router.get('/clientes-adm', administracao.showClientesAdm)
router.get('/produtos-adm', administracao.showProdutosAdm)
router.get('/pedidos-adm', administracao.showPedidosAdm)
router.get('/carrinho', paginasController.showCarrinho)


module.exports = router