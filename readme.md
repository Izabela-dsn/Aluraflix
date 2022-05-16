## Como pegar o projeto
- esse projeto tem branches: Iza, Marcos e Julia e main
- faça um `git clone` desse repositorio
    
## comandos git para atualizar o repo localmente
- atualizando o branch `main` : `git pull`
- atualizando a sua branch : `git merge main`

## rodando o projeto
- `npm run start`
    
## instalar dependências
- dentro do projeto instale as dependencias:
  - `npm i express` para viver o servidor
  - `npm i body-parser` para traduzir umas coisas
  - `npm i mysql2` para conversar com o banco
  - `npm i --save-dev nodemon` pra não matar o servidor toda hora, ele vai reiniciar o servidor a cada mudança
  - `npm i sequelize sequelize-cli path` instala o sequelize e a linha de comando dele, e uma biblioteca para identificar caminhos

## criando/configurando o banco de dados
- verifique se tem uma variavel de ambiente para o mysql 
- abra seu prompt de comando e rode `mysql -u root -p`
  - se der o erro `ERROR 2003 (HY000): Can't connect to MySQL server` vá no `Serviços` ache o MySQL e ative ele.
    - reinicie o prompt de comando
  - senão ele vai te pedir a senha
- para ver as bases de dados que você tem  `show databases;`
- criando o banco de dados: `create database aluraflix`
- modifique no `api/config/config.json` o arquivo json com as informações necessárias para acesso ao banco no `"development:{}"`

## para criar um modelo e uma migration com sequelize
- tabela de tipos de dados e suas equivalencias: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
- `npx sequelize-cli model:create --name nome_da_tabela --attributes campo:tipo,campo:tipo,...` 

## O que é a migração
- migração de dados: transferência de dados entre plataformas
- migração com ORM: alterações incrementais e rastreáveis no banco
- mudanças no esquema: coordernar alterções feitas por diferentes pessoas do time nas tabelas do banco
- rastrear (e reverter) alterações feitas no banco para debugar conflitos e erros

## rodando migrações
- `npx sequelize-cli db:migrate`
- para ver no mysql a tabela criada: `mysql -u root -p` e entre com sua senha
  - `use nome_da_base_de_dados`
  - `describe nome_da_tabela;`


## autenticação

- crie um model para o usuário com nome, email e senha.
- faça a migration

- crie o controller para add um novo usuário e mostrar todos os usuários
- crie as rotas para os métodos do controller: `get` e um `post`
- teste no insomnia

- instala bcrypt : `npm install bcrypt`
- add esse codigo no modelo do usuario para quando for gerado um novo usuario vai gerar um rash da senha.
- `usuarios.addHook('beforeCreate', async (usuario) => {
    const senhaHash = await bcrypt.hash(usuario.senha, 8);
    usuario.senha = senhaHash;
});`

- criamos os middlewares
- temos aqui a validação de usuario:

  - instalar `npm install passport passport-local passport-http-bearer` `npm install jsonwebtoken`

