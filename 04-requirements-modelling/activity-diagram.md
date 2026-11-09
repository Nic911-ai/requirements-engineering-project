1. Process Modelled
Create Equipment Booking in the College Equipment Booking System.

2. Purpose
- To show the steps a user follows when requesting equipment and how the process changes depending on whether the selected equipment is available.
  
3. Activities
The activities in my diagram are:
1. Select Equipment.
2. Select Date.
3. Check Availability.
4. Enter Booking Details.
5. Submit Booking.
6. Booking Recorded.
4. Decision and Guards

- Decision: Is the equipment available?
- [available] — Continue to Enter Booking Details, Submit Booking and Booking Recorded.
- [not available] — The next step is unknown and requires clarification from a stakeholder.

4. Unknowns
- The system's behaviour when the requested equipment is unavailable has not been confirmed. It is unknown whether the user should choose another date, select different equipment or stop the booking process.

5. Stakeholder Question
- "What should happen when the requested equipment is unavailable on the selected date?"

6. Modelling Decision
I used a decision diamond after Check Availability because the booking process depends on whether the equipment is available. I added two guarded paths, [available] and [not available]. I used an UNKNOWN note for the unavailable path instead of assuming what the system should do.

7. Short assessed-project application
- Use the College Equipment Booking System:


| Process / Use Case |	Create Equipment Booking |
|---|---|
| Activity 1	| Select Equipment |
| Activity 2	| Select Date |
| Activity 3	| Check Equipment Availability |
| Possible decision	| Is the equipment available? |
| Possible guards	| available and not available |
| One unknown	| What happens when the requested equipment is unavailable? |
| Who could answer it?	| Equipment Manager or Technician |
| Question to ask	| What should happen when a user requests equipment that is unavailable on the selected date? |

8. Reflection
The activity diagram helped me understand the sequence of actions involved in creating an equipment booking. It also helped identify missing information about what happens when equipment is unavailable. This shows how activity diagrams can help identify questions that need to be discussed with stakeholders.
