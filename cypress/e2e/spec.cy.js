describe('Teste dos botões da tela de início', () => {
  beforeEach(() => {
    cy.visit('https://pickme-vert.vercel.app/');
  });
  
  it('Testar botão "Começar": deve redirecionar para a etapa seguinte (filtro de indicação).', () => {
    cy.contains('Começar').click();
    cy.url().should('include', '/preferences'); // Verifica se a URL redirecionou para a página "preferences"
  });
  
  it('Testar botão "Surpreenda-me": deve redireconar para a página de recomendação.', () => {
    cy.contains('Surpreenda-me').click();
    cy.url().should('include', '/recommendation'); // Verifica se a URL redirecionou para a página "recommendation"
  });
});