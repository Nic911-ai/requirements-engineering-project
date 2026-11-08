1.  Requirement or not?

| Statement	| What is it?	| Why? |
|---|---|---|
| “We need an online booking system.”	| Proposed solution | Suggests a particular type of system rather than explaining the specific problem or function that needs to be addressed. |
| “The technician needs to know what equipment is currently out.”	| Stakeholder statement /need	| The technician needs to perform their work. |
| “The system shall allow an authorised technician to record an equipment return.”	| Requirement	|The system must provide and identifies the authorised user. |
| “We assume all staff have access to the college network.”	| Assumption	| It is something believed to be true but has not yet been confirmed. |
| “The system must comply with the college’s existing security policy.”	| Constraint	| It specifies a rule or restriction that the system must follow when being developed or operated.|


2. Spot the problems

1. The system shall be very easy to use.
- Problems:"very easy" is unclear and can mean different things to different users. There is no measurable way to check whether the system is easy to use.

2. The system shall quickly show available equipment.
- Problems: "quickly" does not specify how long the system should take. There is no specific response time to test against.
  
3. The system shall allow staff to book, cancel and approve bookings and send reminders.
Problems: Booking, cancelling, approving and sending reminders should be written as separate requirements. It does not explain which staff members are allowed to perform these actions or when reminders should be sent.

3. Rewrite one requirement

- Original: The system shall quickly show available equipment.
- Rewritten requirement(s): The system shall display the availability status of the selected equipment for the date chosen by the user.
- How could you verify it?: Test the system by selecting an equipment item and a date, then check whether the correct availability status is displayed.

4. College Equipment Booking System case study
- A technician says: “I need to know whether a camera is available before I promise it to a lecturer.”

1. What problem or need is behind the statement?

- The technician needs to check whether a camera is available on a particular date before confirming its use to a lecturer. This helps prevent double-booking and incorrect promises about equipment availability.

2. What would you ask the technician to learn more?
- Which date and time does the technician need to check?
- Does the technician need to see availability for all cameras or only a specific camera?
- Who should be allowed to view equipment availability?

3. Write ONE candidate functional requirement.

- The system shall allow authorised staff to view the availability status of a selected camera for a specified date.

4. Identify ONE quality/security/privacy/accessibility issue that might need investigation.

- Security: Only authorised staff should be allowed to access equipment availability information if it is restricted to staff.

5. How could the candidate requirement be verified?

- Log in as an authorised staff member, select a camera and a date, and check whether the system displays the correct availability status.

5. Exit question
- “A good requirement is useful because it clearly explains what the system must do and can be tested to check whether it has been achieved.”
