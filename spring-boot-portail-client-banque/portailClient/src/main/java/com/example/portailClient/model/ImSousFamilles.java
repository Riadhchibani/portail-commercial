package com.example.portailClient.model;

import javax.persistence.*;

@Entity
@Table(
        name = "im_sous_familles",
        schema = "sss_immo_db"
)
public class ImSousFamilles {
    @Id
    @Column(name = "im_sous_familles_id")
    private Long imSousFamillesId;

    @Column(name = "libelle")
    private String libelle;

    @Column(name = "mat_pers_cre")
    private String matPersCre;

    @Column(name = "date_creation")
    private java.sql.Date dateCreation;

    @Column(name = "mat_pers_mod")
    private String matPersMod;

    @Column(name = "date_modification")
    private java.sql.Date dateModification;

    @Column(name = "im_familles_id")
    private Long imFamillesId;

    @Column(name = "vendable")
    private Boolean vendable;

    @Column(name = "classe_ngp_libre")
    private Boolean classeNgpLibre;

    @Column(name = "abr")
    private String abr;

    public Long getImSousFamillesId() {
        return this.imSousFamillesId;
    }

    public void setImSousFamillesId(Long imSousFamillesId) {
        this.imSousFamillesId = imSousFamillesId;
    }

    public String getLibelle() {
        return this.libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
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

    public Long getImFamillesId() {
        return this.imFamillesId;
    }

    public void setImFamillesId(Long imFamillesId) {
        this.imFamillesId = imFamillesId;
    }

    public Boolean getVendable() {
        return this.vendable;
    }

    public void setVendable(Boolean vendable) {
        this.vendable = vendable;
    }

    public Boolean getClasseNgpLibre() {
        return this.classeNgpLibre;
    }

    public void setClasseNgpLibre(Boolean classeNgpLibre) {
        this.classeNgpLibre = classeNgpLibre;
    }

    public String getAbr() {
        return this.abr;
    }

    public void setAbr(String abr) {
        this.abr = abr;
    }
}
