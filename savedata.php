<?php

$fName = "ChickenData.json";
//file_put_contents($fName,$x)
// get data from client
$x = json_encode($_REQUEST);
//echo($x);
//get data from existing file
$data = file_get_contents($fName);
//convert data string from json into a variable
$dataVariable = json_decode($data);
//echo($dataVariable);
//use the data from client and put it in the file
$dataVariable[] = $_REQUEST;
echo(json_encode($dataVariable));

// resave the file
file_put_contents($fName, json_encode($dataVariable)."\n");

//to do 1. add a textbox for name
//      2. add a input box for time
 ?>
