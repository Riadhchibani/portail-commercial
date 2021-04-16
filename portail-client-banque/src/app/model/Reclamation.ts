import { Utilisateur } from "./utilisateur";

export class Reclamation {

    constructor(
        public id_reclamation?: number,
        public title_reclamation?:number,
        public description?: string,
        public etat_reclamation?: string,
        public date_create?: Date,
        public utilisateur?:Utilisateur
    ) {

    }

    getUtilisateur(){
        return this.utilisateur;
    }
}
