const dadosloginAdm = require('../infra/loginAdm.json')

const administracao = {
  enviarLogin: (req, res) => {
    const emailAdm = req.body.emailAdm;
    const senhaAdm = req.body.senhaAdm;

    // Procura um usuário administrador que tenha o mesmo e-mail fornecido pelo usuário
    const usuarioAdm = dadosloginAdm.usuarios.find(usuario => usuario.email === emailAdm);

    if (usuarioAdm && usuarioAdm.senha === senhaAdm) { 
        // armazena o nome do usuário na sessão
        req.session.usuarioAdmNome = usuarioAdm.nome;
        req.session.usuarioAdmSobrenome = usuarioAdm.sobrenome;
        res.redirect('/produtos-adm');
    } else {
        res.send('E-mail ou senha inválidos.');
    }
},


    showLoginAdm: (req, res) => {
        res.render('login-adm', {dadosloginAdm})
    },



    showClientesAdm: (req, res) => {
        const usuarioAdmNome = req.session.usuarioAdmNome;
        const usuarioAdmSobrenome = req.session.usuarioAdmSobrenome
        res.render('clientes-adm', {usuarioAdmNome, usuarioAdmSobrenome});
        
      },




      showProdutosAdm: (req, res) => {
        const usuarioAdmNome = req.session.usuarioAdmNome;
        const usuarioAdmSobrenome = req.session.usuarioAdmSobrenome
        res.render('produtos-adm', { usuarioAdmNome, usuarioAdmSobrenome });
    },




    showPedidosAdm: (req, res) => {
        const usuarioAdmNome = req.session.usuarioAdmNome;
        const usuarioAdmSobrenome = req.session.usuarioAdmSobrenome
        res.render('pedidos-adm', {usuarioAdmNome, usuarioAdmSobrenome})
    },




}

module.exports = administracao
