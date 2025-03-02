<?php
include "connexion-lecteur.php";

// Vérifier si l'ID est fourni
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    http_response_code(400);
    echo "ID de patient invalide.";
    exit;
}

$id = intval($_GET['id']);

$SQL_DETAIL = "
  SELECT
    `id`,
    `nom`,
    `prenom`,
    `telephone`,
    `discord`,
    `naissance`,
    `taille`,
    `poids`,
    `groupeSanguin`,
    `yeux`,
    `cheveux`,
    `metier`,
    `note`
  FROM `patient`
  WHERE `id` = :id";

$requete = $basededonnees->prepare($SQL_DETAIL);
$requete->bindParam(':id', $id, PDO::PARAM_INT);
$requete->execute();
$patient = $requete->fetch(PDO::FETCH_OBJ);

// Vérifier si un patient est trouvé
if (!$patient) {
    http_response_code(404);
    echo "Patient non trouvé.";
    exit;
}

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/xml");

$xml = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
$xml .= '<patient>' . PHP_EOL;
$xml .= '    <id>' . htmlspecialchars($patient->id) . '</id>' . PHP_EOL;
$xml .= '    <nom>' . htmlspecialchars($patient->nom) . '</nom>' . PHP_EOL;
$xml .= '    <prenom>' . htmlspecialchars($patient->prenom) . '</prenom>' . PHP_EOL;
$xml .= '    <telephone>' . htmlspecialchars($patient->telephone) . '</telephone>' . PHP_EOL;
$xml .= '    <discord>' . htmlspecialchars($patient->discord) . '</discord>' . PHP_EOL;
$xml .= '    <naissance>' . htmlspecialchars($patient->naissance) . '</naissance>' . PHP_EOL;
$xml .= '    <taille>' . htmlspecialchars($patient->taille) . '</taille>' . PHP_EOL;
$xml .= '    <poids>' . htmlspecialchars($patient->poids) . '</poids>' . PHP_EOL;
$xml .= '    <groupeSanguin>' . htmlspecialchars($patient->groupeSanguin) . '</groupeSanguin>' . PHP_EOL;
$xml .= '    <yeux>' . htmlspecialchars($patient->yeux) . '</yeux>' . PHP_EOL;
$xml .= '    <cheveux>' . htmlspecialchars($patient->cheveux) . '</cheveux>' . PHP_EOL;
$xml .= '    <metier>' . htmlspecialchars($patient->metier) . '</metier>' . PHP_EOL;
$xml .= '    <note>' . htmlspecialchars($patient->note) . '</note>' . PHP_EOL;
$xml .= '</patient>';

echo $xml;

