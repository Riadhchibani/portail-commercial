import { FileImage } from "./FileImage";
import { Utilisateur } from "./utilisateur";




export class Publication {
    constructor(
        public id_pub?: number,
        public title_pub?: string,
        public state?: string,
        public first_date?: Date,
        public last_date?: Date,
        public description?: string,
        public utilisateur?: Utilisateur,
        public imageName?: string,
        public testPub?:boolean

    ) { }
}