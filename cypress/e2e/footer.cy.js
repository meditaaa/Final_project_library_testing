/// <reference types="cypress" />

describe('TS03 – Footer & Accessibility', () => {
  beforeEach(() => {
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79');
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

  it('TC14 – IMG turi alt atributus', () => {
    cy.get('img').each(($img) => {
      const alt = $img.attr('alt');
      expect(alt, 'Image alt attribute').to.not.equal(undefined);
    });
  });

  it('TC15 – Mobilus vaizdas išdėstymas nekeičia turinio matomumo', () => {
    cy.viewport('iphone-6');

    // Atidarom mobilų meniu jei reikia
    cy.get('body').then(($body) => {
      if ($body.find('#hamburger, .menu_toggle').length > 0) {
        cy.get('#hamburger, .menu_toggle').click({ force: true });
        cy.wait(1000);
      }
    });

    // Patikrinam, kad pagrindinė antraštė vis dar matoma
    cy.get('h1, .page-title', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Kaip tapti skaitytoju');
  });
});
