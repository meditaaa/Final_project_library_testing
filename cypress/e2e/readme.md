# 📘 Library Testing – Cypress Project

Automated End-to-End testing project for the **Klaipėda City Public Library** website:  
 [https://www.klavb.lt](https://www.klavb.lt)

This project verifies the main website functionality, including **navigation**, **content pages**, **footer links**, and **overall accessibility**.  
It was developed as part of the **BIT QA / Cypress Automation Internship Program**.

---

## Techs
- **Cypress** – End-to-End testing framework  
- **Jira** – Test case and sprint management  
- **GitHub Actions** – Continuous Integration pipeline  
- **VS Code** – IDE for development  
- **Git** – Version control system

---

## Project Goals
- Perform exploratory and automated testing on the main library website  
- Verify that navigation, service pages, and footer links work correctly  
- Ensure that all major UI elements are visible and accessible  
- Manage and document testing progress in Jira  
- Execute automated tests through GitHub Actions

---

## Test Scenarios (TS)
| TS No.   | Scenario Name          | Goal                                                                 |
| -------- | ---------------------- | -------------------------------------------------------------------- |
| **TS01** | Navigation & Header    | Verify the header, logo, and navigation menus on the main site       |
| **TS02** | Content & Links        | Validate content sections, text visibility, and all page links       |
| **TS03** | Footer & Accessibility | Check footer information, social links, and accessibility compliance |

---

##  Test Cases

### TS01 – Navigation & Header
1. **TC01** – Homepage loads without errors  
2. **TC02** – Library logo is visible  
3. **TC03** – Clicking the logo redirects to the homepage  
4. **TC04** – “Services” menu link opens correctly  
5. **TC05** – Page headings are displayed properly  

###  TS02 – Content & Links
6. **TC06** – Main section content is visible  
7. **TC07** – Page contains structured lists (ul/ol > li)  
8. **TC08** – “Library Rules” link opens the correct page  
9. **TC09** – “Online Catalogue” link works properly  
10. **TC10** – Contact information is visible at the bottom of the page  

### TS03 – Footer & Accessibility
11. **TC11** – Footer area is visible on all pages  
12. **TC12** – “Contacts” link in the footer works correctly  
13. **TC13** – Social media icons (Facebook/Instagram) are visible  
14. **TC14** – All images contain valid `alt` attributes  
15. **TC15** – Mobile view layout is responsive and content remains accessible  

---

## 🧰 Folder Structure
