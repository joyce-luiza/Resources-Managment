#  Resources Managment

##  Começando

Para iniciar a aplicação, é preciso ter os seguintes softwares instalados:

[PostgreSQL](https://www.postgresqltutorial.com/install-postgresql/)

[Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

##  Criando o banco de dados

Após a instalação do Postgres, inicie o programa e insira sua senha:

```
psql -U postgres
```

Crie o banco de dados:

```
CREATE DATABASE resource_register;
```

Acesse o banco de dados criado: 

```
\c resource_register;
```

Crie a tabela: 

```
CREATE TABLE resources(
    resource_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    creation_date DATE
);
```

Vá até a pasta server, acesse o arquivo db.js e insira a senha e porta configurada para o usuário postgres:

```
const pool = new Pool({
    user: "postgres",
    password: "insira a sua senha aqui",
    host: "localhost",
    port: 5432, // verifique se esta é a porta configurada pelo postgres
    database: "resource_register"
});
```

## Instalando as dependências

Ainda na pasta server, abra um terminal e digite os seguintes comandos:

```
npm install
```
```
node index
```

## Rodando a aplicação

Vá até a pasta client, abra um terminal e digite os seguintes comandos: 

```
npm install
```

```
npm start
``` 

Uma aplicação será iniciada em http://localhost:3000. Agora é só usar :)

## Teste Automatizado

Vá para a pasta test, abra um terminal, e digite o comando: 

```
npm install
```

Ainda no terminal, inicie os teste com o comando:

```
npm test
```







