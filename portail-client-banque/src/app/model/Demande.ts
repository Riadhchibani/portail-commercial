import { Utilisateur } from "./utilisateur";

export class Demande {
    constructor(
        public id_demande?: number,
        public demand_date?: Date,
        public edit_date?: Date,
        public etat?: string,
        public description?: string,
        public produitName?: string,
        public utilisateurClient?: Utilisateur,
        public utilisateurAdmin?: Utilisateur,
    ) {

    }

    public getUser() {
        return this.utilisateurClient;
    }

    public setutilisateurAdmin(utilisateurAdmin: Utilisateur) {
        this.utilisateurAdmin = utilisateurAdmin;
    }

}
