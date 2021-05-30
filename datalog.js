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
