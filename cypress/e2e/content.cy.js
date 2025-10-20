/// <reference types="cypress" />

describe('TS02 – Content & Links', () => {
  beforeEach(() => {
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79');
  });

  it('TC06 – Matomas pagrindinis tekstas „Registracija skaitytoju“', () => {
    cy.contains(/registracija/i).should('be.visible');
  });

  it('TC07 – Yra sąrašinė struktūra (ul/ol > li)', () => {
    cy.get('ul li, ol li').its('length').should('be.gt', 0);
  });

  it('TC08  Nuoroda „Bibliotekos taisyklės“ turi href', () => {
    cy.contains('a', /taisyk/i).should('have.attr', 'href');
  });

  it('TC09 Nuoroda „Elektroninis katalogas“ turi href', () => {
    cy.contains('a', /katalog/i).should('have.attr', 'href');
  });

  it('TC10 Kontaktinė informacija matoma puslapio apačioje', () => {
    cy.scrollTo('bottom');
    cy.contains(/kontakt/i).should('be.visible');
  });
});
