// je déclare une variable objet stagiaire
const stagiaire = {
    nom : "savidan",
    prenom : "serge",
    age : 58,
    adresse : "Lognes",
    CP : 77185,
    chauve : false
}

//-------------

console.log(stagiaire.nom, stagiaire.age);

const chien = {
    nom:"Kim",
    race:"Berger Allemand",
    age:12,
    couleur:"noire et beige",
    vaciné:true,
    utility() {
        return "Compagnie";
    }
}

console.log(chien.nom, chien.race, chien.couleur, chien.age + " ans", "vaciné = " + chien.vaciné, "Chien de " + chien.utility());

//-------------

const voiture = {
    marque:"Chevrolet",
    model:"Impala",
    année:67,
    couleur:"noire",
    demarrer() {
        return "La voiture démarre !";
    }
};
 
const personne = {
    nom:"Winchester",
    prenom:"Dean",
    age:46,
    profession:"Chasseur",
    conduire() {
        return "J'ai le permis !"
    }
};

const ville = {
    nom:"Lawrence",
    etats:"Kansas",
    pays:"Etat-Unis",
    CP:66044
};

console.log("Je m'appele " + personne.prenom, personne.nom + ", j'ai " + personne.age + " ans et je conduit ma " + voiture.marque, voiture.model + " au " + ville.pays + ".");
