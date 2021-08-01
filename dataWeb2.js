$.ajax({
  type: "POST",
  url: "dataWebsite.php",
  success: function (data){
    console.log(data)
//    alert("Thank You")
    //w = document.getElementById("dataWeb");
    obj = JSON.parse(data)
    n = obj.length
    // c = "Water: " + obj[n-1].aWater + "<br>";
    // c += "Eggs: " + obj[n-1].nEggs;
    // c += "Food: " + obj[n-1].aFood;
    // c += "Date: " + obj[n-1].date;
    // c += "Notes: " + obj[n-1].Notes;
    // c += "Name: " + obj[n-1].Name;
    // w.innerHTML = c
    var table = document.getElementById("ChickenCoopData");
      for (let i = 0; i < n; i++) {
        var row = table.insertRow(1);
        var cell1= row.insertCell(0);
        var cell2= row.insertCell(1);
        var cell3= row.insertCell(2);
        var cell4= row.insertCell(3);
        var cell5= row.insertCell(4);
        var cell6= row.insertCell(5);
        // var cell2 = row.insertCell(2);
        cell1.innerHTML = obj[i].date;
        cell2.innerHTML = obj[i].Name;
        cell3.innerHTML = obj[i].Notes;
        cell4.innerHTML = obj[i].aWater;
        cell5.innerHTML = obj[i].nEggs;
        cell6.innerHTML = obj[i].aFood;
    }
  }
})
