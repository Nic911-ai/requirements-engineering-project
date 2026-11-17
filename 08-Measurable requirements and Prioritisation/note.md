## Lab 8 Measurable requirements and Prioritisation

A. Evidence check — College Equipment Booking  

A student can make more than one booking request, each booking concerns exactly one equipment 
item, booking records contain start/end dates, and staff review and approve or reject requests. Those 
rules do NOT say that a submitted request is already approved; they do NOT establish reminders, 
automated conflict handling, a service-level target or cancellation rules. 

1. A student can submit more than one booking requst. The system must allow student to make multiple requests.
2. Each booking request concerns exactly one equipment item. A single request must have multiple equipment items.
3. Each booking contains a start date and en end date. These dates descibe the requested booking period.
4. Staff review booking requests make an approval or rejection. A submitted request is not automatically approved.

1. Two Open Question 

- Does the system need to check equipment availability and prevent requests overlaps, or should staff identify date conflicts during the reviews?
- Should students recieve a notification when approve or reject? If yes, should the notification be sent through email or the system.

2. Review Week 7

1. Screen 1
- Browse Equipment - Student views the available equipment list.
2. Screen 2
- Equipment Details - Student views information and select equipment item.
3. Screen 3
- Request Equipment - Student enters the start and end date and submit the request.
4. Screen 4
- Missing date validation - the system identifies missing or incomplete date information and an error not will show the student.
5. Screen 5
- Request submitted -The system confirms that the request has been submmitted for staff review.

B. Build an editable seven-field catalogue


| ID | Statement (one concern) | Type | Priority | Source | Rationale | Verfication |
|---|---|---|---|---|---|---|
| FR01 | The system shall allow a student to submit a request for one equipment item and requested dates. |	FR | Must | Lecturer case | Submitting a request is a core function of the booking system. | Walk through the request flow and check that one item and start/end dates can be submitted. |
| NFR-C01 | With 50 students using the system concurrently, at least 95% of equipment availability searches shall display results within 3 seconds, measured using a performance test.	| NFR – Performance	| Unconfirmed	| Confirm with Stakeholders | Students need to view availability without delays. The load, percentage and time limit are proposed targets.	| Simulate 50 concurrent users, run availability searches and record response times. |
| NFR-C02 | A student shall be able to complete the equipment request journey using only a keyboard, including selecting an item, entering dates and submitting the request.	| NFR – Accessibility | Should | confirm with stakeholders | Keyboard access helps users who cannot or do not use a mouse.	| Complete the request journey using only the keyboard and check keyboard operability |
| NFR-C03 | Only authenticated users with the appropriate staff role shall be able to view and change booking decisions. | NFR – Privacy/Security	| Must |	Confirm with stakholders | Booking decisions should only be accessible to authorised staff. | Test with a student account, an unauthorised account and an authorised staff account to check access permissions. |



C. Write and check measurable NFR candidates  


| Candidate ID | Proposed requirement | Evidence needed | How could it be tested? |
|---|---|---|---|
| NFR-C01 | Performance | Performance test results showing the response time of equipment availability searches under 50 concurrent users. | Run a performance test and record the response times. |
| NFR-C02 | Accessibility | Results from a keyboard-only accessibility walkthrough. | Use only the keyboard, without a mouse, to complete the equipment request journey. Check whether the student can select equipment, enter start and end dates, navigate between form fields and submit the request. Check keyboard operability against WCAG 2.2 SC 2.1.1. | 
| NFR-C03 | Privacy/Security | Access-control test results showing which information student and staff accounts can access. | Log in using a student account and attempt to view another student's booking request or access staff approval functions. Confirm that access is denied. Then log in using an authorised staff account and check that staff can access the appropriate booking review functions. |


D. Prioritise with a defensible release boundary  

- MoSCoW:
- Must = essential to the agreed release;
- Should = important but an acceptable workaround exists;
- Could = desirable if capacity;
- Won’t have this time = deliberately excluded *from this release*,  not forbidden forever. Priority is subject to confirmation where only a case study exists. 


| Item | Priority/Status | Justification or stakeholder question |
|---|---|---|
| Student submits request | Must | The case explicity states that student can submit booking requests. Whithout this fuction, the main purpose of the system cannot be achieved. |
| Staff approves/rejects	| Must | The case explicitly states that staff review requests and approve or reject them. The system must support this decision-making process. |
| Reminder notification	| Unconfirmed | The case does not establish that reminders are required. Ask the coordinator whether students or staff need reminders and when they should be sent. |
| Conflict prevention | Unconfirmed	| The case does not confirm automatic date-conflict checking. Ask whether the system should prevent overlapping requests or leave conflict identification to staff review. |


E. Independent transfer — Campus Workshop Registration  
Independent case facts: a student views workshops and requests a place; a workshop has a code, title 
and date; staff review each registration. Capacity is displayed, but the exact handling of excess demand 
is not specified. 

1. One measurable candidate quality requirement

- NFR-W01 – Performance
- With 50 students accessing the workshop list concurrently, at least 95% of workshop-list requests shall display the results within 3 seconds, measured using a performance test.
- Condition :	30 students access the workshop list concurrently.
- Measurable outcome	: At least 95% of requests display results within 3 seconds.
- Verification :	Simulate 50 concurrent users and record response times.
- Evidence needed	Performance test results.
- Decision required : Coordinator must confirm whether the load and response-time target are appropriate.

2. Two core Must capabilities and one proposal

1. Student views available workshops
- The scenario explicitly says students can view workshops.

2. Student requests a place
- Students can request a place.

3. Automatic waiting list for excess requests
- Unconfirmed proposal, the scenario mentions capacity but does not state that a waiting list exists or how excess demand is handled.


3. Two targeted coordinator questions

1. Question 1 – Capacity and excess requests

- "When a workshop reaches its displayed capacity, what should happen if another student requests a place? Should the system prevent the request, allow it for staff review, or use another process?"

2. Question 2 – Quality threshold

- "What is an acceptable maximum loading time for the workshop list when several students access the system at the same time?"


8. Reflection
In Week 8, I learned how to convert general quality concerns into measurable non-functional requirements. Previously, statements such as "the system should be fast" or "the system should be easy to use" were too vague to test. I learned that a good non-functional requirement should identify the condition, expected outcome and verification method.

Overall, Week 8 helped me understand that requirements should not be based on assumptions. They should be supported by evidence, written in a measurable way, prioritised with justification and checked with stakeholders before being treated as confirmed requirements.

