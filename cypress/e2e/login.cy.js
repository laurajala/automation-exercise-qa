describe('Login', () => {

  let usuario
  let email

  beforeEach(() => {
    email = `qa.login.${Date.now()}@teste.com`

    // Preparação: cria um usuário pela API, sem depender do teste de cadastro
    cy.fixture('usuario').then((dados) => {
      usuario = dados
      cy.criarContaViaApi(usuario, email)
    })
  })

  afterEach(() => {
    // Limpeza: remove o usuário criado para o teste
    cy.excluirContaViaApi(email, usuario.senha)
  })

  it('CT04 - Deve realizar login com credenciais válidas', () => {
    cy.login(email, usuario.senha)

    cy.contains('Logged in as')
      .should('be.visible')
      .and('contain', usuario.nome)
  })

  it('CT05 - Não deve realizar login com senha inválida', () => {
    cy.login(email, 'SenhaErrada@123')

    cy.contains('Your email or password is incorrect!').should('be.visible')
    cy.contains('Logged in as').should('not.exist')
  })

  it('CT06 - Não deve realizar login sem preencher os campos obrigatórios', () => {
    cy.visit('/login')
    cy.get('[data-qa="login-button"]').click()

    cy.url().should('include', '/login')
    cy.get('[data-qa="login-email"]').then(($campo) => {
      expect($campo[0].validity.valueMissing).to.be.true
    })
  })

})
