export class Utilisateur {

    login:string;
    password:string;
    nomUtilisateur:string;

    constructor(){
        this.login="1";
        this.password="1";
        this.nomUtilisateur="Amine";
    }

    getLogin(){
        return this.login;
    }

    getPassword(){
        return this.password;
    }

    getNomUtilisateur(){
        return this.nomUtilisateur;
    }

}