// ✅ Visits the main library homepage
Cypress.Commands.add('visitLibraryHome', () => {
  cy.visit('/'); // since baseUrl = https://www.klavb.lt
});

// ✅ Visits the "How to become a reader" section
Cypress.Commands.add('visitReaderPage', () => {
  cy.visit('/paslaugos/kaip-tapti-skaitytoju/79');
});

// ✅ Checks if a link contains expected href part
Cypress.Commands.add('checkLink', (selector, urlPart) => {
  cy.get(selector)
    .should('have.attr', 'href')
    .and('include', urlPart);
});
