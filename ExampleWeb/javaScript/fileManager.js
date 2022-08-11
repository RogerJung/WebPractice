$(document).ready(function(e) {
    refresh();
    document.getElementById('test').innerHTML = "123";
});

function refresh() {
    $.ajax({
        type: "POST",
        url: "../php/showMsg.php",
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        success: function(output) {
            output = $.parseJSON(output);
            console.log(output);
            var table = "";
            for (var num = 0; num < output.length; num++) {
                table += "<tr><td>" + output[num][0] + "</td>";
                table += "<td>" + output[num][1] + "</td>";
                table += "<td>" + output[num][2] + "</td>";
                table += "<td>" + output[num][3] + "</td></tr>";
            }

            $("#message_table").html(table);
        }
    });
}