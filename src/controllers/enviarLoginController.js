const path = require('path')
const fs = require('fs')

const login = {

         validarLogin: (req, res) => {

        const email = req.body.email
        const senha = req.body.senha
    
        const arquivoUsuarios = path.join(__dirname, '../infra/loginUsuario.json');
    
    
        fs.readFile("../infra/loginUsuario.json", (err, data) => {
          if (err) {
            console.log(err);
            return res.status(500).send('Ocorreu um erro ao ler o arquivo JSON');
          }
      
          // converter o conteúdo do arquivo para um objeto JavaScript
          const usuarios = JSON.parse(data);
      
          // verificar se há um usuário com o email e senha fornecidos
          const usuario = usuarios.find((user) => user.email === email && user.senha === senha);
    
    
          if (usuario) {
            // Login válido, redirecionar para a página de home
            res.redirect('/home');
          } else {
            // Login inválido, exibir mensagem de erro
            res.send("login inválido")
          }
         });
    }
}

module.exports = login