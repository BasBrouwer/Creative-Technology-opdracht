<?php
// In deze file zitten de PHP statements voor het opbouwen van een verbinding met de database
include "../db_connection-json.php";

try {
	// SQL voor het ophalen van alle media items. Ik sorteer ze op ID
	$query = $db->prepare("select id, name, blocks from ctGameUser order by blocks limit 5");
	
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

