$(document).keydown(function(event){
  if(event.key == "Enter"){
    var weight = $('#weight').val();
    var height = $('#height').val();
    var bmiValue = bmiCalc(weight, height);
    $(".bmi").text(bmiValue);
    if(bmiValue < 18.5){
      underWeight();
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9){
      normal();
    }
    else if(bmiValue > 24.9 && bmiValue <= 29.9){
      overWeight();
    }
    else {
      obese();
    }
  }
})

function bmiCalc(weight, height){
  var bmi = weight/Math.pow((height/100), 2);
  return Math.floor(bmi);
}
function underWeight(){
  $(".remark").text("You are UnderWeight.");
  $("body").css("background-color", "red");
  $("body").css("color", "yellow");
}
function normal(){
  $(".remark").text("You are Perfect.");
  $("body").css("background-color", "green");
  $("body").css("color", "black");
}
function overWeight(){
  $(".remark").text("You are OverWeight");
  $("body").css("background-color", "yellow");
  $("body").css("color", "blue");
}
function obese(){
  $(".remark").text("You are Obese");
  $("body").css("background-color", "red");
  $("body").css("color", "yellow");
}
