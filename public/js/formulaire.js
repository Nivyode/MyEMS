 function validateForm() {
            var nom = document.getElementById("nom").value;
            var prenom = document.getElementById("prenom").value;
            var date = document.getElementById("date").value;
            var taille = document.getElementById("taille").value;
            var poids = document.getElementById("poids").value;

            if (nom === "" || prenom === "" || date === "" || taille === "" || poids === "") {
                document.getElementById("MessageErreur").style.display = "block";
                return false;
            }

            return true;
        }
