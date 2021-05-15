export class ImArticle {
    constructor(
        public imFamillesId: number,

        public libelle: string,

        public matPersCre: string,

        public dateCreation: Date,

        public matPersMod: string,

        public dateModification: Date,

        public imClassesId: string,

        public maxSeuil: number) { }
}