describe('Cadastro de Usuário', () => {

  let usuario
  let email

  beforeEach(() => {
    cy.fixture('usuario').then((dados) => {
      usuario = dados
    })

    // E-mail único a cada teste, evitando conflito de cadastro duplicado
    email = `qa.cadastro.${Date.now()}@teste.com`
  })

  afterEach(() => {
    // Limpeza: remove a conta, caso ela tenha sido criada
    cy.excluirContaViaApi(email, usuario.senha)
  })

  it('CT01 - Deve realizar o cadastro com sucesso', () => {
    cy.iniciarCadastro(usuario.nome, email)
    cy.preencherDadosDaConta(usuario)
    cy.get('[data-qa="create-account"]').click()

    cy.url().should('include', '/account_created')
    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .and('contain', 'Account Created!')
  })

  it('CT02 - Não deve concluir o cadastro sem preencher os campos obrigatórios', () => {
    cy.iniciarCadastro(usuario.nome, email)
    cy.get('[data-qa="create-account"]').click()

    cy.url().should('include', '/signup')
    cy.get('[data-qa="password"]').then(($campo) => {
      expect($campo[0].validity.valueMissing).to.be.true
    })
  })

  it('CT03 - Não deve prosseguir com o cadastro usando e-mail em formato inválido', () => {
    cy.iniciarCadastro(usuario.nome, 'email-invalido')

    cy.url().should('include', '/login')
    cy.get('[data-qa="signup-email"]').then(($campo) => {
      expect($campo[0].validity.typeMismatch).to.be.true
    })
  })

})
