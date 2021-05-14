package com.example.portailClient.model;

import javax.persistence.*;

@Entity
@Table(
        name = "im_article",
        schema = "sss_immo_db"
)
public class ImArticle {
    @Id
    @Column(name = "im_article_id")
    private String imArticleId;

    @Column(name = "libelle")
    private String libelle;

    @Column(name = "im_repertoire_id")
    private String imRepertoireId;

    @Column(name = "mat_pers_cre")
    private String matPersCre;

    @Column(name = "date_creation")
    private java.sql.Date dateCreation;

    @Column(name = "mat_pers_mod")
    private String matPersMod;

    @Column(name = "date_modification")
    private java.sql.Date dateModification;

    @Column(name = "type_inventaire")
    private String typeInventaire;

    @Column(name = "pointage_inventaire")
    private String pointageInventaire;

    @Column(name = "code_article")
    private String codeArticle;

    @Column(name = "cg_classe_ngp_id")
    private Long cgClasseNgpId;

    @Column(name = "im_sous_familles_id")
    private Long imSousFamillesId;

    @Column(name = "date_peromption")
    private java.sql.Date datePeromption;

    @Column(name = "pointage")
    private String pointage;

    @Column(name = "etat")
    private String etat;

    @Column(name = "unite_achat_id")
    private String uniteAchatId;

    @Column(name = "unite_stockage_id")
    private String uniteStockageId;

    @Column(name = "unite_exploitation_id")
    private String uniteExploitationId;

    @Column(name = "prix_achat")
    private Long prixAchat;

    @Column(name = "dernier_prix_achat")
    private Long dernierPrixAchat;

    @Column(name = "coef_ach_stoc")
    private Long coefAchStoc;

    @Column(name = "coef_stoc_expl")
    private Long coefStocExpl;

    @Column(name = "fiche_technique")
    private Boolean ficheTechnique;

    @Column(name = "semi_fini")
    private Boolean semiFini;

    @Column(name = "pmp")
    private Long pmp;

    @Column(name = "incorporable")
    private String incorporable;

    @Column(name = "date_desactivation")
    private java.sql.Date dateDesactivation;

    @Column(name = "is_achat_direct")
    private Boolean isAchatDirect;

    @Column(name = "categorie_minimale")
    private Long categorieMinimale;

    @Column(name = "is_not_active")
    private Boolean isNotActive;

    @Column(name = "dernier_prix_vente")
    private Long dernierPrixVente;

    @Column(name = "prix_vente")
    private Long prixVente;

    @Column(name = "observation")
    private String observation;

    @Column(name = "cr_nature_service_id")
    private Long crNatureServiceId;

    @Column(name = "photo_bdata")
    private String photoBdata;

    @Column(name = "photo_ctype")
    private String photoCtype;

    @Column(name = "photo_sdata")
    private String photoSdata;

    @Column(name = "detail")
    private Boolean detail;

    @Column(name = "allow_negative_value")
    private Boolean allowNegativeValue;

    @Column(name = "date_commercial")
    private java.sql.Date dateCommercial;

    @Column(name = "ref_fournisseur")
    private String refFournisseur;

    @Column(name = "application_fodec")
    private String applicationFodec;

    @Column(name = "application_tpe")
    private String applicationTpe;

    @Column(name = "application_dc")
    private String applicationDc;

    @Column(name = "taux_marge")
    private Long tauxMarge;

    @Column(name = "remise")
    private String remise;

    @Column(name = "taux_tva_achat")
    private Long tauxTvaAchat;

    @Column(name = "taux_tva_vente")
    private Long tauxTvaVente;

    @Column(name = "taux_fodec")
    private Long tauxFodec;

    @Column(name = "taux_tpe")
    private Long tauxTpe;

    @Column(name = "taux_dc")
    private Long tauxDc;

    @Column(name = "stockable")
    private String stockable;

    @Column(name = "lot_num_serie")
    private String lotNumSerie;

    @Column(name = "gestion_detail")
    private String gestionDetail;

    @Column(name = "pointage_stock")
    private String pointageStock;

    @Column(name = "delai_livrais_moyen")
    private Long delaiLivraisMoyen;

    @Column(name = "methode_traitement_choix_fourn")
    private String methodeTraitementChoixFourn;

    @Column(name = "cr_fournisseur_id")
    private String crFournisseurId;

    @Column(name = "prix_public")
    private Long prixPublic;

    @Column(name = "retard_livrais_moyen")
    private Long retardLivraisMoyen;

    public String getImArticleId() {
        return this.imArticleId;
    }

    public void setImArticleId(String imArticleId) {
        this.imArticleId = imArticleId;
    }

