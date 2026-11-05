Week 3-Requirements Analysis and specification

1. Requirement or not?

| Statement | What is it? | Why |
|---|---|---|
| Equipment can be double-booked. | Problem	| Describes an existing issue. |
| Students need to know whether equipment is available. |	Stakeholder need	| Describes what a user needs. |
| The system shall allow users to view equipment availability. | Candidate requirement	| Describes expected system behaviour. |
| The system should use a mobile application.	| Solution idea |	Suggests a particular technology. |
| The Equipment Manager approves all requests.	| Assumption |	Approval responsibility has not yet been confirmed. |


2. Requirement Surgery

1. Statement 1: "The system should be easy to use."
- Problem: It is vague and does not explain how usability will be measured.
- Improved candidate: The system should allow students and lecturers to locate equipment availability and access the request process without requiring administrative assistance.
- Verification: Conduct a usability walkthrough with representative users.

2. Statement 2: "The system should notify users about bookings."
- Problem: It does not identify which users receive notifications or when notifications should be sent.
- Improved candidate: The system shall provide users with information about the outcome of their booking requests.
- Clarification needed: Should users receive this information through the system, email or another method?
- Verification: Test whether the request outcome is made available to the relevant user.

3. Statement 3: "Staff should manage equipment."
- Problem: It does not explain what management activities are required.
- Improved candidate: The system shall allow authorised staff to manage equipment availability.
- Clarification needed: Which staff roles are authorised, and what information can they change?
- Verification: Check whether an authorised staff user can update equipment availability.


3. Functional Requirements
	
1. The system shall allow users to view equipment availability for a selected date.
- Select a date and check the displayed availability.

2. The system shall allow users to request an item of equipment.	College equipment booking scenario	Submit a request for an equipment item.
3. The system shall record the start date and end date of a booking.	College equipment booking case	Check that both dates are recorded for a booking.
4. The system shall allow authorised staff to review booking requests and approve or reject them.	College equipment booking case	Test the review and decision process using an authorised staff role.
5. The system shall allow authorised staff to manage equipment availability.	College equipment booking case	Check whether authorised staff can update availability information.
6. Quality Requirements
NFR-01 — Security
The system should restrict booking management functions to authorised users.
Why it matters: Booking information and management functions should not be accessible to unauthorised people.
Verification: Attempt to access restricted functions using an unauthorised account.
NFR-02 — Reliability
The system should provide consistent equipment availability information to users.
Why it matters: Inaccurate availability information could lead to conflicting booking requests.
Verification: Compare the availability displayed to users with the recorded equipment booking information.
These are candidate quality requirements. Specific performance and security standards have not been provided.
7. Requirement Review
Requirement	What needs clarification?
FR-01	Does availability refer to a particular date or a date range?
FR-02	Which user roles can request equipment?
FR-03	What date format and validation rules are required?
FR-04	Which staff role approves or rejects requests?
FR-05	Which equipment details can staff update?
8. Requirement Traceability
The functional requirements should be linked to their supporting stakeholders:
•	FR-01: Student, Lecturer and Equipment Manager.
•	FR-02: Student and Lecturer.
•	FR-03: Student, Lecturer and Department Administrator.
•	FR-04: Equipment Manager and Department Administrator.
•	FR-05: Equipment Manager.
These links are proposed sources and should be confirmed through elicitation.
9. Reflection
Requirements analysis helped convert general problems into clearer candidate requirements. The functional requirements describe what the system may need to do, while the quality requirements describe how it should operate.
Some important rules remain unknown, particularly booking permissions, overlapping dates, approval responsibilities and equipment return procedures. These need clarification before the requirements can be finalised.

For each statement, decide whether it is best treated as a requirement, a stakeholder statement/need, a
proposed solution, an assumption, or a constraint. Give a short reason.
Statement What is it? Why?
“We need an online booking
system.”
“The technician needs to know
what equipment is currently out.”
“The system shall allow an
authorised technician to record an
equipment return.”
“We assume all staff have access
to the college network.”
“The system must comply with the
college’s existing security policy.”
Exercise 2 — Spot the problems
Identify at least two problems with each requirement. Think about ambiguity, vagueness, completeness,
combining behaviours, necessity and verification.
1. The system shall be very easy to use.
Problems: ________________________________________________________________
__________________________________________________________________________
2. The system shall quickly show available equipment.
Problems: ________________________________________________________________
__________________________________________________________________________
3. The system shall allow staff to book, cancel and approve bookings and send reminders.
Problems: ________________________________________________________________
__________________________________________________________________________
Exercise 3 — Rewrite one requirement
Choose ONE requirement from Exercise 2. Rewrite it so that it is clearer and easier to verify. You may need to add
a condition or split it into more than one requirement.
Original: ________________________________________________________________
Rewritten requirement(s): _________________________________________________
__________________________________________________________________________
How could you verify it? __________________________________________________
Exercise 4 — College Equipment Booking System case study
A technician says: “I need to know whether a camera is available before I promise it to a lecturer.”
What problem or need is behind the statement?
__________________________________________________________________________
__________________________________________________________________________
What would you ask the technician to learn more?
__________________________________________________________________________
__________________________________________________________________________
Write ONE candidate functional requirement.
__________________________________________________________________________
__________________________________________________________________________
Identify ONE quality/security/privacy/accessibility issue that might need investigation.
__________________________________________________________________________
__________________________________________________________________________
How could the candidate requirement be verified?
__________________________________________________________________________
__________________________________________________________________________
Exit question
Complete this sentence:
“A good requirement is useful because ________________________________________________”
____________________________________________________________________________________
