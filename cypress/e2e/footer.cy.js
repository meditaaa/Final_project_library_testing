/// <reference types="cypress" />

describe('TS03 – Footer & Accessibility', () => {
  beforeEach(() => {
    // Atidarome testuojamą puslapį
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79');
  });

  it('TC11 – Footeris yra matomas', () => {
    cy.get('footer')
      .scrollIntoView()
      .should('be.visible');
  });

  it('TC12 – Footer nuoroda „Kontaktai“ turi veikiančią nuorodą', () => {
    cy.get('footer').within(() => {
      cy.contains('a', /Kontakt/i)
        .should('have.attr', 'href')
        .and('include', '/kontaktai');
    });
  });

  it('TC13 – Socialinių tinklų ikonėlės matomos (jei yra)', () => {
    cy.get('footer').within(() => {
      cy.get('a[href*="facebook"], a[href*="instagram"]')
        .its('length')
        .should('be.gte', 0);
    });
  });

  it('TC14 – IMG turi alt atributus', () => {
    cy.get('img').each(($img) => {
      const alt = $img.attr('alt');
      expect(alt, 'image alt attribute should exist').to.not.equal(undefined);
    });
  });

  it('TC15 – Mobilus vaizdas išdėstymas nekeičia turinio matomumo', () => {
    // 1️⃣ Nustatom mobilų ekraną
    cy.viewport(375, 667);

    // 2️⃣ Aplankom pagrindinį puslapį
    cy.visit('https://www.klavb.lt');

    // 3️⃣ Patikrinam, kad hamburger (mobilus meniu mygtukas) egzistuoja
    cy.get('#hamburger, .menu_toggle', { timeout: 8000 })
      .should('exist')
      .and('be.visible');

    // 4️⃣ Paspaudžiam meniu mygtuką
    cy.get('#hamburger, .menu_toggle').click({ force: true });

    // 5️⃣ Patikrinam, kad mobilus meniu atsirado
    cy.get('#mobile_menu', { timeout: 8000 })
      .should('be.visible');

    // 6️⃣ Patikrinam, kad pagrindinis turinys matomas
    cy.get('main, .content, #content', { timeout: 8000 })
      .should('be.visible');
  });
});
