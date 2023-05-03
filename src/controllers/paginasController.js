const path = require('path')
const fs = require('fs')

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


    enviarLoginUsuario: (req, res) => {
        // obter os dados do formulário enviados pelo cliente
        const nome = req.body.nomeCadastro;
        const email = req.body.emailCadastro;
        const senha = req.body.senhaCadastro;
      
        // criar um objeto com os dados do usuário
        const usuario = {
          nome: nome,
          email: email,
          senha: senha
        };
      
        // construir o caminho para o arquivo loginUsuario.json
        const arquivoUsuarios = path.join(__dirname, '../infra/loginUsuario.json');
      
        // ler o arquivo JSON existente
        fs.readFile(arquivoUsuarios, (err, data) => {
          if (err) {
            console.log(err);
            return res.status(500).send('Ocorreu um erro ao ler o arquivo JSON');
          }
      
          // converter o conteúdo do arquivo para um objeto JavaScript
          const usuarios = JSON.parse(data);
      
          // adicionar o novo usuário ao array de usuários
          usuarios.push(usuario);
      
          // escrever o novo array de usuários de volta para o arquivo JSON
          fs.writeFile(arquivoUsuarios, JSON.stringify(usuarios), (err) => {
            if (err) {
              console.log(err);
              return res.status(500).send('Ocorreu um erro ao escrever o arquivo JSON');
            }
      
            // redirecionar o usuário para a página de home
            res.redirect('/home');
          });
        });
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