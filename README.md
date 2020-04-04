# 05 Third-Party APIs: Work Day Scheduler

This is a simple calendar application. If you click on a time block for a standard work day (i.e. 8am to 5pm) and write a calendar item and then click the save button, that information will be saved to localStorage and persist in the browser, even if you refresh the page. If the time block gray, it means the time has already passed. If the timeblock is red it means that's the current hour and if green it means those are future time slots. It also displays the current date and time at the top of the page.

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```



