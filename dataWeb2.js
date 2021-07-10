$.ajax({
  type: "POST",
  url: "dataWebsite.php",
  success: function (data){
    console.log(data)
    alert("Thank You")
    w = document.getElementById("dataWeb");
    obj = JSON.parse(data)
    c = "Water: " + obj[0].aWater;
    w.innerHTML = c
  }
})
