const dadosloginAdm = require('../infra/loginAdm.json')


const administracao = {
    enviarLogin: (req, res) => {
      const emailAdm = req.body.emailAdm;
      const senhaAdm = req.body.senhaAdm;
  
      // Procura um usuário administrador que tenha o mesmo e-mail fornecido pelo usuário
      const usuarioAdm = dadosloginAdm.usuarios.find(usuario => usuario.email === emailAdm);
  
      if (usuarioAdm && usuarioAdm.senha === senhaAdm) {
        res.redirect('/produtos-adm');
      } else {
        res.send('E-mail ou senha inválidos.');
      }
    },
    showLoginAdm: (req, res) => {
        res.render('login-adm', {dadosloginAdm})
    },
    showClientesAdm: (req, res) => {
        res.render('clientes-adm', {dadosloginAdm})
    },
    showProdutosAdm: (req, res) => {
        res.render('produtos-adm', {dadosloginAdm})
    },
    showPedidosAdm: (req, res) => {
        res.render('pedidos-adm', {dadosloginAdm})
    },
}

module.exports = administracao