<?php
// In deze file zitten de PHP statements voor het opbouwen van een verbinding met de database
include "../db_connection-json.php";

// validate the optional count and start parameters (can be used voor paging)
$start=0; // default
$count=10; // default (show 10 messages)
try {
	$query = $db->prepare("select id, coal, bronze, zilver, goud from ctGameLevel");
	$params=array();
	$query->execute($params);
	$result =  $query->fetchAll(PDO::FETCH_ASSOC);
	//output het resultaat als JSON data. De frontend (jQuery/Javascript) zal de weergave moeten afhandelen
	echo json_encode($result);		
} catch(PDOException $e) {
	// Vul een array met informatie over de error
	$error_info["error"]["status"]=true;
	$error_info["error"]["type"]="Database error";
	$error_info["error"]["details"]=$e->getMessage();
	// Stuur de error in JSON formaat naar de browser
	echo json_encode($error_info);
}
?>

