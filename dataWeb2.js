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
    c += "Food: " + obj[n-1].aFood;
    c += "Date: " + obj[n-1].date;
    c += "Notes: " + obj[n-1].Notes;
    c += "Name: " + obj[n-1].Name;
    w.innerHTML = c
  }
})
table = document.getElementById("ChickenCoopData");
row = table.insertRow(0);
cell1= row.insertCell(0);
cell2 = row.insertCell(1);
cell1.innerHTML = "obj[n-1].aWater";
