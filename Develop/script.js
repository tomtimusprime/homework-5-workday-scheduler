$(document).ready(function () {
    let nowEl = $("#currentDay");
    nowEl.text(moment());
    
    for(let i = 8; i < 17; i++) {
       
        $("a[data-time=" + i + "am]").on("click", function(event) {
            event.preventDefault();
            let dataTime = $("textarea[data-time=" + i + "am]");
            console.log(dataTime.val());
            
            
            // let clicked = $(this).val();
            // alert(clicked);
            
    
        })

    }
    


    
    
});

//RX JS - libraries that handles observables