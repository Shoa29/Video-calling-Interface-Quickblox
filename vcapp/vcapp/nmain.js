function users(){
  $(".users").css("display","block");
  $(".caller__ctrl").css("display","block");
  $(".frames").css("display","none");
  $(".caller__frames").css("display","none");
  $(".caller__frames_acts").css("display","none");
  $(".board").css("background-color","rgb(7, 19, 124)")
} 

function goCall(){
  $(".users").css("display","none");
  $(".caller__ctrl").css("display","none");
  $(".frames").css("display","block");
  $(".caller__frames").css("display","block");
  $(".caller__frames_acts").css("display","block");
  $(".board").css("background-color","black")
}