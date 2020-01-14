$(document).ready(function(){
    $("#mybtn").click(function(){
        $("p").prepend("compar academyy")
    })
})
$(document).ready(function(){
    $("#mybtn1").click(function(){
        $("p").append("compar academyy")
    })
})



$(function(e){
$( ".number").keypress(function(e){
    if(e.which !=8 && e.which !=0 && (e.which<48 || e.which>57)){
$("#errorMessage").html("zehmet olmasa reqem daxil  edin ").stop().show().fadeOut(1000);
return false;
    };
})
});







$(document).ready(function($){
setInterval(function(){
    moveRight();

},3000);

var  slideCount=("slider ul li").length;
var slideWidth=("slider ul li").width();
var slideHeight=("slider ul li").height();
var slideULWidth=sliderCount+sliderWidth;


$("#slider").css({
    width:slideWidth,
    height:slideHeight,
});
$("#slider ul").css({
    width:sliderUlWidth,
    marginLeft:-slideWidth
});


$("slider ul li:last-child").prependTo("#slider ul");
function moveLeft(){
    $("#slider ul").animate({
        left:+slideWidth

    },200, function(){
        $("#slider ul li:last-child").prependTo('#slider ul');
        $("#slider ul ").css('left' ,'');
    }
    );
};

function moveRight(){
    $('#slider ul').animate({
        left:-slideWidth
    }, 200, function(){
        $("#slider ul li:last-child").appendTo("#slider ul");
        $("#slider ul").css("left");
    });
};

$(".control_prev")

})       