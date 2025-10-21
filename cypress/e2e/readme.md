# 📘 Library Testing – Cypress E2E Automation Project

### 🔗 Website under test  
**URL:** [https://www.klavb.lt](https://www.klavb.lt)

## Project Overview

This project is part of the **BIT Academy QA / Software Testing program**.  
The purpose is to design and automate **end-to-end (E2E)** tests using **Cypress**, following a real-world QA workflow — including **manual exploratory testing**, **Jira test management**, **Git version control**, and **CI/CD pipeline integration** via **GitHub Actions**.

The selected website section, *“Kaip tapti skaitytoju”* (How to become a reader), belongs to the **Klaipėda City Public Library** official portal.  
The focus areas include:
- Navigation and header buttons  
- Main content and internal links  
- Footer visibility, contact info, and accessibility  

## Objectives

- ✅ Perform exploratory testing to identify key user flows.  
- ✅ Define **3 Epics** and at least **15 Test Cases (TC)**.  
- ✅ Document manual tests in `testCases.md`.  
- ✅ Automate main E2E flows using Cypress (`.cy.js` files).  
- ✅ Manage tasks and testing in Jira (Scrum project).  
- ✅ Use Git and GitHub for version control.  
- ✅ Implement CI/CD automation with GitHub Actions.  

---

## QA Documentation Structure

| Level | Purpose | Example |
|--------|----------|----------|
| **Epic** | High-level testing area / website section | EPIC-01 – Navigation & Header |
| **Test Scenario (TS)** | Group of related test cases | TS01 – Header functionality |
| **Test Case (TC)** | Single test with steps and expected results | TC02 – Header “Paremkite” button opens Support page |

🟩 **Total:** 3 Epics → 3 Scenarios → 16 Test Cases  

All test cases are described in [testCases.md](./testCases.md)

---

## 🧱 Folder & File Structure

## Jira Project Setup

This project includes a Jira board created for test management and sprint tracking.

Project name: Library Testing – Cypress Project

Epics:

EPIC-01 – Navigation & Header

EPIC-02 – Content & Links

EPIC-03 – Footer & Accessibility

Total test cases: 16 (TC01–TC16)

Sprint: LTCP Sprint 1

Screenshots included:

Backlog view (before sprint start)

Board view (after sprint start)

📅 Goal: To plan, organize, and track Cypress automation test coverage for the website https://www.klavb.lt