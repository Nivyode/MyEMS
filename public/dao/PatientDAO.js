class PatientDAO{
    constructor(){
        let listePatientMemoire =  [
            new Patient(1, "Morgan", "Ruby", "A+" , 120, 37, "2010-06-18", "Aucune", "Inconnu", "bleu", "blond"),
            new Patient(2, "Connor", "Brian", "O+" , 183, 60, "1984-07-19", "Cancer du poumon", "Amerique", "bleu", "roux"),
            new Patient(3, "Woods", "Melanie", "AB-" , 176, 55, "1984-07-19", "Aucune", "Amerique", "Marron", "Noir")
        ]

        localStorage['patient'] = JSON.stringify(listePatientMemoire);
        this.listePatient = [];
    }
    
    lister(){
        this.listePatient = [];
        let listePatientMemoire = [];
        if (localStorage['patient']){
            listePatientMemoire = JSON.parse(localStorage['patient']);
        }

        for(let position in listePatientMemoire){
            let patient = new Patient(listePatientMemoire[position].id,
                                      listePatientMemoire[position].nom,
                                      listePatientMemoire[position].prenom,
                                      listePatientMemoire[position].groupeSanguin,
                                      listePatientMemoire[position].taille,
                                      listePatientMemoire[position].poids,
                                      listePatientMemoire[position].naissence,
                                      listePatientMemoire[position].maladieConnu,
                                      listePatientMemoire[position].origine,
                                      listePatientMemoire[position].yeux,
                                      listePatientMemoire[position].cheveux
                                      )
            this.listePatient.push(patient);
        }

        return this.listePatient;

    }
    
    chercher(id){
        return this.listePatient.find(patient => patient.getId() == id);
    }
}
