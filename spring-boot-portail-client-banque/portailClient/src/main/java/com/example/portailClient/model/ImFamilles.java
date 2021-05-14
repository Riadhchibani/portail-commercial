package com.example.portailClient.model;

import javax.persistence.*;

@Entity
@Table(
        name = "im_familles",
        schema = "sss_immo_db"
)
public class ImFamilles {
    @Id
    @Column(name = "im_familles_id")
    private Long imFamillesId;

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

    @Column(name = "im_classes_id")
    private String imClassesId;

    @Column(name = "max_seuil")
    private Long maxSeuil;

    public Long getImFamillesId() {
        return this.imFamillesId;
    }

    public void setImFamillesId(Long imFamillesId) {
        this.imFamillesId = imFamillesId;
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

    public String getImClassesId() {
        return this.imClassesId;
    }

    public void setImClassesId(String imClassesId) {
        this.imClassesId = imClassesId;
    }

    public Long getMaxSeuil() {
        return this.maxSeuil;
    }

    public void setMaxSeuil(Long maxSeuil) {
        this.maxSeuil = maxSeuil;
    }
}