    public String getLibelle() {
        return this.libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getImRepertoireId() {
        return this.imRepertoireId;
    }

    public void setImRepertoireId(String imRepertoireId) {
        this.imRepertoireId = imRepertoireId;
    }

    public String getMatPersCre() {
        return this.matPersCre;
    }

    public void setMatPersCre(String matPersCre) {
        this.matPersCre = matPersCre;
    }

    public java.sql.Date getDateCreation() {
        return this.dateCreation;
    }

    public void setDateCreation(java.sql.Date dateCreation) {
        this.dateCreation = dateCreation;
    }

    public String getMatPersMod() {
        return this.matPersMod;
    }

    public void setMatPersMod(String matPersMod) {
        this.matPersMod = matPersMod;
    }

    public java.sql.Date getDateModification() {
        return this.dateModification;
    }

    public void setDateModification(java.sql.Date dateModification) {
        this.dateModification = dateModification;
    }

    public String getTypeInventaire() {
        return this.typeInventaire;
    }

    public void setTypeInventaire(String typeInventaire) {
        this.typeInventaire = typeInventaire;
    }

    public String getPointageInventaire() {
        return this.pointageInventaire;
    }

    public void setPointageInventaire(String pointageInventaire) {
        this.pointageInventaire = pointageInventaire;
    }

    public String getCodeArticle() {
        return this.codeArticle;
    }

    public void setCodeArticle(String codeArticle) {
        this.codeArticle = codeArticle;
    }

    public Long getCgClasseNgpId() {
        return this.cgClasseNgpId;
    }

    public void setCgClasseNgpId(Long cgClasseNgpId) {
        this.cgClasseNgpId = cgClasseNgpId;
    }

    public Long getImSousFamillesId() {
        return this.imSousFamillesId;
    }

    public void setImSousFamillesId(Long imSousFamillesId) {
        this.imSousFamillesId = imSousFamillesId;
    }

    public java.sql.Date getDatePeromption() {
        return this.datePeromption;
    }

    public void setDatePeromption(java.sql.Date datePeromption) {
        this.datePeromption = datePeromption;
    }

    public String getPointage() {
        return this.pointage;
    }

    public void setPointage(String pointage) {
        this.pointage = pointage;
    }

    public String getEtat() {
        return this.etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getUniteAchatId() {
        return this.uniteAchatId;
    }

    public void setUniteAchatId(String uniteAchatId) {
        this.uniteAchatId = uniteAchatId;
    }

    public String getUniteStockageId() {
        return this.uniteStockageId;
    }

    public void setUniteStockageId(String uniteStockageId) {
        this.uniteStockageId = uniteStockageId;
    }

    public String getUniteExploitationId() {
        return this.uniteExploitationId;
    }

    public void setUniteExploitationId(String uniteExploitationId) {
        this.uniteExploitationId = uniteExploitationId;
    }

    public Long getPrixAchat() {
        return this.prixAchat;
    }

    public void setPrixAchat(Long prixAchat) {
        this.prixAchat = prixAchat;
    }

    public Long getDernierPrixAchat() {
        return this.dernierPrixAchat;
    }

    public void setDernierPrixAchat(Long dernierPrixAchat) {
        this.dernierPrixAchat = dernierPrixAchat;
    }

    public Long getCoefAchStoc() {
        return this.coefAchStoc;
    }

    public void setCoefAchStoc(Long coefAchStoc) {
        this.coefAchStoc = coefAchStoc;
    }

    public Long getCoefStocExpl() {
        return this.coefStocExpl;
    }

    public void setCoefStocExpl(Long coefStocExpl) {
        this.coefStocExpl = coefStocExpl;
    }

    public Boolean getFicheTechnique() {
        return this.ficheTechnique;
    }

    public void setFicheTechnique(Boolean ficheTechnique) {
        this.ficheTechnique = ficheTechnique;
    }

    public Boolean getSemiFini() {
        return this.semiFini;
    }

    public void setSemiFini(Boolean semiFini) {
        this.semiFini = semiFini;
    }

    public Long getPmp() {
        return this.pmp;
    }

    public void setPmp(Long pmp) {
        this.pmp = pmp;
    }

    public String getIncorporable() {
        return this.incorporable;
    }

    public void setIncorporable(String incorporable) {
        this.incorporable = incorporable;
    }

    public java.sql.Date getDateDesactivation() {
        return this.dateDesactivation;
    }

    public void setDateDesactivation(java.sql.Date dateDesactivation) {
        this.dateDesactivation = dateDesactivation;
    }

    public Boolean getIsAchatDirect() {
        return this.isAchatDirect;
    }

    public void setIsAchatDirect(Boolean isAchatDirect) {
        this.isAchatDirect = isAchatDirect;
    }

    public Long getCategorieMinimale() {
        return this.categorieMinimale;
    }

    public void setCategorieMinimale(Long categorieMinimale) {
        this.categorieMinimale = categorieMinimale;
    }

    public Boolean getIsNotActive() {
        return this.isNotActive;
    }

    public void setIsNotActive(Boolean isNotActive) {
        this.isNotActive = isNotActive;
    }

    public Long getDernierPrixVente() {
        return this.dernierPrixVente;
    }

    public void setDernierPrixVente(Long dernierPrixVente) {
        this.dernierPrixVente = dernierPrixVente;
    }

    public Long getPrixVente() {
        return this.prixVente;
    }

    public void setPrixVente(Long prixVente) {
        this.prixVente = prixVente;
    }

    public String getObservation() {
        return this.observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }

    public Long getCrNatureServiceId() {
        return this.crNatureServiceId;
    }

    public void setCrNatureServiceId(Long crNatureServiceId) {
        this.crNatureServiceId = crNatureServiceId;
    }

    public String getPhotoBdata() {
        return this.photoBdata;
    }

    public void setPhotoBdata(String photoBdata) {
        this.photoBdata = photoBdata;
    }

    public String getPhotoCtype() {
        return this.photoCtype;
    }

    public void setPhotoCtype(String photoCtype) {
        this.photoCtype = photoCtype;
    }

    public String getPhotoSdata() {
        return this.photoSdata;
    }

    public void setPhotoSdata(String photoSdata) {
        this.photoSdata = photoSdata;
    }

    public Boolean getDetail() {
        return this.detail;
    }

    public void setDetail(Boolean detail) {
        this.detail = detail;
    }

    public Boolean getAllowNegativeValue() {
        return this.allowNegativeValue;
    }

    public void setAllowNegativeValue(Boolean allowNegativeValue) {
        this.allowNegativeValue = allowNegativeValue;
    }

    public java.sql.Date getDateCommercial() {
        return this.dateCommercial;
    }

    public void setDateCommercial(java.sql.Date dateCommercial) {
        this.dateCommercial = dateCommercial;
    }

    public String getRefFournisseur() {
        return this.refFournisseur;
    }

    public void setRefFournisseur(String refFournisseur) {
        this.refFournisseur = refFournisseur;
    }

    public String getApplicationFodec() {
        return this.applicationFodec;
    }

    public void setApplicationFodec(String applicationFodec) {
        this.applicationFodec = applicationFodec;
    }

    public String getApplicationTpe() {
        return this.applicationTpe;
    }

    public void setApplicationTpe(String applicationTpe) {
        this.applicationTpe = applicationTpe;
    }

    public String getApplicationDc() {
        return this.applicationDc;
    }

    public void setApplicationDc(String applicationDc) {
        this.applicationDc = applicationDc;
    }

    public Long getTauxMarge() {
        return this.tauxMarge;
    }

    public void setTauxMarge(Long tauxMarge) {
        this.tauxMarge = tauxMarge;
    }

    public String getRemise() {
        return this.remise;
    }

    public void setRemise(String remise) {
        this.remise = remise;
    }

    public Long getTauxTvaAchat() {
        return this.tauxTvaAchat;
    }

    public void setTauxTvaAchat(Long tauxTvaAchat) {
        this.tauxTvaAchat = tauxTvaAchat;
    }

    public Long getTauxTvaVente() {
        return this.tauxTvaVente;
    }

    public void setTauxTvaVente(Long tauxTvaVente) {
        this.tauxTvaVente = tauxTvaVente;
    }

    public Long getTauxFodec() {
        return this.tauxFodec;
    }

    public void setTauxFodec(Long tauxFodec) {
        this.tauxFodec = tauxFodec;
    }

    public Long getTauxTpe() {
        return this.tauxTpe;
    }

    public void setTauxTpe(Long tauxTpe) {
        this.tauxTpe = tauxTpe;
    }

    public Long getTauxDc() {
        return this.tauxDc;
    }

    public void setTauxDc(Long tauxDc) {
        this.tauxDc = tauxDc;
    }

    public String getStockable() {
        return this.stockable;
    }

    public void setStockable(String stockable) {
        this.stockable = stockable;
    }

    public String getLotNumSerie() {
        return this.lotNumSerie;
    }

    public void setLotNumSerie(String lotNumSerie) {
        this.lotNumSerie = lotNumSerie;
    }

    public String getGestionDetail() {
        return this.gestionDetail;
    }

    public void setGestionDetail(String gestionDetail) {
        this.gestionDetail = gestionDetail;
    }

    public String getPointageStock() {
        return this.pointageStock;
    }

    public void setPointageStock(String pointageStock) {
        this.pointageStock = pointageStock;
    }

    public Long getDelaiLivraisMoyen() {
        return this.delaiLivraisMoyen;
    }

    public void setDelaiLivraisMoyen(Long delaiLivraisMoyen) {
        this.delaiLivraisMoyen = delaiLivraisMoyen;
    }

    public String getMethodeTraitementChoixFourn() {
        return this.methodeTraitementChoixFourn;
    }

    public void setMethodeTraitementChoixFourn(String methodeTraitementChoixFourn) {
        this.methodeTraitementChoixFourn = methodeTraitementChoixFourn;
    }

    public String getCrFournisseurId() {
        return this.crFournisseurId;
    }

    public void setCrFournisseurId(String crFournisseurId) {
        this.crFournisseurId = crFournisseurId;
    }

    public Long getPrixPublic() {
        return this.prixPublic;
    }

    public void setPrixPublic(Long prixPublic) {
        this.prixPublic = prixPublic;
    }

    public Long getRetardLivraisMoyen() {
        return this.retardLivraisMoyen;
    }

    public void setRetardLivraisMoyen(Long retardLivraisMoyen) {
        this.retardLivraisMoyen = retardLivraisMoyen;
    }
}
