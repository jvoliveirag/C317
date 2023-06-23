/* eslint-disable no-undef */
const APP_LINK = 'https://pickme-vert.vercel.app' // link da aplicacao em prod
// eslint-disable-next-line no-unused-vars
const DEV_LINK = 'http://localhost:3000' // link ambiente dev
const TEST_LINK = APP_LINK // colocar o link do ambiente que deseja testar

describe('Teste dos botões da tela de início', () => {
  beforeEach(() => {
    cy.visit(TEST_LINK)
  })

  it('Testar botão "Começar": deve redirecionar para a etapa seguinte (filtro de indicação).', () => {
    cy.contains('Começar').click()
    cy.url().should('include', '/preferences') // Verifica se a URL redirecionou para a pagina "preferences"
  })

  it('Testar botão "Surpreenda-me": deve redireconar para a página de recomendação.', () => {
    cy.contains('Surpreenda-me', { timeout: 10000 }).click()
    cy.url().should('include', '/recommendation') // Verifica se a URL redirecionou para a pagina "recommendation"
  })
})

describe('Teste dos botões da página de recomendação', () => {
  beforeEach(() => {
    cy.visit(`${TEST_LINK}/recommendation`)
  })

  it('Refazer: deve gerar uma nova indicação (recarrega a página).', () => {
    cy.get("[id='redo-button']", { timeout: 10000 }) // Seletor para o elemento
      .click()

    cy.url().should('include', '/recommendation')
  })

  it('Home: deve redirecionar para a página inicial.', () => {
    cy.get("[id='home-button']") // Seletor para o elemento
      .click()

    cy.url().should('include', '/')
  })

  it('Salvar: caso o usuário não esteja logado deve redirecionar para a página de login, caso esteja, para a página de salvos.', () => {
    cy.get("[id='save-button']") // Seletor para o elemento
      .click()

    cy.url().should('include', '/login') // implementar logica de caso esteja logado
  })

  // FUNCIONALIDADE TEMPORARIAMENTE REMOVIDA
  // it('Voltar: deve redirecionar para a página anterior.', () => {
  //   cy.get("[id='previous-button']") // Seletor para o elemento
  //     .click()

  //   cy.url().should('include', '/filters')
  // })
})

describe('Página de filtros', () => {
  beforeEach(() => {
    cy.visit(`${TEST_LINK}/filters`)
  })

  it('Deve exibir o título da página', () => {
    cy.get('title').should('contain', 'Pick for me!')
  })

  it('Botão de próximo: deve redicionar para a página seguinte', () => {
    cy.get("[id='button-next']").click()
    cy.url().should('include', '/recommendation')
  })

  it('Botão de voltar: deve redicionar para a página anterior', () => {
    cy.get("[id='button-previous']").click()
    cy.url().should('include', '/platforms')
  })

  it('Age Range Slider: deve exibir o seu valor inicial para a idade (0)', () => {
    cy.get("[id='age']").contains('Selecione sua idade:')
    cy.get('.text-2xl').contains('0')
  })

  it('Age Range Slider: deve atualizar e exibir o novo valor para a idade (30)', () => {
    cy.get("[id='age']").contains('Selecione sua idade:')
    cy.get('.text-2xl').eq(2).contains('0').as('ageSlider')

    cy.get('@ageSlider').invoke('val', '30').trigger('input') // Atualiza o valor do range slider para 30

    // Verifica se o valor do elemento range foi atualizado corretamente
    cy.get('@ageSlider').should('have.value', '30')
  })

  it('Duration Range Slider: deve exibir o seu valor inicial para a duração (1)', () => {
    cy.get("[id='duration']").contains('Selecione a duração:')
    cy.get('.text-2xl').contains('1')
  })

  it('Duration Range Slider: deve atualizar e exibir o novo valor para a duração (35)', () => {
    cy.get("[id='duration']").contains('Selecione a duração:')
    cy.get('.text-2xl').eq(3).contains('1').as('durationSlider')

    cy.get('@durationSlider').invoke('val', '35').trigger('input') // Atualiza o valor do range slider para 30

    // Verifica se o valor do elemento range foi atualizado corretamente
    cy.get('@durationSlider').should('have.value', '35')
  })

  it('Year Selector: deve estar exibindo o valor inicial para o ano de lançamento (1919)', () => {
    cy.get('input[type="number"]').should('have.value', '1919')
  })

  it('Year Selector: deve atualizar e exibir o novo valor para o ano de lançamento (2020)', () => {
    cy.get('input[type="number"]')
      .should('have.value', '1919')
      .as('yearSelector')

    cy.get('@yearSelector').invoke('val', '2020').trigger('input') // Atualiza o valor do input para 2020

    // Verifica se o valor do elemento input foi atualizado corretamente
    cy.get('@yearSelector').should('have.value', '2020')
  })
})

describe('Teste da barra de navegação', () => {
  beforeEach(() => {
    cy.visit(TEST_LINK)
  })

  // FUNCIONALIDADE TEMPORARIAMENTE REMOVIDA
  /*
  it('Perfil: deve redirecionar para o perfil do usuário', () => {
    cy.get('[id="navbar-solid-bg"]').contains('Perfil').click()
    cy.url().should('include', '/profile') // Verifica se a URL redirecionou para o perfil
  })

  it('Coleção: deve redirecionar para a coleção do usuário', () => {
    cy.get('[id="navbar-solid-bg"]').contains('Coleção').click()
    cy.url().should('include', '/collection') // Verifica se a URL redirecionou para a coleção
  })
  */

  it('Ajuda: deve redirecionar o usuário para a documentação do projeto', () => {
    cy.get('[id="navbar-solid-bg"]').contains('Ajuda').click()
    cy.wait(2000)
    cy.origin('https://github.com', () => {
      // mudando de subdominio
      cy.url().should('include', '/jvoliveirag/C317/blob/main/README.md') // Verifica se a URL redirecionou para a coleção
    })
  })

  it('Contato: deve redirecionar o usuário para a documentação do projeto', () => {
    cy.get('[id="navbar-solid-bg"]').contains('Contato').click()
    cy.wait(2000)
    cy.origin('https://github.com', () => {
      // mudando de subdominio
      cy.url().should('include', '/jvoliveirag/C317/blob/main/README.md') // Verifica se a URL redirecionou para a coleção
    })
  })
})
