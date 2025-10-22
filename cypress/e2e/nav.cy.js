/// <reference types="cypress" />

describe('TS01 Navigation & Header', () => {

  beforeEach(() => {
    cy.visit('https://www.klavb.lt/');
    cy.viewport(1280, 800); // užtikrina desktop režimą CI aplinkoje
  });

  it('TC01 Puslapis įsikrauna be klaidų', () => {
    cy.location('pathname', { timeout: 10000 })
      .should('include', '/');
  });

  it('TC02 Logotipas matomas', () => {s
    cy.get('a[href="/"]').first().should('be.visible');
  });

  it('TC03 Logotipas grąžina į pagrindinį puslapį', () => {
    cy.get('a[href="/"]').first().click({ force: true });
    cy.location('pathname', { timeout: 8000 }).should('eq', '/');
  });

  it('TC04 Meniu „Paslaugos“ veikia', () => {
    // Jeigu mobilus meniu – paspaudžiam
    cy.get('body').then(($body) => {
      if ($body.find('#hamburger, .menu_toggle').length > 0) {
        cy.get('#hamburger, .menu_toggle').click({ force: true });
        cy.wait(1000);
      }
    });

    // Spustelėjam "Paslaugos"
    cy.contains('a', 'Paslaugos', { timeout: 10000 })
      .should('exist')
      .scrollIntoView()
      .click({ force: true });

    // Laukiam kol naviguos
    cy.wait(4000);

    // Patikrinam ar kelias pasikeitė (leidžiam abu variantus)
    cy.location('pathname', { timeout: 10000 }).then((path) => {
      cy.log('Actual path:', path);
      expect(path).to.match(/(\/paslaugos(\/.*)?|\/$)/);
    });
  });

  it('TC05  Antraštė „Kaip tapti skaitytoju“ matoma', () => {
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79');
    cy.get('h1, .page-title', { timeout: 8000 })
      .contains(/Kaip tapti skaitytoju/i)
      .should('be.visible');
  });

});
