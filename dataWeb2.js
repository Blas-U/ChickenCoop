$.ajax({
  type: "POST",
  url: "dataWebsite.php",
  success: function (data){
    console.log(data)
//    alert("Thank You")
    w = document.getElementById("dataWeb");
    obj = JSON.parse(data)
    n = obj.length
    c = "Water: " + obj[n-1].aWater + "<br>";
    c += "Eggs: " + obj[n-1].nEggs;
    w.innerHTML = c
  }
})
