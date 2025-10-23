/// <reference types="cypress" />

describe('TS02 Content & Links', () => {

  beforeEach(() => {
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79', { timeout: 15000 });
  });

  it('TC07 Matomas pagrindinis tekstas „Registracija skaitytoju“', () => {

    cy.contains(/skaitytojo|užsiregistru|skaitytoj/i, { timeout: 10000 })
      .should('exist');
  });

  it('TC09 Nuoroda „Bibliotekos taisyklės“ turi href', () => {
    cy.contains('a', /taisyk/i, { timeout: 10000 })
      .should('have.attr', 'href')
      .and('not.be.empty');
  });

  it('TC10 Nuoroda „Elektroninis katalogas“ turi href', () => {
    cy.contains('a', /katalog/i, { timeout: 10000 })
      .should('have.attr', 'href')
      .and('not.be.empty');
  });

  it('TC11 Kontaktinė informacija matoma puslapio apačioje', () => {
    cy.scrollTo('bottom');
    cy.get('footer', { timeout: 8000 }).should('be.visible');
    cy.get('footer a[href*="kontakt"]').should('exist');
  });

});
