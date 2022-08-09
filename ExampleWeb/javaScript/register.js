$(document).ready(function(e){
    refresh();

    $("#regButton").on("click",function(){
        $.ajax({
            type: "POST",
            url: "../php/register.php",
            data: {
                msg: $("#msg").val(),
                pwd: $('#pwd').val(),
                mail: $('#mail').val(),
                color: $('#color').val(),
                gender: getRadioValue('gender')
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            },
            success: function(output) {
                console.log(output);
                refresh();
                if (output == 0)
                    window.location.href='homePage.html';
                else if($("#msg").val() != "")
                    document.getElementById('warning').innerHTML = "User name is already in use.";
            }
        });
    })
})


function refresh() {
    $.ajax({
        type: "POST",
        url: "showMsg.php",
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        success: function(output) {
            output = $.parseJSON(output);
            console.log(output);
        }
    });
}

function getRadioValue(name){
    var radioes = document.getElementsByName(name);
    for(var i=0;i<radioes.length;i++)
    {
            if(radioes[i].checked){
                return radioes[i].value;
            }
    }
    return false;
}