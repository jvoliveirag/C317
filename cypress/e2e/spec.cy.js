describe('Cenário de teste: Testar funcionalidade do botao de inicio', () => {
  it('Caso de teste: Ir para a etapa seguinte (filtro de indicação).', () => {
      cy.visit('https://pickme-vert.vercel.app/');
      cy.get('button')
      .contains('Surpreenda-me')
      .click(); // Clica no botão "Surpreenda-me"

    cy.url().should('include', '/recommendation'); // Verifica se a URL redirecionou para a página "recommendation"
  })
})