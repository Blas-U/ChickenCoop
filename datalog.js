//document.addEventListener("DOMContentLoaded", function(event) {
  let today = new Date().toISOString().substr(0, 10);
  dateLog = document.getElementById("dateLog");
  dateLog.value = today;
  console.log(today)
//});



submitButton = document.getElementById("submit");
submitButton.addEventListener("click",function(){
  console.log("hi");
  nEggsbox = document.getElementById("nEggs")
  nEggs = nEggsbox.value
  console.log(nEggs);
  aWater = document.getElementById("aWater")
  aWater = aWater.value
  console.log(aWater);
  aFood = document.getElementById("aFood").value
//  aFood = aFood.value
  console.log(aFood);
  d = document.getElementById("dateLog")
  console.log(d.value)
  t = document.getElementById("textBox")
  console.log(t.value)
  msg = {
    "nEggs" : nEggs,
    "aWater" : aWater,
    "aFood" : aFood,
    "date" : d.value,
    "Notes" : t.value
   }
   console.log("msg:",msg)
   console.log($("#nEggs").val())
   //send msg to server
   $.ajax({
     type: "POST",
     url: "savedata.php",
     data: msg,
     success: function (data){
       console.log(data)
     }
   })
})

waterslider = document.getElementById("aWaterSlider");
waterslider.addEventListener("change", function(){
  document.getElementById("aWater").value = this.value;
})

aWater = document.getElementById("aWater");
aWater.addEventListener("change", function(){
  document.getElementById("aWaterSlider").value = this.value;
})

aFoodSlider = document.getElementById("aFoodSlider");
aFoodSlider.addEventListener("change", function(){
  document.getElementById("aFood").value = this.value;
})

aFood = document.getElementById("aFood");
aFood.addEventListener("change", function(){
  document.getElementById("aFoodSlider").value = this.value;
})

t = document.getElementById("textBox");
t.addEventListener("change", function(){
  //document.getElementById("textBox").value = t.value;
  console.log(t.value)
})

t.value = ("hello")
console.log(t.value)
