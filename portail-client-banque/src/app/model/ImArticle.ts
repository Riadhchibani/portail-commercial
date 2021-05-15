



export class ImArticle {
    constructor(
        public imArticleId: string,

        public libelle: string,

        public imRepertoireId: string,

        public matPersCre: string,

        public dateCreation: Date,

        public matPersMod: string,

        public dateModification: Date,

        public typeInventaire: string,

        public pointageInventaire: string,

        public codeArticle: string,

        public cgClasseNgpId: number,

        public imSousFamillesId: number,

        public datePeromption: Date,

        public pointage: string,

        public etat: string,

        public uniteAchatId: string,

        public uniteStockageId: string,

        public uniteExploitationId: string,

        public prixAchat: number,

        public dernierPrixAchat: number,

        public coefAchStoc: number,

        public coefStocExpl: number,

        public ficheTechnique: boolean,

        public semiFini: boolean,

        public pmp: number,

        public incorporable: string,

        public dateDesactivation: Date,

        public isAchatDirect: boolean,

        public categorieMinimale: number,

        public isNotActive: boolean,

        public dernierPrixVente: number,

        public prixVente: number,

        public observation: string,

        public crNatureServiceId: number,

        public photoBdata: string,

        public photoCtype: string,

        public photoSdata: string,

        public detail: boolean,

        public allowNegativeValue: boolean,

        public dateCommercial: Date,

        public refFournisseur: string,

        public applicationFodec: string,

        public applicationTpe: string,

        public applicationDc: string,

        public tauxMarge: number,

        public remise: string,

        public tauxTvaAchat: number,

        public tauxTvaVente: number,

        public tauxFodec: number,

        public tauxTpe: number,

        public tauxDc: number,

        public stockable: string,

        public lotNumSerie: string,

        public gestionDetail: string,

        public pointageStock: string,

        public delaiLivraisMoyen: number,

        public methodeTraitementChoixFourn: string,

        public crFournisseurId: string,

        public prixPublic: number,

        public retardLivraisMoyen: number) { }
}