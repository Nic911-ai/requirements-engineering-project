Week 3-Requirements Analysis and specification
1.Information from Week2
2.Candidate Requirements
- People are sometimes unsure whether a camera is available
- Technicians need to know what equipment is due back
- The system shall record the expected return date for ach booking
- The college should build a mobile app
- We assume all users will have a college login
- A lecturer wants reliable availability information before promising equipment
3. Requirements Surgery
- WHO?, WHAT?, WHEN?, WHY?, HOW WILL WE KNOW?
a. What should make the system easy for user to use?
- Who are the users?
- What tasks should be completed?
- Why does the system need to be easy to use
- How will we know the user are comfortable using it
b. When should the user be notify about the bookings?
- Who should recive the notification?
- What events should trigger the notification
- When will user get the notification?
- Why does the system need to notify user?
- How will we know the user receive the notification
c. When should staff be allowed to create, edit or delete a booking and when should the reminder be sent?
- Which staff members can manage bookings?
- What booing information can they edit
- When can staff edit, create or delete a bookings?
- How are reminder be sent?
d. They system shall send students an email confirmation immediately after they successfully book a study room and send reminder in 24 hours.

4. Fuctional Requirements
| ID  |  REQUIREMENT  |  Source  |    How could we verify it?     |
| --- | --- | --- |---|
| FR-01  | The system shall allow an authorised user to view equipment availability for a selected date| The technician needs to know ant available date | 
| FR-02  | The system shall allow an authorised technician to confirm booking only when the selected equipment is available|The technician needs to know whether equipment is available before confirming a booking | Try booking equipment that is already unavailable. The system Should prevent the technician from confirming the booking.|
| FR-03  | The system shall notify the user when their equipment booking is successfully confirmed. | Booking notification requirement, equipment booking process | Make a booking and check hat user receives a notification after the booking is confirmed.|
5.Quality Requirements
| ID  |  Quality requirements  |  Why does it matter?  | How could it be checked?  |
| --- | --- | --- | --- |
|NFR-01| the system shall require users to log inwith their authorised college account before accessing the equipment booking system.|It prevents unauthorised people from accessing or changing equipmen bookings.| try to access the booking system without logging in the system should deny access.|
| NFR-02 | The system shall display equipment availability within 3 secound after a user selects a date | Users need to see availbility quickly so they cn ake bookings without unnecessary waiting. | Select different dates and measure the time taken for the equipment availability to appear. It should appear within 3 seconds.|
6.Project Application
7.Reflection
