package com.example.portailClient.model;


import javax.persistence.*;
import java.sql.Date;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity(
        name = "Reclamation"
)
@Table(
        name = "Reclamation"
)
public class Reclamation {

    @Id
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "publication_sequence"
    )
    @Column(
            name = "id_reclamation",
            updatable = false
    )
    private Long id_reclamation;
    @Column(
            name = "title_reclamation",
            nullable = false
    )
    private String title_reclamation;
    @Column(
            name = "description",
            nullable = false
    )
    private String description;
    @Column(
            name = "etat_reclamation",
            nullable = false
    )
    private String etat_reclamation;
    @Column(
            name = "date",
            nullable = false
    )
    private Date date;

    @OneToOne
    private Utilisateur utilisateur;

    public Reclamation(Long id_reclamation, String description, String etat_reclamation, Date date, String title_reclamation) {
        this.id_reclamation = id_reclamation;
        this.description = description;
        this.etat_reclamation = etat_reclamation;
        this.date = date;
        this.title_reclamation = title_reclamation;
    }

    public Reclamation() {
    }

    public Long getId_reclamation() {
        return id_reclamation;
    }

    public void setId_reclamation(Long id_reclamation) {
        this.id_reclamation = id_reclamation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEtat_reclamation() {
        return etat_reclamation;
    }

    public void setEtat_reclamation(String etat_reclamation) {
        this.etat_reclamation = etat_reclamation;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public String getTitle_reclamation() {
        return title_reclamation;
    }

    public void setTitle_reclamation(String title_reclamation) {
        this.title_reclamation = title_reclamation;
    }
}
