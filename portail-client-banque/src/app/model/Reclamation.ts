import { Utilisateur } from "./utilisateur";

export class Reclamation {

    constructor(
        public id_reclamation?: number,
        public title_reclamation?:number,
        public description?: string,
        public etat_reclamation?: string,
        public date?: Date,
        public utilisateur?:Utilisateur,
        public reponse?:string
    ) {

    }

    getUtilisateur(){
        return this.utilisateur;
    }
}
