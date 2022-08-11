$(document).ready(function(e) {

    refresh();

    $("#but_upload").click(function(){
        var url = location.href;
        if(url.indexOf('?')!=-1){
            var ary1 = url.split('?');
            var ary2 = ary1[1].split('&');
            var ary3 = ary2[0].split('=');
            var name = ary3[1];
        }
        var fd = new FormData();
        var files = $('#file')[0].files;
        

        // Check file selected or not
        if(files.length > 0 ){
        fd.append('file',files[0]);
        fd.append('name',name);
        $.ajax({
            url: '../php/uploadFile.php',
            type: 'post',
            data:fd,
            contentType: false,
            processData: false,
            success: function(response){
                if(response == 0){
                    alert('file not uploaded!');
                }
                else if(response == 1){
                    alert("file duplicate!");
                }
                else{
                    alert("Upload success!");
                    refresh();
                }
            },
        });
        }else{
        alert("Please select a file.");
        }
    });

});

function refresh() {

    var url = location.href;
    if(url.indexOf('?')!=-1){
        var ary1 = url.split('?');
        var ary2 = ary1[1].split('&');
        var ary3 = ary2[0].split('=');
        var name = ary3[1];
    }
    
    $.ajax({
        type: "POST",
        url: "../php/fileManager.php",
        data: {
            msg: name
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        },
        success: function(output) {
            output = $.parseJSON(output);
            console.log(output);
            var table = "";
            for (var num = 0; num < output.length; num++) {
                table += "<tr><td><div id=\"div1\">" + output[num][0] + "</div></td>";
                table += "<td>" + output[num][1] + "</td>";
                table += "<td>" + output[num][2] + "</td>";
                table += "<td><button class=\"btn btn-secondary edit\"><i class=\"fa fa-edit\"></i></button>" +
                "<button class=\"btn btn-secondary dl\"><i class=\"fa fa-download\"></i></button>" + 
                "<button class=\"btn btn-secondary del\"><i class=\"fa fa-trash\"></i></button></td></tr>";
            }

            $("#message_table").html(table);
        }
    });
};

$("#tableId").on('click', '.edit', function(){
    alert("ok");
});

$("#tableId").on('click', '.dl', function(){
    alert("ok");
});

$("#tableId").on('click', '.del', function(){
    const child = document.getElementsByClassName('del');
    console.log(child.closest('tr'));
});

