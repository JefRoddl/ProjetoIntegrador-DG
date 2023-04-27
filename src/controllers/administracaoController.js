let login = "adm@123"
let senha = "12345" 

const administracao = {
    enviarLogin: (req, res) => {
        if(req.body.emailAdm == login && req.body.senhaAdm == senha) {
            res.redirect('/produtos-adm')
        }
        res.render('login-adm')
    },
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