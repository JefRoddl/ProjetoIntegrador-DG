const express = require('express')
const paginasController = require('./controllers/paginasController')
const checkout = require('./controllers/checkoutsController')
const administracao = require('./controllers/administracaoController')
const loginController = require('./controllers/enviarLoginController')


const router = express.Router()

router.get('/checkout-endereco', checkout.showEndereco)
router.get('/checkout-pagamento', checkout.showPagamento)
router.get('/cliente', paginasController.showCliente)
router.get('/finalizacao', paginasController.showFinalizacao)
router.get('/home', paginasController.showHome)
router.get('/login', paginasController.showLogin)
router.post('/login', paginasController.enviarLoginUsuario)
router.post('/login', loginController.validarLogin)
router.get('/produto', paginasController.showProduto)
router.get('/resultado-busca', paginasController.showResultadoBusca)
router.get('/login-adm', administracao.showLoginAdm)
router.post('/login-adm', administracao.enviarLogin)
router.get('/clientes-adm', administracao.showClientesAdm)
router.get('/produtos-adm', administracao.showProdutosAdm)
router.get('/pedidos-adm', administracao.showPedidosAdm)
router.get('/carrinho', paginasController.showCarrinho)


module.exports = router