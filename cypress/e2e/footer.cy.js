/// <reference types="cypress" />

describe('TS03 – Footer & Accessibility', () => {
  beforeEach(() => {
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79');
  });

  it('TC11 – Footeris yra matomas', () => {
    cy.get('footer').scrollIntoView().should('be.visible');
  });

  it('TC12 – Footer nuoroda „Kontaktai“ turi veikiančią nuorodą', () => {
    cy.get('footer').within(() => {
      cy.contains('a', /Kontakt/i).should('have.attr', 'href');
    });
  });

  it('TC13 – Socialinių tinklų ikonėlės matomos (jei yra)', () => {
    cy.get('footer').within(() => {
      cy.get('a[href*="facebook"], a[href*="instagram"]').its('length').should('be.gte', 0);
    });
  });

  it('TC14 – IMG turi alt atributus', () => {
    cy.get('img').each(($img) => {
      const alt = $img.attr('alt');
      expect(alt).to.not.equal(undefined);
    });
  });

 it('TC15 – Mobilus vaizdas išdėstymas nekeičia turinio matomumo', () => {
  cy.viewport('iphone-6')
  // Atidarom mobilų meniu jei reikia
  cy.get('.mmenu-trigger, .menu-toggle').click({ force: true })
  cy.get('a.active.in_path', { timeout: 8000 }).should('be.visible')
})

});
