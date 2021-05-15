export class ImSousFamilles {
    constructor(
        public imSousFamillesId: number,

        public libelle: string,

        public matPersCre: string,

        public dateCreation: Date,

        public matPersMod: string,

        public dateModification: Date,

        public imFamillesId: number,

        public vendable: boolean,

        public classeNgpLibre: boolean,

        public abr: string
    ) { }
}