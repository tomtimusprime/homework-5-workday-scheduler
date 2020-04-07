//The function names should be fairly self-explanatory, but I'll add comments where it seems prudent.
$(document).ready(function () {
    setUp();

    function addListeners() {
        let rowDivEl = $(".row");
        rowDivEl.each((index, element) => {
            let btn = $(element).find(".fa-save");
            btn.on("click", event => {
                let button = $(event.target);
                let buttonIndex = button.data("time");
                let scheduleData = getScheduleData();
                let eventText = $(element).find(".text-area").val();
                scheduleData[buttonIndex].text = eventText;
                let currentDay = getCurrentDay();
                saveData(scheduleData, currentDay);
            })
        })
    }

    //Uses the moment.js library to return the current day and is formatted accordingly
    function getCurrentDay() {
        return moment().format("dddd MM-DD-YY");
        //The following line of code is used for testing
        //return moment().add(1, 'days').format("dddd MM-DD-YY");
    }

    //This function access local storage to get the data that was previously entered in order to persist on the page.
    function getScheduleData() {
        let currentDay = getCurrentDay();
        let data = localStorage.getItem(currentDay);
        data = JSON.parse(data);
        if (!data) {
            data = generateScheduleData();
        }
        return data;
    };

    //This array is created to align with the different time blocks on the calendar in order to save in local storage accordingly.
    function generateScheduleData() {
        return [
            {
                hour: 8,
                text: ""
            },
            {
                hour: 9,
                text: ""
            },
            {
                hour: 10,
                text: ""
            },
            {
                hour: 11,
                text: ""
            },
            {
                hour: 12,
                text: ""
            },
            {
                hour: 13,
                text: ""
            },
            {
                hour: 14,
                text: ""
            },
            {
                hour: 15,
                text: ""
            },
            {
                hour: 16,
                text: ""
            },
            {
                hour: 17,
                text: ""
            },
        ];
    }

    //This function handles the color coding of the tiem blocks depending on what time it is throughout the day
    function updateTimeBlocks($timeBlocks, scheduleData) {
        let currentHour = moment().hour();
        $timeBlocks.each((index, element) => {
            let blockData = scheduleData[index];
            let currentBlock = $(element);
            if (currentHour > blockData.hour) {
                //add css class for past block
                currentBlock.addClass("past");
            }
            else if (currentHour === blockData.hour) {
                //add css class for present block
                currentBlock.addClass("present");
            }
            else {
                //add css class for future block
                currentBlock.addClass("future");
            }
            //put the item on the dom
            currentBlock.text(blockData.text);

        });
    }

    //This function handles the saving of the data on each time block to localStorage to be able to persist later.
    function saveData(scheduleData, currentDay) {
        localStorage.setItem(currentDay, JSON.stringify(scheduleData));

    }

    //This is the first function that's called to kick off the program and pull data from localStorage if there is any to
    //display it on the screen.
    function setUp() {
        let nowEl = $("#currentDay");
        const currentDay = getCurrentDay();
        const displayNowEl = moment().format("dddd, MMMM Do YYYY, h:mm a");
        nowEl.text(displayNowEl);
        //Get data from local storage 
        let scheduleData = getScheduleData();
        saveData(scheduleData, currentDay);
        const $timeBlocks = $(".text-area");
        updateTimeBlocks($timeBlocks, scheduleData);
        addListeners();
    }
});

//RX JS - libraries that handles observables

