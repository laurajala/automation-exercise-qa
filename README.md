<div align="center">

# 🧪 Automation Exercise — QA Project

### Quality Assurance • Cypress • E2E Testing • CI/CD

Projeto de Quality Assurance desenvolvido para demonstrar a aplicação prática de **análise de requisitos, documentação de testes, testes funcionais, automação E2E e integração contínua**.

<br>

[![Cypress Tests](https://github.com/laurajala/automation-exercise-qa/actions/workflows/pipeline.yml/badge.svg)](https://github.com/laurajala/automation-exercise-qa/actions/workflows/pipeline.yml)

![Cypress](https://img.shields.io/badge/Cypress-15-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Test_Automation-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

</div>

---

## 🎯 Sobre o projeto

Este projeto foi desenvolvido originalmente como parte de um **desafio técnico de Quality Assurance** e posteriormente aprimorado como projeto de portfólio.

A aplicação utilizada para os testes foi o **Automation Exercise**, plataforma pública destinada à prática de testes e automação web.

O projeto contempla diferentes etapas do processo de qualidade:

**Requisitos → Critérios de Aceite → Casos de Teste → Execução → Automação → CI/CD**

O objetivo é demonstrar não apenas a implementação de scripts automatizados, mas uma abordagem de QA envolvendo **planejamento, documentação, rastreabilidade e validação automatizada**.

---

## 🌐 Aplicação utilizada

Os testes são executados sobre a aplicação:

### Automation Exercise

`https://automationexercise.com`

A URL base da aplicação está centralizada no arquivo `cypress.config.js`, evitando sua repetição nos testes automatizados.

---

## 🔄 Fluxo de QA aplicado

**1️⃣ Análise das funcionalidades**

⬇️

**2️⃣ Definição das histórias de usuário**

⬇️

**3️⃣ Criação dos critérios de aceite**

⬇️

**4️⃣ Elaboração dos casos de teste**

⬇️

**5️⃣ Definição de cenários positivos e negativos**

⬇️

**6️⃣ Automação dos cenários selecionados**

⬇️

**7️⃣ Execução automatizada**

⬇️

**8️⃣ Validação através de CI/CD**

---

## 📖 Histórias de Usuário

Foram documentadas histórias relacionadas aos principais fluxos analisados no projeto.

| ID | Funcionalidade |
| --- | --- |
| **HU01** | Cadastro de usuário |
| **HU02** | Login |
| **HU03** | Carrinho de compras |

📄 [Consultar histórias de usuário](./docs/historia-do-usuario.md)

---

## ✅ Critérios de Aceite

Os critérios de aceite foram estruturados utilizando sintaxe **BDD — Given / When / Then**, facilitando a definição do comportamento esperado da aplicação.

Foram considerados cenários relacionados a:

- Cadastro válido
- Campos obrigatórios
- Dados inválidos
- Login válido
- Credenciais inválidas
- Autenticação
- Adição de produto ao carrinho
- Permanência do produto no carrinho
- Informações apresentadas no carrinho

📄 [Consultar critérios de aceite](./docs/criterios-de-aceite.md)

---

## 🧪 Casos de Teste

Foram documentados **9 casos de teste**, contemplando fluxos positivos, negativos e validações complementares.

### 📊 Cobertura documentada

| Categoria | Quantidade |
| --- | ---: |
| Casos de teste | **9** |
| Testes positivos | **4** |
| Testes negativos | **3** |
| Validações complementares | **2** |

Os casos de teste possuem:

- Pré-condições
- Passos de execução
- Resultado esperado
- Prioridade
- Tipo de teste
- Rastreabilidade com história de usuário
- Rastreabilidade com critério de aceite

📄 [Consultar casos de teste](./docs/casos-de-teste.md)

---

## 🔗 Rastreabilidade

A documentação foi estruturada de forma a manter a relação entre requisito, comportamento esperado e validação.

```text
História do Usuário
        ↓
Critério de Aceite
        ↓
Caso de Teste
        ↓
Automação selecionada
```

### Exemplo

```text
HU03 — Carrinho de Compras
        ↓
CA07 — Adicionar produto
        ↓
CT07 — Adicionar produto ao carrinho
        ↓
carrinho.cy.js
```

Essa estrutura facilita a identificação da origem de cada cenário e sua relação com os testes executados.

---

# 🤖 Automação de Testes

A automação foi desenvolvida utilizando **Cypress + JavaScript**.

Atualmente, o projeto possui dois cenários automatizados:

- 🏠 Smoke Test da página inicial
- 🛒 Teste funcional E2E do carrinho de compras

---

## 🏠 Smoke Test — Home

Arquivo:

`cypress/e2e/home.cy.js`

O cenário verifica se a página inicial da aplicação pode ser acessada corretamente e se um elemento esperado está visível.

### Fluxo

```text
Acessar aplicação
      ↓
Carregar página inicial
      ↓
Validar conteúdo esperado
```

Esse teste funciona como uma validação rápida da disponibilidade básica da aplicação.

---

## 🛒 E2E — Carrinho de Compras

Arquivo:

`cypress/e2e/carrinho.cy.js`

O cenário automatizado valida o fluxo de inclusão de um produto no carrinho.

### Fluxo

```text
Acessar aplicação
      ↓
Acessar produtos
      ↓
Selecionar produto
      ↓
Adicionar ao carrinho
      ↓
Acessar carrinho
      ↓
Validar produto adicionado
```

O teste verifica especificamente se o produto selecionado está presente no carrinho após a inclusão.

---

## 📊 Cobertura Automatizada

A documentação de testes possui uma cobertura maior do que a automação atualmente implementada.

| Cenário | Tipo | Situação |
| --- | --- | --- |
| Acesso à página inicial | Smoke Test | ✅ Automatizado |
| Adicionar produto ao carrinho | E2E / Funcional | ✅ Automatizado |
| Cadastro de usuário | Funcional | 📋 Documentado |
| Login | Funcional | 📋 Documentado |
| Validações adicionais do carrinho | Funcional | 📋 Documentado |

> A automação contempla cenários selecionados do projeto, enquanto os demais permanecem documentados como parte da estratégia de testes e podem ser incorporados futuramente à suíte automatizada.

---

# ⚙️ Integração Contínua — CI/CD

O projeto possui integração contínua configurada utilizando **GitHub Actions**.

A pipeline executa automaticamente a suíte Cypress quando ocorre:

- `push` na branch `main`
- `pull_request` direcionado para a branch `main`

### 🔄 Fluxo da pipeline

```text
Push / Pull Request
        ↓
GitHub Actions
        ↓
Checkout do repositório
        ↓
Configuração do Node.js
        ↓
Instalação das dependências (npm ci, com cache)
        ↓
Execução do Cypress
        ↓
Resultado dos testes
        ↓
Upload de screenshots (somente em caso de falha)
```

Também é possível executar a pipeline manualmente pela aba **Actions**, no botão **Run workflow**.

As dependências são instaladas com `npm ci`, que utiliza exatamente as versões registradas no `package-lock.json`, garantindo o mesmo ambiente em todas as execuções.

O workflow está disponível em:

`.github/workflows/pipeline.yml`

---

## ✅ Status dos testes

O status atual da suíte aparece no badge **Cypress Tests**, no topo deste README, e o histórico de execuções está disponível na aba [Actions](https://github.com/laurajala/automation-exercise-qa/actions).

A execução automática permite identificar falhas nos cenários automatizados após alterações realizadas no projeto.

---

# 🗂️ Estrutura do Projeto

```text
automation-exercise-qa/
│
├── .github/
│   └── workflows/
│       └── pipeline.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── carrinho.cy.js
│   │   └── home.cy.js
│   │
│   └── support/
│       └── e2e.js
│
├── docs/
│   ├── casos-de-teste.md
│   ├── criterios-de-aceite.md
│   ├── estimativa.md
│   └── historia-do-usuario.md
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🛠️ Tecnologias e Ferramentas

<div align="center">

<img src="https://img.shields.io/badge/Cypress-Testes_E2E-17202C?style=for-the-badge&logo=cypress&logoColor=white">

<img src="https://img.shields.io/badge/JavaScript-Automação-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">

<img src="https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">

<img src="https://img.shields.io/badge/Git-Versionamento-F05032?style=for-the-badge&logo=git&logoColor=white">

<img src="https://img.shields.io/badge/GitHub-Repositório-181717?style=for-the-badge&logo=github&logoColor=white">

</div>

---

# ▶️ Como executar o projeto

## Pré-requisitos

Para executar o projeto localmente é necessário possuir:

- Node.js 20 ou superior
- npm
- Git

---

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/laurajala/automation-exercise-qa.git
```

---

## 2️⃣ Acessar o projeto

```bash
cd automation-exercise-qa
```

---

## 3️⃣ Instalar as dependências

```bash
npm install
```

---

## 4️⃣ Abrir o Cypress

Para utilizar a interface gráfica:

```bash
npm run cy:open
```

---

## 5️⃣ Executar em modo headless

```bash
npm run cy:run
```

Também é possível executar através de:

```bash
npm test
```

---

# 💡 Competências Demonstradas

### 🧪 Quality Assurance

`Manual Testing` • `Functional Testing` • `Smoke Testing`

`Positive Testing` • `Negative Testing`

`Test Design` • `Test Cases`

### 📋 Análise e Documentação

`User Stories` • `Acceptance Criteria`

`BDD` • `Given / When / Then`

`Requirements Traceability`

`Test Documentation`

### 🤖 Test Automation

`Cypress` • `JavaScript`

`E2E Testing` • `Assertions`

`DOM Validation`

### ⚙️ Engenharia e CI/CD

`Node.js` • `npm`

`Git` • `GitHub`

`GitHub Actions` • `CI/CD`

---

# 🚀 Possíveis Evoluções

O projeto pode evoluir com a implementação de novos cenários e práticas de automação, como:

- 🤖 Automação dos cenários de login
- 👤 Automação do fluxo de cadastro
- 🛒 Ampliação da cobertura do carrinho
- 🧩 Criação de comandos reutilizáveis
- 📦 Utilização de fixtures para massa de dados
- 📸 Armazenamento de evidências de execução
- 📊 Geração de relatórios automatizados
- 🔄 Ampliação da suíte de regressão
- ⚙️ Evolução da pipeline de integração contínua

---

# 👩‍💻 Autora

<div align="center">

### Laura Ajala

**Quality Engineer**

Testes Funcionais • Automação • APIs • Banco de Dados

<br>

<a href="https://www.linkedin.com/in/laura-ajala/">
<img src="https://img.shields.io/badge/LinkedIn-Laura_Ajala-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white">
</a>

<a href="https://github.com/laurajala">
<img src="https://img.shields.io/badge/GitHub-laurajala-181717?style=for-the-badge&logo=github&logoColor=white">
</a>

</div>

---

<div align="center">

### 🧪 Quality is built, tested and continuously improved.

**Obrigada pela visita! 🚀**

</div>
