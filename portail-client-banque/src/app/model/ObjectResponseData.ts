import { ImArticle } from "./ImArticle";

export class ObjectResponseData{
    constructor(
        public im_familles_id:number,
        public libelle:string,
        public im_sous_familles_id:number,
        public sf_libelle:string,
        public sf_im_familles_id:number,
        public vendable:boolean,
        public classe_ngp_libre:boolean,
        public abr:string,
        public imArticle:ImArticle
    ){}
}