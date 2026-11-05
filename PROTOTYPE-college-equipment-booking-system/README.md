# College Equipment Booking System – Front-End Prototype (Phase 1)
Student and Lecturer portal built with HTML5, CSS3 and vanilla JavaScript. Data persists in LocalStorage. No backend needed.

## Features
Demo login/logout (role selector, show/hide password, remember me) · Dashboard with counts and status chart · Equipment catalogue with search, category/availability filters, sorting, grid/list toggle · Equipment details · Booking request with validation, review step and auto reference numbers · Success page · My Bookings with status filters · Booking details with confirmed cancellation of pending requests · Editable profile · Toasts, dialogs, responsive sidebar.

## Run
Open `index.html` in a browser, or use VS Code Live Server. (Inter loads from Google Fonts; a fallback font is used offline.)

## Demo logins
- Student: STU001 / student123 (Alex Tan)
- Lecturer: LEC001 / lecturer123 (John Smith)

## Structure
`index.html` (login) · `pages/` (8 pages) · `css/` · `js/` (data, storage, app shell, auth, dashboard, equipment, booking, profile) · `assets/`
To reset demo data, clear this site's LocalStorage.

## Limitations / demonstration assumptions
- Login is a front-end demo; passwords sit in plain text in the browser. NOT secure.
- Equipment, availability and users are fictional, not real college inventory.
- Requests are always saved as "Pending Review"; nothing is approved here (staff modules come in a later phase).
- Assumptions (not college policy): start dates cannot be in the past; only pending requests can be cancelled by the user.
- Availability is a static label; there is no date-clash checking.
- Equipment images are generated placeholders (SVG).
- Admin, Equipment Manager and IT dashboards are not included.
