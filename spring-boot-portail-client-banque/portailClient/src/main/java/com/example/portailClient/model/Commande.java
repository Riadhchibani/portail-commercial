package com.example.portailClient.model;

import javax.persistence.*;
import java.sql.Date;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(
        name = "commande"
)
public class Commande {

    @Id
    @SequenceGenerator(
            name = "commande_sequence",
            sequenceName = "commande_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "commande_sequence"
    )
    @Column(
            name = "id_commande",
            updatable = false
    )
    private Long id_commande;

    @Column(
            name = "date",
            nullable = false
    )
    private Date date; //date de commande

    @Column(
            name = "description",
            nullable = false
    )
    private String description;


    @Column(
            name = "produit",
            //referencedColumnName = "id_produit",
            nullable = false
    )
    private String produit;

    @Column(
            name = "prix",
            nullable = false
    )
    private Long prix;

    @Column(
            name = "acceptation",
            nullable = false
    )
    private boolean acceptation;

    @ManyToOne
    private Utilisateur utilisateur_Admin;

    @ManyToOne
    private Utilisateur utilisateur_Client;

    @OneToOne
    @JoinColumn(
            nullable = false,
            unique = true
    )
    private DemandeProduit demande;


    public Commande() {

    }

    public Commande(Date date, String description, String produit, Long prix, boolean acceptation) {
        this.date = date;
        this.description = description;
        this.produit = produit;
        this.prix = prix;
        this.acceptation = acceptation;
    }

    public Long getId_commande() {
        return id_commande;
    }

    public void setId_commande(Long id_commande) {
        this.id_commande = id_commande;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProduit() {
        return produit;
    }

    public void setProduit(String produit) {
        this.produit = produit;
    }

    public Long getPrix() {
        return prix;
    }

    public void setPrix(Long prix) {
        this.prix = prix;
    }

    public Utilisateur getUtilisateur_Admin() {
        return utilisateur_Admin;
    }

    public void setUtilisateur_Admin(Utilisateur utilisateur_Admin) {
        this.utilisateur_Admin = utilisateur_Admin;
    }

    public boolean isAcceptation() {
        return acceptation;
    }

    public void setAcceptation(boolean acceptation) {
        this.acceptation = acceptation;
    }

    public Utilisateur getUtilisateur_Client() {
        return utilisateur_Client;
    }

    public void setUtilisateur_Client(Utilisateur utilisateur_Client) {
        this.utilisateur_Client = utilisateur_Client;
    }

    public DemandeProduit getDemande() {
        return demande;
    }

    public void setDemande(DemandeProduit demande) {
        this.demande = demande;
    }
}
