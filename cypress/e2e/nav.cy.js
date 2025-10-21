/// <reference types="cypress" />

describe('TS01 Navigation & Header', () => {
  beforeEach(() => {
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79');
  });

  it('TC01 Puslapis įsikrauna be klaidų', () => {
    cy.location('pathname').should('include', '/paslaugos/kaip-tapti-skaitytoju/79');
  });

  it('TC02 Logotipas matomas', () => {
    cy.get('a[href="/"]').first().should('be.visible');
  });

  it('TC03 Logotipas grąžina į pagrindinį puslapį', () => {
    cy.get('a[href="/"]').first().click();
    cy.location('pathname').should('eq', '/');
  });

  it('TC04 Meniu „Paslaugos“ veikia', () => {
    cy.visit('https://www.klavb.lt/');
    cy.contains('a', 'Paslaugos', { timeout: 8000 }).should('exist');
    cy.location('pathname').should('include', '/paslaugos');
  });

  it('TC05 Antraštė „Kaip tapti skaitytoju“ matoma', () => {
    cy.contains(/Kaip tapti skaitytoju/i).should('be.visible');
  });
});
