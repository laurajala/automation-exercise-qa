// Lê a resposta da API do Automation Exercise,
// que pode chegar como texto ou como objeto
function lerResposta(response) {
  return typeof response.body === 'string'
    ? JSON.parse(response.body)
    : response.body
}

// Cria uma conta diretamente pela API (preparação de massa)
Cypress.Commands.add('criarContaViaApi', (usuario, email) => {
  cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: {
      name: usuario.nome,
      email: email,
      password: usuario.senha,
      title: usuario.titulo,
      birth_date: usuario.dia,
      birth_month: usuario.mes,
      birth_year: usuario.ano,
      firstname: usuario.primeiroNome,
      lastname: usuario.sobrenome,
      company: usuario.empresa,
      address1: usuario.endereco,
      address2: 'Apto 1',
      country: usuario.pais,
      zipcode: usuario.cep,
      state: usuario.estado,
      city: usuario.cidade,
      mobile_number: usuario.celular
    }
  }).then((response) => {
    expect(lerResposta(response).responseCode).to.eq(201)
  })
})

// Exclui a conta pela API (limpeza da massa após o teste)
Cypress.Commands.add('excluirContaViaApi', (email, senha) => {
  cy.request({
    method: 'DELETE',
    url: '/api/deleteAccount',
    form: true,
    body: {
      email: email,
      password: senha
    }
  })
})

// Realiza login pela interface
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(senha, { log: false })
  cy.get('[data-qa="login-button"]').click()
})

// Primeira etapa do cadastro: nome e e-mail
Cypress.Commands.add('iniciarCadastro', (nome, email) => {
  cy.visit('/login')
  cy.get('[data-qa="signup-name"]').type(nome)
  cy.get('[data-qa="signup-email"]').type(email)
  cy.get('[data-qa="signup-button"]').click()
})

// Segunda etapa do cadastro: dados da conta e endereço
Cypress.Commands.add('preencherDadosDaConta', (usuario) => {
  cy.get('#id_gender2').check()
  cy.get('[data-qa="password"]').type(usuario.senha, { log: false })
  cy.get('[data-qa="days"]').select(usuario.dia)
  cy.get('[data-qa="months"]').select(usuario.mes)
  cy.get('[data-qa="years"]').select(usuario.ano)
  cy.get('[data-qa="first_name"]').type(usuario.primeiroNome)
  cy.get('[data-qa="last_name"]').type(usuario.sobrenome)
  cy.get('[data-qa="company"]').type(usuario.empresa)
  cy.get('[data-qa="address"]').type(usuario.endereco)
  cy.get('[data-qa="country"]').select(usuario.pais)
  cy.get('[data-qa="state"]').type(usuario.estado)
  cy.get('[data-qa="city"]').type(usuario.cidade)
  cy.get('[data-qa="zipcode"]').type(usuario.cep)
  cy.get('[data-qa="mobile_number"]').type(usuario.celular)
})
