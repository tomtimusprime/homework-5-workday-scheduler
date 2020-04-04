
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
                console.log(buttonIndex, scheduleData, eventText, button);
                scheduleData[buttonIndex].text = eventText;
                let currentDay = getCurrentDay();
                saveData(scheduleData, currentDay);
            })
        })
    }

    function getCurrentDay() {
        return moment().format("dddd MM-DD-YY");
        //return moment().add(1, 'days').format("dddd MM-DD-YY");
    }


    function getScheduleData() {
        let currentDay = getCurrentDay();
        let data = localStorage.getItem(currentDay);
        data = JSON.parse(data);
        console.log(data);
        if (!data) {
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

    function saveData(scheduleData, currentDay) {
        localStorage.setItem(currentDay, JSON.stringify(scheduleData));

    }

    function setUp() {
        let nowEl = $("#currentDay");
        const currentDay = getCurrentDay();
        const displayNowEl = moment().format("dddd, MMMM Do YYYY, h:mm a");
        nowEl.text(displayNowEl);
        //Get data from local storage 
        let scheduleData = getScheduleData();
        saveData(scheduleData, currentDay);
        const $timeBlocks = $(".text-area");
        console.log(scheduleData);//*
        console.log($timeBlocks);//*
        updateTimeBlocks($timeBlocks, scheduleData);
        addListeners();
    }
});

//RX JS - libraries that handles observables

