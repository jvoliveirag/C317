import { FaRedo, FaHome, FaBookmark, FaArrowLeft } from "react-icons/fa";
import React from "react";

const APP_LINK = 'https://pickme-vert.vercel.app/'  //link da aplicacao em prod
const DEV_LINK = 'http://localhost:3000/'           //link ambiente dev
const TEST_LINK = DEV_LINK //colocar o link do ambiente que deseja testar

describe('Teste dos botões da tela de início', () => {
  beforeEach(() => {
    cy.visit(TEST_LINK); 
  });
  
  it('Testar botão "Começar": deve redirecionar para a etapa seguinte (filtro de indicação).', () => {
    cy.contains('Começar').click();
    cy.url().should('include', '/preferences'); // Verifica se a URL redirecionou para a pagina "preferences"
  });
  
  it('Testar botão "Surpreenda-me": deve redireconar para a página de recomendação.', () => {
    cy.contains('Surpreenda-me').click();
    cy.url().should('include', '/recommendation'); // Verifica se a URL redirecionou para a pagina "recommendation"
  });
});

describe('Teste dos botões da página de recomendação', () => {
  beforeEach(() => {
    cy.visit(`${TEST_LINK}recommendation`); // Substitua pela URL do seu website
  });

  it("Refazer: gera uma nova indicação (recarrega a página).", () => {
    cy.get("[id='redo-button']") // Seletor para o elemento 
    .click();

    cy.url().should("include", "/recommendation");
  });

  it("Home: redireciona para a página inicial.", () => {
    cy.get("[id='home-button']") // Seletor para o elemento 
    .click();

    cy.url().should("include", "/");
  });

  it("Salvar: caso o usuário não esteja logado redireciona para a página de login, caso esteja para a página de salvos.", () => {
    cy.get("[id='save-button']") // Seletor para o elemento 
    .click();

    cy.url().should("include", "/login"); //implementar logica de caso esteja logado
  });

  it("Voltar: redireciona para a página anterior.", () => {
    cy.get("[id='previous-button']") // Seletor para o elemento 
    .click();

    cy.url().should("include", "/filters");
  });
});
