import { Demande } from './Demande';
import { Utilisateur } from "./utilisateur";

export class Commande {
    constructor(
        public id_commande?: number,
        public date?: Date,
        public description?: string,
        public produit?: string,
        public prix?: number,
        public utilisateur_Admin?: Utilisateur,
        public acceptation?: boolean,
        public utilisateur_Client?: Utilisateur,
        public demande?:Demande
    ) {

    }

}
