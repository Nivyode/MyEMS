<?php
include "connexion-lecteur.php";

$SQL_STALKING = "SELECT `id`, `nom`, `prenom`,`naissance` FROM `patient` WHERE 1";
$requete = $basededonnees->prepare($SQL_STALKING);
    $requete->execute();
    $patients = $requete->fetchAll(PDO::FETCH_OBJ);

    header("Acces-Control-Allow-Origin: *");
    header("Content-Type:text/xml");

   $xml = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
   $xml .= '<patients>' . PHP_EOL;

   foreach ($patients as $patient) {
      $xml .= '    <patient>' . PHP_EOL;
      $xml .= '        <id>' . htmlspecialchars($patient->id) . '</id>' . PHP_EOL;
      $xml .= '        <nom>' . htmlspecialchars($patient->nom) . '</nom>' . PHP_EOL;
      $xml .= '        <prenom>' . htmlspecialchars($patient->prenom) . '</prenom>' . PHP_EOL;
      $xml .= '        <naissance>' . htmlspecialchars($patient->naissance) . '</naissance>' . PHP_EOL;
      $xml .= '    </patient>' . PHP_EOL;
   }

$xml .= '</patients>';

echo $xml;

