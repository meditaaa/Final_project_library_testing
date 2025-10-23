# 📘 Library Testing – Cypress E2E Automation Project

### 🔗 Website under test  
**URL:** [https://www.klavb.lt](https://www.klavb.lt)

---

## 🧭 Project Overview

This project is part of the **BIT Academy QA / Software Testing program**.  
The goal is to design and automate **end-to-end (E2E)** tests using **Cypress**, following a real-world QA workflow — including **exploratory testing**, **Jira test management**, **Git version control**, and **CI/CD pipeline integration** via **GitHub Actions**.

The selected website section, *“Kaip tapti skaitytoju”* (How to become a reader), belongs to the **Klaipėda City Public Library** official portal.  

Main focus areas:
- Navigation and header functionality  
- Page content and internal links  
- Footer visibility, contact info, and accessibility  

---

## 🎯 Objectives

- ✅ Perform exploratory testing to identify user flows  
- ✅ Define **3 Epics** and **15+ Test Cases (TC)**  
- ✅ Document manual test cases in `testCases.md`  
- ✅ Automate core E2E flows using **Cypress** (`.cy.js` files)  
- ✅ Manage test progress in **Jira (Scrum project)**  
- ✅ Use **Git & GitHub** for version control  
- ✅ Integrate **CI/CD pipeline** via **GitHub Actions**

---

## 🧱 Folder & File Structure

library-testing-cypress/
├─ cypress/
│ ├─ e2e/
│ │ ├─ nav.cy.js # TS01 – Navigation & Header
│ │ ├─ content.cy.js # TS02 – Content & Links
│ │ └─ footer.cy.js # TS03 – Footer & Accessibility
│ ├─ support/
│ │ ├─ commands.js
│ │ └─ e2e.js
│ └─ fixtures/
├─ .github/
│ └─ workflows/
│ └─ cypress.yml # GitHub Actions CI workflow
├─ testCases.md # Manual test documentation
├─ README.md
├─ package.json
├─ cypress.config.js
└─ package-lock.json


---

## 🗂️ Jira Project Setup

**Project name:** Library Testing – Cypress Project  
**Sprint:** LTCP Sprint 1  
**Board type:** Scrum

### 🧩 Epics

| Epic ID | Description |
|----------|-------------|
| EPIC-01 | Navigation & Header |
| EPIC-02 | Content & Links |
| EPIC-03 | Footer & Accessibility |

📊 **Total test cases:** 15 (TC01–TC15)

### Included Jira screenshots:
- 🧾 *Backlog view* – before sprint start  
- 🚀 *Board view* – after sprint start  

---

## ⚙️ CI/CD Integration (GitHub Actions)

- Workflow file: `.github/workflows/cypress.yml`  
- Trigger: Runs Cypress tests automatically on every push to `main`  
- Output: Test report summary visible in GitHub Actions tab  

---

## 🧪 Cypress Test Scenarios Summary

| Scenario | Description | Test Cases |
|-----------|--------------|-------------|
| **TS01 – Navigation & Header** | Checks site navigation and header visibility | TC01–TC05 |
| **TS02 – Content & Links** | Validates main content and internal links | TC06–TC10 |
| **TS03 – Footer & Accessibility** | Ensures footer visibility and responsive layout | TC11–TC15 |

---

## 🧾 Example Test Case (from `nav.cy.js`)

```js
it('TC04 – Meniu „Paslaugos“ veikia', () => {
  cy.visit('https://www.klavb.lt/');
  cy.get('body').then(($body) => {
    if ($body.find('#hamburger, .menu_toggle').length > 0) {
      cy.get('#hamburger, .menu_toggle').click({ force: true });
    }
  });
  cy.contains('a', 'Paslaugos', { timeout: 8000 })
    .should('exist')
    .click({ force: true });
  cy.location('pathname', { timeout: 8000 })
    .should('include', '/paslaugos');
});
Tools & Technologies Used
Category	Tools
Test Automation	Cypress
Test Management	Jira
Version Control	Git & GitHub
CI/CD	GitHub Actions
Documentation	Markdown (.md)

Edita
QA / Software Testing Student – BIT Academy
2025
