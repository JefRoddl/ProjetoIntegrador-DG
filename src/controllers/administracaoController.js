const administracao = {
    showLoginAdm: (req, res) => {
        res.render('login-adm')
    },
    showClientesAdm: (req, res) => {
        res.render('clientes-adm')
    },
    showProdutosAdm: (req, res) => {
        res.render('produtos-adm')
    },
    showPedidosAdm: (req, res) => {
        res.render('pedidos-adm')
    },
}

module.exports = administracao