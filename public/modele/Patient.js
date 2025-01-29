class Patient{

    constructor(id, nom, prenom, groupeSanguin , taille, poids, naissence, maladieConnu, origine, yeux, cheveux){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.groupeSanguin = groupeSanguin;
        this.taille = taille;
        this.poids = poids;
        this.naissence = naissence;
        this.maladieConnu = maladieConnu;
        this.origine = origine;
        this.yeux = yeux;
        this.cheveux = cheveux;
    }

    getId(){
        return this.id;
    }

    getNom(){
        return this.nom;
    }

    getPrenom(){
        return this.prenom;
    }

    getNaissence(){
        return this.naissence;
    }

    getGroupeSanguin(){
        return this.groupeSanguin;
    }

}
