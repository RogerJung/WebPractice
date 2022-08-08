$("#regButton").on("click",function(){
    $.ajax({
        type: "POST",
        url: "php/sendMsg.php",
        data: {
            msg: $("#msg").val()
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        success: function(output) {
            console.log(output);
            refresh();

            $("#msg").val("");
        }
    });
})