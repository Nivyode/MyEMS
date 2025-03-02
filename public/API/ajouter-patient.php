<?php
include "connexion-ecrivain.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Vérifier si tous les champs requis sont présents
    if (!isset(
                $_POST['nom'],
                $_POST['prenom'],
                $_POST['naissance'],
                $_POST['telephone'],
                $_POST['discord'],
                $_POST['taille'],
                $_POST['poids'],
                $_POST['groupeSanguin'],
                $_POST['yeux'],
                $_POST['cheveux'],
                $_POST['metier']
            )
        )
    {
        http_response_code(400);
        echo "Données manquantes.";
        exit;
    }

    $nom = htmlspecialchars(trim($_POST['nom']));
    $prenom = htmlspecialchars(trim($_POST['prenom']));
    $telephone = htmlspecialchars(trim($_POST['telephone']));
    $discord = htmlspecialchars(trim($_POST['discord']));
    $naissance = htmlspecialchars(trim($_POST['naissance']));
    $taille = htmlspecialchars(trim($_POST['taille']));
    $poids = htmlspecialchars(trim($_POST['poids']));
    $groupeSanguin = htmlspecialchars(trim($_POST['groupeSanguin']));
    $yeux = htmlspecialchars(trim($_POST['yeux']));
    $cheveux = htmlspecialchars(trim($_POST['cheveux']));
    $metier = htmlspecialchars(trim($_POST['metier']));
    if(isset($_POST['note'])){
      $note = htmlspecialchars(trim($_POST['note']));
    }else{
        $node = "";
    }


    $SQL_INSERT = "INSERT INTO
    `patient`(
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
    )
    VALUES (
        :nom,
        :prenom,
        :telephone,
        :discord,
        :naissance,
        :taille,
        :poids,
        :groupeSanguin,
        :yeux,
        :cheveux,
        :metier,
        :note
        )";
    $requete = $basededonnees->prepare($SQL_INSERT);
    $requete->bindParam(':nom', $nom, PDO::PARAM_STR);
    $requete->bindParam(':prenom', $prenom, PDO::PARAM_STR);
    $requete->bindParam(':telephone', $telephone, PDO::PARAM_STR);
    $requete->bindParam(':discord', $discord, PDO::PARAM_STR);
    $requete->bindParam(':naissance', $naissance, PDO::PARAM_STR);
    $requete->bindParam(':taille', $taille, PDO::PARAM_STR);
    $requete->bindParam(':poids', $poids, PDO::PARAM_STR);
    $requete->bindParam(':groupeSanguin', $groupeSanguin, PDO::PARAM_STR);
    $requete->bindParam(':yeux', $yeux, PDO::PARAM_STR);
    $requete->bindParam(':cheveux', $cheveux, PDO::PARAM_STR);
    $requete->bindParam(':metier', $metier, PDO::PARAM_STR);
    $requete->bindParam(':note', $note, PDO::PARAM_STR);

    if ($requete->execute()) {
        $id = $basededonnees->lastInsertId();

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: text/xml");

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
        $xml .= '<patient>' . PHP_EOL;
        $xml .= '    <id>' . htmlspecialchars($id) . '</id>' . PHP_EOL;
        $xml .= '    <nom>' . htmlspecialchars($nom) . '</nom>' . PHP_EOL;
        $xml .= '    <prenom>' . htmlspecialchars($prenom) . '</prenom>' . PHP_EOL;
        $xml .= '    <naissance>' . htmlspecialchars($naissance) . '</naissance>' . PHP_EOL;
        $xml .= '</patient>';

        echo $xml;
    } else {
        http_response_code(500);
        echo "Erreur lors de l'insertion.";
    }
    exit;
}

http_response_code(405);
echo "Méthode non autorisée.";

