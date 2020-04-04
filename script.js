// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


$(document).ready(function () {
    let nowEl = $("#currentDay");
    const currentDay = moment().format("dddd MM-DD-YY");
    const displayNowEl = moment().format("dddd, MMMM Do YYYY, h:mm a");
    nowEl.text(displayNowEl);
    //Get data from local storage 
    let scheduleData = getScheduleData();
    saveData(scheduleData, currentDay);
    const $timeBlocks = $(".text-area");
    console.log(scheduleData);
    console.log($timeBlocks);
    updateTimeBlocks($timeBlocks, scheduleData);
    //and put it in the right spots on the page
    //Color code red for current hour and then green for future, for past gray or blue or whatever



    function getScheduleData(currentDay) {
        
        let data = JSON.parse(localStorage.getItem(currentDay));
        if(!data) {
            data = generateScheduleData();
        }
        return data;
    };

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

    function updateTimeBlocks($timeBlocks, scheduleData) {
        let currentHour = moment().hour();
        $timeBlocks.each((index, element)=> {
            let blockData = scheduleData[index];
            let currentBlock = $(element);
            if(currentHour > blockData.hour) {
                //add css class for past block
                currentBlock.addClass("past");
            }
            else if(currentHour === blockData.hour) {
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

    function saveData(scheduleData, currentDay) {
        localStorage.setItem(currentDay, JSON.stringify(scheduleData));
    
    }

    //when user clicks save you want to get the text from the data-text area
    //get your current schedule data.
    //update the appropriate item in the array with the event text. 
    //Save schedule data to localstorage.
});

//RX JS - libraries that handles observables

 // for (let i = 8; i <= 17; i++) {
        //     let dataTime;
        //     if (i < 12) {
        //         $("a[data-time=" + i + "am]").on("click", function (event) {
        //             event.preventDefault();
        //             dataTime = $("textarea[data-time=" + i + "am]");
        //             //itemsArray[i] = dataTime.val();
        //             console.log(dataTime.val());
        //         })
        //     }
    
        //     if (i >= 12)
        //         $("a[data-time=" + i + "pm]").on("click", function (event) {
        //             event.preventDefault();
        //             dataTime = $("textarea[data-time=" + i + "pm]");
        //             console.log(dataTime.val());
        //         })
    
        // }