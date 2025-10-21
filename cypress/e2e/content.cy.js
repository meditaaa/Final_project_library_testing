/// <reference types="cypress" />

describe('TS02 Content & Links', () => {

  beforeEach(() => {
    // 💡 Apsilankom tinkamame puslapyje
    cy.visit('https://www.klavb.lt/paslaugos/kaip-tapti-skaitytoju/79');
  });

  it('TC06 Matomas pagrindinis tekstas „Registracija skaitytoju“', () => {
    // 💡 Laukiam iki 8 sek., nes turinys gali krautis lėtai
    cy.contains(/Registracija/i, { timeout: 8000 }).should('exist');
  });

  it('TC07 Nuoroda „Bibliotekos taisyklės“ turi href', () => {
    // 💡 Laukiam iki 8 sek., ieškom nuorodos, kurioje yra žodis "taisyk"
    cy.contains('a', /taisyk/i, { timeout: 8000 })
      .should('have.attr', 'href')
      .and('not.be.empty'); // papildomai patikrina, kad href nėra tuščias
  });

  it('TC08 Nuoroda „Elektroninis katalogas“ turi href', () => {
    // 💡 Uždedam timeout ir tikrinam href
    cy.contains('a', /katalog/i, { timeout: 8000 })
      .should('have.attr', 'href')
      .and('not.be.empty');
  });

  it('TC9 Kontaktinė informacija matoma puslapio apačioje', () => {
    // 💡 Scrollinam į apačią, tikrinam footerį
    cy.scrollTo('bottom');
    cy.get('footer').should('be.visible');
    cy.get('footer a[href*="kontakt"]').should('exist');
  });

});
