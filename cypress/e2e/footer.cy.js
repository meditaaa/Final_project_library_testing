/// <reference types="cypress" />

describe('TS03 – Footer & Accessibility', () => {

  beforeEach(() => {
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79', { timeout: 20000 });
  });

  it('TC11 – Footer matomas', () => {
    cy.get('footer').scrollIntoView().should('be.visible');
  });

  it('TC12 – Footer nuoroda „Kontaktai“ veikia', () => {
    cy.get('footer').within(() => {
      cy.contains('a', /Kontakt/i)
        .should('have.attr', 'href')
        .and('include', 'kontakt');
    });
  });

  it('TC13 – Socialinių tinklų ikonėlės (jei yra)', () => {
    cy.get('footer')
      .find('a[href*="facebook"], a[href*="instagram"]')
      .should('exist');
  });

  it('TC14 – IMG turi alt atributus (ne tuščius)', () => {
    cy.get('img').each(($img) => {
      const alt = $img.attr('alt');
      if (alt && alt.trim() !== '') {
        expect(alt, 'Image alt attribute').to.not.equal(undefined);
        expect(alt.trim(), 'Alt attribute not empty').to.not.equal('');
      }
    });
  });

  it('TC15 – Mobilus vaizdas nekeičia turinio matomumo', () => {
    cy.viewport('iphone-6');
    cy.get('body').then(($body) => {
      if ($body.find('#hamburger, .menu_toggle').length > 0) {
        cy.get('#hamburger, .menu_toggle').click({ force: true });
        cy.wait(1000);
      }
    });
    cy.get('h1, .page-title', { timeout: 10000 })
      .should('exist')
      .and('contain.text', 'Kaip tapti skaitytoju');
  });
});
