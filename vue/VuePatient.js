class VuePatient{
  constructor(){
    this.html = document.getElementById("html-vue-patient").innerHTML;
    this.patient = null;
  }

  initialiserPatient(patient){
    this.patient = patient;
  }

  afficher(header){
    document.getElementsByTagName("body")[0].innerHTML = header + this.html;
    document.getElementById("patient-nom-complet").innerHTML = this.patient.getNom() + ", " + this.patient.getPrenom();


    document.getElementById("patient-naissence").innerHTML     = "Date de naissence: "   + this.patient.naissence;
    document.getElementById("patient-taille").innerHTML        = "Taille: "              + this.patient.taille;
    document.getElementById("patient-poids").innerHTML         = "Poids: "               + this.patient.poids;
    document.getElementById("patient-groupeSanguin").innerHTML = "Groupe sanguin: "      + this.patient.groupeSanguin;
    document.getElementById("patient-maladieConnu").innerHTML  = "Maladies connus: "     + this.patient.maladieConnu;
    document.getElementById("patient-origine").innerHTML       = "Lieu d'origine: "      + this.patient.origine;
    document.getElementById("patient-yeux").innerHTML          = "Couleur des yeux: "    + this.patient.yeux;
    document.getElementById("patient-cheveux").innerHTML       = "Couleur des cheveux: " + this.patient.cheveux;
  }

}
