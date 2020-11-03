#  Resources Managment

##  Começando

Para iniciar a aplicação, é preciso ter os seguintes softwares instalados:

[Postgres](https://www.postgresqltutorial.com/install-postgresql/)

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

Crie a tabela: 

```
CREATE TABLE resources(
    resource_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    creation_date DATE
);
```

Vá até a pasta server e acesse o arquivo db.js e insira a senha e porta configurada para o usuário postgres.






