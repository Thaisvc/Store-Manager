
# 📦 Store Manager API

> API RESTful de gerenciamento de vendas e produtos desenvolvida como projeto do módulo de **Back-end** do curso de **Desenvolvimento Web da Trybe**.

Esse projeto foi construído para consolidar conhecimentos em Node.js, Express, banco de dados MySQL, arquitetura MSC (Model-Service-Controller) e testes automatizados com Mocha, Chai e Sinon — seguindo os requisitos do curso e boas práticas do desenvolvimento backend.

---

## 🧠 Sobre o Projeto

O **Store Manager** é uma **API que simula um sistema de loja (drop shipping)**, onde é possível:

* 📌 Cadastrar, listar, atualizar e remover **produtos**;
* 📌 Cadastrar, listar, atualizar e remover **vendas**;
* 📌 Validar todas as entradas de dados;
* 📌 Manter a lógica organizada com separação por camadas (Models, Services e Controllers). 

Esse projeto utiliza arquitetura MSC para facilitar manutenção, escalabilidade e clareza na responsabilidade de cada parte do código.

---

## 💡 Habilidades Desenvolvidas

Durante o desenvolvimento do Store Manager, foram aplicadas e reforçadas as seguintes habilidades:

* ✔️ Construção de APIs RESTful com **Node.js** e **Express**;
* ✔️ Organização de projeto usando arquitetura **MSC**;
* ✔️ Validação de dados com **Joi / middlewares**;
* ✔️ Escrita de testes automatizados com **Mocha, Chai e Sinon**;
* ✔️ Uso de banco de dados **MySQL**;
* ✔️ Gerenciamento de ambiente com **Docker / docker-compose**;
* ✔️ Manipulação de variáveis de ambiente (*dotenv*). 

---

## 🛠 Tecnologias

O projeto foi construído com as seguintes ferramentas:

| Tecnologias                | Uso no Projeto                    |               |
| -------------------------- | --------------------------------- | ------------- |
| Node.js                    | Ambiente de execução              |               |
| Express.js                 | Framework web                     |               |
| MySQL                      | Banco de dados                    |               |
| Docker & Docker-Compose    | Ambiente isolado para API + banco |               |
| Mocha / Chai / Sinon       | Testes unitários                  |               |
| Joi (ou validação similar) | Validação de dados                |               |
| npm                        | Gerenciamento de pacotes          |               |

---

## 🚀 Como Rodar o Projeto (Passo a Passo)

### Pré-requisitos

Antes de tudo, certifique-se de ter instalado:

✔️ Git
✔️ Node.js
✔️ Docker + Docker-Compose

### 1. Clone o repositório

```bash
git clone https://github.com/Thaisvc/Store-Manager.git
cd Store-Manager
```

### 2. Configure variáveis de ambiente

Crie um arquivo `.env` baseado no `.env.example` (se houver) com:

```
PORT=3000
DB_HOST=...
DB_USER=...
DB_PASSWORD=...
DB_NAME=...
```

### 3. Execute com Docker

```bash
docker-compose up -d --build
```

⚡ Isso irá iniciar tanto a API quanto o banco de dados MySQL em containers.

### 4. Crie o banco de dados

Rode os scripts SQL que estão no projeto (`migration.sql` e `seed.sql`) para criar tabelas e dados iniciais no MySQL.

### 5. Instale dependências e inicialize

```bash
docker exec -it store_manager bash
npm install
npm start
```

Agora a API estará rodando em `http://localhost:3000`.

---

## 🧪 Testes Automatizados

Este projeto possui testes unitários e de integração que cobrem o funcionamento das rotas e regras de negócio.

Para rodar os testes:

```bash
npm test
```

💡 Os testes usam **Mocha, Chai e Sinon** para validar cada camada da aplicação. 

---

## 📌 Endpoints Principais

### Produtos

| Método | Rota            | Descrição               |
| ------ | --------------- | ----------------------- |
| GET    | `/products`     | Lista todos os produtos |
| GET    | `/products/:id` | Retorna produto por ID  |
| POST   | `/products`     | Cria um novo produto    |
| PUT    | `/products/:id` | Atualiza um produto     |
| DELETE | `/products/:id` | Remove um produto       |

### Vendas

| Método | Rota         | Descrição               |               |
| ------ | ------------ | ----------------------- | ------------- |
| GET    | `/sales`     | Lista todas as vendas   |               |
| GET    | `/sales/:id` | Retorna venda por ID    |               |
| POST   | `/sales`     | Registra uma nova venda |               |
| PUT    | `/sales/:id` | Atualiza uma venda      |               |
| DELETE | `/sales/:id` | Remove uma venda        | ([GitHub][1]) |

---

## 🧾 Boas Práticas e Padrões

* 🧱 **Arquitetura MSC**, garantindo separação de responsabilidades;
* 🧪 **Test-Driven Development (TDD)** sempre que possível;
* 📦 **Dockerizado**, para padronizar o ambiente;
* 🧹 Código limpo, padronizado e com linter configurado. 

---


## 📝 Licença

Este projeto foi desenvolvido como parte do curso de **Desenvolvimento Web da Trybe** e está disponível como **open source**.

---
