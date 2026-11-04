#Week 1 - Initial Discovery
1. Facts
The following information is supported by the practical scenario:
1.	The selected project scenario is the College Student Support Appointment System.
2.	The project focuses on student support appointments.
3.	Appointment cancellation is an issue that requires clarification.
4.	The practical identifies a support administrator as a possible source of information about appointment cancellation.
5.	The system is being investigated as part of a Requirements Engineering project.

2. Assumptions
1.	Students may need to arrange appointments to receive support from the college.
2.	Support staff may need to view appointment information.
3.	A support administrator may be involved in managing appointment arrangements.
4.	Students or authorised staff may need to cancel or change appointments.

3. Unknowns


| ID	| Unknown	| Why it matters |
|---|---|---|
| U-01 |	Who is allowed to create an appointment? | Determines who can use the booking function. |
| U-02 |	Who is allowed to cancel an appointment?	| Determines cancellation permissions. |
| U-03 | What types of student support appointments are available?	| Helps identify the information required when booking. |
| U-04 | How are available appointment dates and times determined? | Helps establish the appointment scheduling process. |
| U-05 | Does an appointment require staff approval? | Determines whether a booking is immediately confirmed or requires review. |
| U-06 | What happens when a student misses an appointment?	| May affect appointment management rules. |


4. Stakeholders


| Stakeholder	| Possible needs and concerns |
|---|---|
| Student |	Convenient way to arrange, view or cancel support appointments. |
| Support Staff | May need to view appointment details and manage their appointments. |
| Administrator | May need to manage appointment arrangements and handle cancellation requests. |
| College Management | May need information about the appointment service and how it is managed. |
| IT Support | May need to maintain the system and assist with technical problems. |

- Possible stakeholder conflict
- Students may prefer to cancel or change appointments easily, while support staff may need sufficient notice to manage their schedules. This is a possible conflict that requires investigation. The cancellation policy has not been confirmed.

5. Goals
1.	The system should help the college to organise student support appointments.
2.	The system should help students access information about their appointments.
3.	The system should help authorised college staff manage appointment arrangements.

6. Scope
6.1 Proposed In-Scope Areas
1.	Student support appointment booking.
2.	Viewing appointment information.
3.	Appointment cancellation or changes.
4.	Staff management of appointment arrangements.

6.2 Out-of-Scope or Not Yet Established
1.	Online payment or appointment fees.
2.	Video conferencing or online consultation.
3.	Automatic integration with external college systems.


7. Candidate Requirements
7.1 Functional Requirements


| ID | Candidate requirement | What needs be clarification? |
|---|---|---|
| FR-01	| The system shall allow a student to request a student support appointment. | What information must the student provide? |
| FR-02	| The system shall allow an authorised user to view appointment information. | Which users can view appointments, and whose appointments can they see? |
| FR-03 | The system shall allow an authorised user to cancel an appointment. | Who is authorised to cancel, and what cancellation rules apply? |
| FR-04	| The system shall allow authorised staff to manage appointment arrangements.	| What management actions are permitted? |


7.2 Non-Functional Requirements
| ID | Candidate quality requirement | Why it matters | How it could be checked |
|---|---|---|
| NFR-01 | The system should protect student appointment information from unauthorised access. | Appointment information may contain private student details. | Review access permissions and conduct authorised access tests. |
| NFR-02| The system should be easy for students and staff to understand and use.	 | Users should be able to complete appointment-related tasks without unnecessary confusion. | Conduct usability testing with representative users.
The exact security controls and usability acceptance criteria still need to be agreed. |


8. Requirement Surgery
R1: "The system should be easy to use."
Problem:
•	The phrase "easy to use" is vague.
•	It does not explain who the users are.
•	It does not explain which tasks should be easy.
•	It does not provide a measurable way to evaluate usability.

Clarification questions:
1.	Is the system intended for students, support staff, administrators or all three?
2.	Which tasks should users be able to complete easily?
3.	How will the college determine whether the system is easy to use?

Improved candidate requirement:
"The system shall provide students with a clear process for requesting and viewing student support appointments."
How to verify:
Ask representative students to complete the relevant tasks during usability testing and record any difficulties.
R2: "The system should be secure."

Problem:
•	The word "secure" does not identify what information needs protection.
•	It does not identify who should have access.
•	It does not explain how security should be tested.

Clarification questions:
1.	Which student and appointment information must be protected?
2.	Which user roles are allowed to access appointment information?
3.	What should happen when an unauthorised user tries to access restricted information?

Improved candidate requirement:
"The system shall restrict access to student appointment information to authorised users."
How to verify:
Test the system using authorised and unauthorised user accounts and check whether access is correctly restricted.

9. Reflection
1. What did I learn about requirements?
I learned that requirements should clearly explain what a system needs to do. A statement that sounds reasonable may still be too vague to develop or test. It is important to identify facts, assumptions and unknowns before deciding on the system's features.

2. What information is still missing?
The appointment booking process, available appointment types, cancellation permissions, appointment scheduling rules and staff responsibilities still need clarification.

3. Who can provide this information?
Potential sources include students, student support staff and the support administrator. The support administrator may be particularly useful for clarifying who can cancel appointments.

4. Why is stakeholder investigation important?
Different stakeholders may have different expectations. Gathering their information can help prevent misunderstandings and ensure that the Student Booking System addresses the actual needs of the college.



