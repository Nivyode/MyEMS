let boutonListerParNom = document.getElementById('btn-lister-nom');
boutonListerParNom.addEventListener("click", (evenementListerNom) => ListerParNom(evenementListerNom));

function ListerParNom(evenement){

    ajax = new XMLHttpRequest();
    url = "http://myems.nivyode.com/lister-patient-par-nom.php";

    ajax.open('GET', url, true);
    ajax.onreadystatechange = function( )
    {
        if(4 == ajax.readyState)
        {
            var parser = new DOMParser();

            // Parsing du XML
            var xmlDoc = parser.parseFromString(ajax.responseText, "text/xml");

            // Récupération des éléments 'patient'
            var patients = xmlDoc.getElementsByTagName("patient");

            // Parcourir les éléments 'patient' et afficher les informations
            document.getElementById("liste-patients").innerHTML = "";

            Array.from(patients).forEach((patient, index) => {
                document.getElementById("liste-patients").innerHTML += 


                "<br><div class=\"col-sm-6\">"+
                    "<div class=\"card\">"+
                        "<div class=\"card-body\">"+
                            "<h5 class=\"card-title\">"+
                                patient.querySelector('nom').textContent+ ", " +
                                patient.querySelector('prenom').textContent+ " (" +
                                patient.querySelector('naissance').textContent + ")"+
                            "</h5>"+
                            "<a href=\"page-patient.php\" class=\"btn btn-primary\">En savoir plus</a>"+
                        "</div>"+
                    "</div>"+
                "</div>"
                
            });

            //texte = ajax.responseText;
            //lieuContenu.textContent = texte;
        }
    };
    ajax.send('');

}
