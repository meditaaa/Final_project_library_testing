/// <reference types="cypress" />

describe('TS01 – Navigation & Header', () => {

  beforeEach(() => {
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79', { timeout: 20000 });
    cy.viewport(1366, 768);
  });

  it('TC01 – Puslapis įsikrauna be klaidų', () => {
    cy.location('pathname', { timeout: 15000 })
      .should('include', '/paslaugos/kaip-tapti-skaitytoju/79');
  });

  it('TC02 – Logotipas matomas', () => {
    cy.get('header img, .site-branding img', { timeout: 15000 })
      .should('exist')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it('TC03 – Logotipas grąžina į pagrindinį puslapį', () => {
    cy.visit('https://www.klavb.lt', { timeout: 15000 });
    cy.get('a[href="/"], a[href="https://www.klavb.lt"], header a', { timeout: 15000 })
      .first()
      .click({ force: true });
    cy.url({ timeout: 15000 }).should('match', /^https:\/\/www\.klavb\.lt\/?$/);
  });

  it('TC04 – Meniu „Paslaugos“ veikia', () => {
    cy.visit('https://www.klavb.lt/', { timeout: 20000 });
    cy.get('body').then(($body) => {
      if ($body.find('#hamburger, .menu_toggle').length > 0) {
        cy.get('#hamburger, .menu_toggle').click({ force: true });
        cy.wait(1000);
      }
    });
    cy.contains('a', 'Paslaugos', { timeout: 15000 })
      .click({ force: true });
    cy.location('pathname', { timeout: 15000 })
      .should('include', '/paslaugos');
  });

  it('TC05 – Antraštė „Kaip tapti skaitytoju“ matoma', () => {
    cy.get('h1, .page-title, .entry-title, .content h1', { timeout: 15000 })
      .should('exist')
      .and('contain.text', 'Kaip tapti skaitytoju');
  });
});
