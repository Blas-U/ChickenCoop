$.ajax({
  type: "POST",
  url: "dataWebsite2.php",
  success: function (data){
    console.log(data)
    alert("Thank You")
    w = document.getElementById("dataWeb");
    obj = JSON.parse(data)
    w.innerHTML = obj[0].nEggs
  }
})
