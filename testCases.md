# 🧪 Library Testing – Cypress Project  
### Website under test: https://www.klavb.lt

---

## 🔹 EPIC-01 – Navigation & Header

| TC ID | Test Case Name | Steps | Expected Result |
|-------|----------------|--------|-----------------|
| **TC01** | Page loads without errors | 1. Open the website URL.<br>2. Verify that the page loads without console or visual errors. | The page loads successfully and displays all content correctly. |
| **TC02** | Header “Paremkite” button opens Support page | 1. From the homepage, click the “Paremkite” button in the top header.<br>2. Observe if a new page opens. | The “Paremkite” button opens the Support/Donation page (`/parama`) in the same or new tab. |
| **TC03** | Navigation menu buttons work correctly | 1. Click “Paslaugos”.<br>2. Click “Informacijos ištekliai”.<br>3. Click “Naujienos”.<br>4. Click “Apie biblioteką”.<br>5. Click “Kontaktai”. | Each navigation button opens the correct page without any errors. |
| **TC04** | “Paslaugos” menu opens correctly | 1. From the homepage, click the “Paslaugos” menu option. | The Services page opens and displays the full list of services. |
| **TC05** | “Kaip tapti skaitytoju” heading is visible | 1. Open the page.<br>2. Verify that the heading “Kaip tapti skaitytoju” is visible. | The main heading is displayed correctly at the top of the page. |
| **TC06** | Social media icons in the header are visible and clickable | 1. Check top-right corner of header for social media icons (Facebook, Instagram, YouTube, LinkedIn).<br>2. Click on each icon. | All icons are visible, clickable, and open the correct external page in a new browser tab. |

---

## 🔹 EPIC-02 – Content & Links

| TC ID | Test Case Name | Steps | Expected Result |
|-------|----------------|--------|-----------------|
| **TC07** | Main registration text is visible | 1. Open the page.<br>2. Verify that the main text “Registracija skaitytoju” is visible. | The main registration text is displayed clearly without errors. |
| **TC08** | List structure (ul/ol/li) is visible | 1. Check if the page contains a list section with bullet points or numbered items. | At least one structured list is visible on the page. |
| **TC09** | Link “Bibliotekos taisyklės” works correctly | 1. Click the “Bibliotekos taisyklės” link. | The link opens the correct Rules page without errors. |
| **TC10** | Link “Elektroninis katalogas” works correctly | 1. Click the “Elektroninis katalogas” link. | The link redirects to the library catalog site in a new tab. |
| **TC11** | Contact information is visible in the footer | 1. Scroll to the bottom of the page.<br>2. Verify contact info (phone, email, address). | Contact details are visible and readable at the page bottom. |

---

## 🔹 EPIC-03 – Footer & Accessibility

| TC ID | Test Case Name | Steps | Expected Result |
|-------|----------------|--------|-----------------|
| **TC12** | Footer section is visible | 1. Scroll to the bottom of the page. | The footer area is visible and contains navigation or informational links. |
| **TC13** | Footer “Kontaktai” link works | 1. Click the “Kontaktai” link inside the footer section. | The link opens the contact page successfully. |
| **TC14** | Social media icons visible in footer | 1. Check if the footer area contains visible social media icons. | Facebook / Instagram icons are displayed properly. |
| **TC15** | All images contain “alt” attributes | 1. Inspect the images using browser dev tools.<br>2. Check if each `<img>` tag includes an `alt` attribute. | Every image has a valid `alt` text for accessibility. |
| **TC16** | Website layout adapts in mobile view | 1. Resize the browser window or open in mobile view (F12 → responsive mode). | Content and navigation adapt correctly for small screens; text and menu remain visible. |

---

✅ **Total:** 3 Epics | 16 Test Cases  
✅ Each TC is clear, atomic, and ready for Cypress automation (`.cy.js` specs)  
✅ Matching structure for Jira backlog → sprint import  
✅ Perfect for `testCases.md` in GitHub repository  
