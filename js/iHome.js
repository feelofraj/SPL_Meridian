// JavaScript Document
$(document).ready(function () {
    $("#popform").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        var parameters = { name: $('#name').val(), phone: $('#phone').val(), message: $('#message').val() };
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbz3ktQIUMskVKXs0znYJhgVYPMmf6yAVlo5yyxV_aSPPxP-V2k/exec",
            method: "POST",
            data: parameters
        })
            .done(function (data) {

                $('#error-msg').css('color', 'green');
                $('#error-msg').html('Reach you as soon as possible...');
                location.reload();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                $('#error-msg').css('color', 'red');
                $('#error-msg').html('Falied: Please try again later or contact us.');
            });

    });
    $("#contact").submit(function (event) {

        /* stop form from submitting normally */
        event.preventDefault();

        /* get the action attribute from the <form action=""> element */
        var $form = $(this),
            url = $form.attr('action');
        //alert();
        /* Send the data using post with element id name and name2*/
        var parameters = { name: $('.name').val(), phone: $('.phone').val(), email: $('.email').val(), message: $('.message').val() };
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbz3ktQIUMskVKXs0znYJhgVYPMmf6yAVlo5yyxV_aSPPxP-V2k/exec",
            method: "POST",
            data: parameters
        })
            .done(function (data) {

                $('#contact-error-msg').css('color', 'green');
                $('#contact-error-msg').html('Received your request');
                location.reload();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                $('#contact-error-msg').css('color', 'red');
                $('#contact-error-msg').html('Falied: Please try again later or contact us.');
            });
    });

   
   
});
window.onscroll = function () { stickys() };

var header = document.getElementById("myheader");

var sticky = header.offsetTop;

function stickys() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}




var btnContainer = document.getElementById("navMenu");
var btns = btnContainer.getElementsByClassName("navLink");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


function toTop() {
    var marginY = 0;
    var destination = 0;
    var speed = 20;
    var scroller = null;
    scroller = setTimeout(function () {
        topFunction();
    }, 2);

    marginY = marginY - speed;

    if (marginY <= 0) {
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}


function getMobileOperatingSystem(msgContent) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var msg = "I am interested in your product. Call me";
    if (msgContent) {
        msg = msgContent;
    }
    var os = "sms:+919171547917?body=" + msg;
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "sms:+919171547917&body=" + msg;
    }
    location.href = os;
}
function sendMsg() {
    var name = document.getElementById('eName').value;
    var num = document.getElementById('ePhone').value;
    var msg = document.getElementById('eMessage').value;
    var msgContent = "Name :" + name + "%0aDescription :%0a" + msg + "%0aContact No :" + num;
    getMobileOperatingSystem(msgContent)
}

function iContentFun() {
    document.getElementById('iContent').style.display = 'block';
    document.getElementById('hContent').style.display = 'none';
}
function hContentFun() {
    document.getElementById('iContent').style.display = 'none';
    document.getElementById('hContent').style.display = 'block';
}
function selectPolicy() {
var val = document.getElementById('insDrpDwn').value;
var i = 0;
for( i=0 ; i<=5 ;i++)
{
    
    if ( val==i )
    {
       
        document.getElementById(i).style.display='block';
    }
    else{
        document.getElementById(i).style.display='none';
    }
}
}

function getValue(value){
    document.getElementById("jobTitle").value = value;
}