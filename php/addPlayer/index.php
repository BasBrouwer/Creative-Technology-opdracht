<?php
// In deze file zitten de PHP statements voor het opbouwen van een verbinding met de database
include "../db_connection-json.php";

// Check of het formulier correct is aangesproken en verplichte velden niet leeg zijn
// empty kijkt of een variable bestaat en is gevuld met iets anders dan 0 of de lege string.
if (!empty($_POST["name"]) && !empty($_POST["blocks"])) {
	try {
		// opslaan info in database
		// Samenstellen query via de prepare methode
		$query = $db->prepare("insert into ctGameUser (name, blocks) values (?,?)");
		// spaties worden uit de naam gehaald en de schaling van de avatar moet tussen 10 en 100% liggen
		$params=array(str_replace(
			' ', 
			'', 
			$_POST["name"]),
			$_POST["blocks"]);

		$query->execute($params);
		// Feedback dat het toevoegen is gelukt
		// Verzamel de feedback info in een array
		$feedback["error"]=false;
		$feedback["message"]="Bericht toegevoegd!";
	} catch(PDOException $e) {
		// Feedback dat het toevoegen is mislukt
		// Verzamel de feedback info in een array
		$feedback["error"]=true;
		$feedback["error-type"]="Database error";
		$feedback["error-details"]="Toevoegen nieuw bericht mislukt! ".$e->getMessage();	
	}
} else {
	// Feedback dat het opslaan is mislukt
	// Verzamel de feedback info in een array
	$feedback["error"]=true;
	$feedback["error-type"]="Algemene fout";
	$feedback["error-details"]="Toevoegen nieuwbericht mislukt! De parameters name, blocks zijn verplicht.";	
}
// send the feedback as JSON to the browser
echo json_encode($feedback);
?>


