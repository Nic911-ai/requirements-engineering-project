Part 2 - From Requirement to Process
- Select equipment item.
- Specify desired date.
- Availability status.

Part 3 - Core Notation

| Element | What it means |
| ---- | ---- | 
| Initial Node | Where the process starts |
| Activity/action | A meaningful task or step |
| Control flow | Arrow showing the order of activities |
| Decision | A point where the process follows different alternatives. |
| Guard | Condition written on an outgoing path, e.g. available |
| Final Node | Where the process ends |

Part 7 - Short Assessed-Project Application - Community-Volunteer-Event-Coordination-System
- Process/Use case: Community-Volunteer-Event-Coordination-System
- Activity 1: Check for any available community volunteer events
- Activity 2: View event details, required roles, dates, time
- Activity 3: Submit selected events
- Possible decision: Are volunteer roles and event capacity still open?
- possible guard(s): position available/event full or registration closed
- One unknown: What happens if an event reaches to many volunteers while user are still filling out their registration form?
- Who could answer it?: Event Organiser / Community Organisation Manager
- Question to ask: Should the system places extra volunteers into waitlist, or should it reject the registration and suggest to a similar event?

2. Actors


| Actor	| Goal |
|---|---|
| Student |	View equipment availability and request equipment. |
| Lecturer | View equipment availability and request equipment. |
| Equipment Manager	| Manage equipment availability and handle equipment booking activities. |


3. Use Cases

| Use case	| Description	| 
|---|---|
| View Equipment Availability	| Allows a user to view available equipment. |
| Create Equipment Booking	| Allows a user to submit an equipment booking request.	|
|Record Equipment Return |	Represents recording the return of equipment.	|



4. Question/Unknows
- Can students and lecturers request all types of equipment?
- Does the Equipment Manager approve or reject booking requests?
- Who records equipment returns?
- Can the Department Administrator access booking information?


5. Reflection
The use case diagram identifies the external roles and the main functions of the College Equipment Booking System. It also highlights areas where the responsibilities of different stakeholders need further confirmation.

