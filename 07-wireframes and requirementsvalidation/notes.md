Week 7 — Wireframes and Requirements Validation

Part A — College Equipment Booking case


| Evidence ID | Given statement for this lab |
|---|---|
| EB01 | Students can view available equipment. |
| EB02 | Students can request an item of equipment. |
| EB03 | A booking records a start date and end date. |
| EB04 | Staff review requests and decide whether to approve or reject them. |
| EB05 | Staff manage equipment availability. |


Part B — Plan one user journey

| Screen | Proposed title | Purpose and case evidence |
|---|---|---|
| 1 | Browse equipment | Show equipment choices — EB01.
| 2 | Equipment details | Review one selected item — supports choosing an item for EB02; details remain limited. |
| 3 | Request equipment Collect startDate and endDate — EB03; present as request, not approval. |
| 4 | Missing-date feedback Explore how to handle an omitted end date — candidate validation behaviour to confirm.|
| 5 | Request submitted Say the request goes to staff review — EB04; do NOT show approval. |

Part C — Create wireframes

1. Project and User Journey
- Project: Student Booking System
- Scenario: College Student Support Appointment System.
- User journey: A student starts an appointment request, identifies the support service, enters the requested information, reviews the request and submits it. This is a proposed journey and requires confirmation from stakeholders.

2. Screen Descriptions
1. Screen 1 — Student Booking System
Purpose: Provide an entry point for students.
Proposed elements:
- Student Booking System heading.
- Short introduction to the service.
- Start Appointment Request button.

2. Screen 2 — Select Support Service
Purpose: Allow the student to identify the support service they need.
Proposed elements:
- Available support services placeholder.
- Service selection area.
- Continue button.
Open question: What support services does the college provide?

3. Screen 3 — Appointment Request
Purpose: Collect information required for an appointment request.
Proposed elements:
- Student information fields.
- Preferred date.
- Preferred time.
- Additional information field, if required.
Open questions:
- Which student details are required?
- Are students allowed to choose their preferred date and time?
- How is appointment availability determined?

4. Screen 4 — Review Appointment Request
Purpose: Allow students to check the information they have entered.
Proposed elements:
- Selected support service.
- Student information.
- Requested date and time.
- Back button.
- Submit Request button.
Open question: Is a review step required by the college?

5. Screen 5 — Request Submitted
Purpose: Provide feedback after the request is submitted.
Proposed message:
"Your appointment request has been submitted. Please refer to the appointment status for further information."
Open question: Does submission immediately confirm an appointment, or does staff review the request first?

4. Requirements Mapping


| Screen | Related requirement | Status |
|---|---|---|
| Screen 1 | FR-01 — Request an appointment	| Proposed entry point |
| Screen 2 | FR-01 — Request an appointment	| Proposed service selection |
| Screen 3 | FR-01 — Request an appointment	| Proposed request form |
| Screen 4	| FR-01 — Request an appointment | Proposed review step |
| Screen 5	| FR-01 — Request an appointment	| Proposed submission acknowledgement |

5. Unknowns and Assumptions
- The available support service categories are unknown.
- The required student information is unknown.
- Appointment availability rules are unknown.
- The appointment confirmation process is unknown.
- The role of support staff in reviewing appointment requests is unknown.
- The notification method is unknown.


Part D — Structured walkthrough and requirements findings


| Finding/question | Evidence type | Action or next type |
|---|---|---|
| Whether the starting action is clear | Self-review | Improve Screen 1 if needed. |
| The required information is understandable | Self-review | Peer review	Review Screen 3. |
| Submission feedback is clear. |	Self-review | peer review	Review Screen 5. |

Part E — Independent transfer: Campus Workshop Registration


| New practice requirement | Evidence for this mini-exercise |
|---|---|
| WX01 | Students may browse a list showing each workshop code and title. |
| WX02 | A student may select one workshop and enter a student ID to submit a registration. |
|WX03 | No rule has been given about automatic acceptance, available capacity or notification. ||

7. Proposed Modification

A possible improvement is to make the submission message clearer about whether the appointment is confirmed or still awaiting a decision. This modification should be checked against the college's actual appointment process.

9. Reflection
Low-fidelity wireframes help communicate the proposed user journey before developing a functioning system. The screens also help identify missing information, such as appointment availability, required student details and the confirmation process. A wireframe does not prove that the proposed process is accepted by stakeholders. Further validation is required.

