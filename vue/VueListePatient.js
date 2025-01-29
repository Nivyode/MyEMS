class VueListePatient{
  constructor(){
    this.html = document.getElementById("html-vue-liste-patient").innerHTML;
    this.listepatientDonnee = null;
  }

  initialiserListePatient(listePatientDonnee){
    this.listePatientDonnee = listePatientDonnee;
    console.log(this.listePatientDonnee);
  }

  afficher(header){
    document.getElementsByTagName("body")[0].innerHTML = header + this.html;

    let listePatient = document.getElementById("liste-patients");
    const listePatientItemHTML = listePatient.innerHTML;
    let listePatientHTMLRemplacement = "";

    for(var numeroPatient in this.listePatientDonnee){
      let listePatientItemHTMLRemplacement = listePatientItemHTML;
      listePatientItemHTMLRemplacement = listePatientItemHTMLRemplacement.replace("{patient.id}",this.listePatientDonnee[numeroPatient].getId());
      listePatientItemHTMLRemplacement = listePatientItemHTMLRemplacement.replace("{patient.nom}",this.listePatientDonnee[numeroPatient].getNom() +", "+
                                                                                                  this.listePatientDonnee[numeroPatient].getPrenom()+" ("+
                                                                                                  this.listePatientDonnee[numeroPatient].getNaissence()+")");
      listePatientHTMLRemplacement += listePatientItemHTMLRemplacement;
    }

    listePatient.innerHTML = listePatientHTMLRemplacement;
  }

}
