class Application {
  constructor(window, vueListePatient, vuePatient, vueHeader){
    this.patientDAO = new PatientDAO();
    

    this.window = window;
    this.listePatient = this.patientDAO.lister();

    this.vueListePatient = vueListePatient;
    this.vueHeader = vueHeader;
    this.vuePatient = vuePatient;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListePatient.initialiserListePatient(this.listePatient);
      this.vueListePatient.afficher(this.vueHeader.html);

    }else{

      let navigation = hash.match(/^#patient\/([0-9]+)/);
      //console.log(navigation)
      let idPatient = navigation[1];
      //console.log(idPatient);
      //console.log(this.patientDAO.chercher(idPatient));

      let patient = this.patientDAO.chercher(idPatient);
      this.vuePatient.initialiserPatient(patient);
      this.vuePatient.afficher(this.vueHeader.html);

    }
  }

}

new Application(window, new VueListePatient(), new VuePatient(), new VueHeader());

